import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ChangeEvent,
  type FormEvent,
  type ReactNode,
} from 'react'
import { defaultHome, defaultProducts, defaultSite } from '../data/content'
import { resolveImage } from '../data/images'
import { categories, glazes } from '../data/products'
import type { Product, SpecItem } from '../data/types'
import type {
  AdminStatus,
  ContentBundle,
  HomeContent,
  LinkItem,
  RepoConfig,
  SiteContent,
} from '../lib/admin/types'
import {
  commitFiles,
  fetchContentFile,
  GitHubError,
  toBase64,
  verifyRepo,
} from '../lib/admin/github'
import { formatBytes, prepareImage, type PreparedImage } from '../lib/admin/imageUpload'
import '../styles/admin.css'

const REPO_OWNER = 'zerookok0'
const REPO_NAME = 'chat-jianzhan'
const REPO_BRANCH = 'main'
const TOKEN_KEY = 'jz_admin_token'
const REMEMBER_KEY = 'jz_admin_remember'
const PRODUCTS_FILE = 'content/products.json'
const SITE_FILE = 'content/site.json'
const HOME_FILE = 'content/home.json'

const availabilityOptions: Product['availability'][] = [
  'available',
  'made-to-order',
  'sold-out',
  'enquire',
]

function readStoredToken(): string {
  try {
    return sessionStorage.getItem(TOKEN_KEY) || localStorage.getItem(TOKEN_KEY) || ''
  } catch {
    return ''
  }
}

function readRemembered(): boolean {
  try {
    return localStorage.getItem(REMEMBER_KEY) === '1'
  } catch {
    return false
  }
}

function buildConfig(token: string): RepoConfig {
  return {
    owner: REPO_OWNER,
    repo: REPO_NAME,
    branch: REPO_BRANCH,
    token,
  }
}

function errorMessage(error: unknown): string {
  if (error instanceof GitHubError) return error.message
  if (error instanceof Error) return error.message
  return '操作失败，请重试。'
}

function parseProducts(text: string): Product[] {
  const parsed = JSON.parse(text) as { products?: Product[] } | Product[]
  const products = Array.isArray(parsed) ? parsed : parsed.products

  if (!Array.isArray(products)) {
    throw new Error('products.json 格式不正确。')
  }

  return products.map((product) => ({
    ...product,
    images: Array.isArray(product.images) ? product.images : [],
    specifications: Array.isArray(product.specifications) ? product.specifications : [],
  }))
}

function mergeSite(value: unknown): SiteContent {
  const remote = (value && typeof value === 'object' ? value : {}) as Partial<SiteContent>

  return {
    ...defaultSite,
    ...remote,
    social: Array.isArray(remote.social) ? remote.social : defaultSite.social,
    policies: Array.isArray(remote.policies) ? remote.policies : defaultSite.policies,
    navigation: Array.isArray(remote.navigation) ? remote.navigation : defaultSite.navigation,
  }
}

function section<T extends object>(base: T, value: unknown): T {
  return { ...base, ...((value && typeof value === 'object' ? value : {}) as Partial<T>) }
}

function mergeHome(value: unknown): HomeContent {
  const remote = (value && typeof value === 'object' ? value : {}) as Partial<HomeContent>

  return {
    hero: section(defaultHome.hero, remote.hero),
    soul: section(defaultHome.soul, remote.soul),
    collection: section(defaultHome.collection, remote.collection),
    craft: section(defaultHome.craft, remote.craft),
    gifting: {
      ...section(defaultHome.gifting, remote.gifting),
      list: Array.isArray(remote.gifting?.list) ? remote.gifting.list : defaultHome.gifting.list,
    },
    journal: section(defaultHome.journal, remote.journal),
    closing: section(defaultHome.closing, remote.closing),
  }
}

function Field({
  label,
  value,
  onChange,
  multiline = false,
  type = 'text',
  hint,
  readOnly = false,
}: {
  label: string
  value: string | number
  onChange?: (value: string) => void
  multiline?: boolean
  type?: string
  hint?: string
  readOnly?: boolean
}) {
  return (
    <label className="admin__field">
      <span className="admin__label">{label}</span>
      {multiline ? (
        <textarea
          className="admin__input admin__textarea"
          value={value}
          readOnly={readOnly}
          onChange={(event) => onChange?.(event.target.value)}
          rows={4}
        />
      ) : (
        <input
          className="admin__input"
          value={value}
          type={type}
          readOnly={readOnly}
          onChange={(event) => onChange?.(event.target.value)}
        />
      )}
      {hint && <span className="admin__hint">{hint}</span>}
    </label>
  )
}

function LinkListEditor({
  label,
  items,
  onChange,
}: {
  label: string
  items: LinkItem[]
  onChange: (items: LinkItem[]) => void
}) {
  return (
    <div className="admin__stack">
      <div className="admin__section-head">
        <h3>{label}</h3>
        <button
          type="button"
          className="admin__button admin__button--small"
          onClick={() => onChange([...items, { label: '', href: '' }])}
        >
          + 添加
        </button>
      </div>
      {items.map((item, index) => (
        <div className="admin__row" key={index}>
          <input
            className="admin__input"
            value={item.label}
            placeholder="显示文字"
            onChange={(event) =>
              onChange(
                items.map((entry, entryIndex) =>
                  entryIndex === index ? { ...entry, label: event.target.value } : entry,
                ),
              )
            }
          />
          <input
            className="admin__input"
            value={item.href}
            placeholder="链接，例如 /about"
            onChange={(event) =>
              onChange(
                items.map((entry, entryIndex) =>
                  entryIndex === index ? { ...entry, href: event.target.value } : entry,
                ),
              )
            }
          />
          <button
            type="button"
            className="admin__button admin__button--ghost admin__button--small"
            onClick={() => onChange(items.filter((_, entryIndex) => entryIndex !== index))}
          >
            删除
          </button>
        </div>
      ))}
    </div>
  )
}

function StringListEditor({
  label,
  items,
  onChange,
}: {
  label: string
  items: string[]
  onChange: (items: string[]) => void
}) {
  return (
    <div className="admin__stack">
      <div className="admin__section-head">
        <h3>{label}</h3>
        <button
          type="button"
          className="admin__button admin__button--small"
          onClick={() => onChange([...items, ''])}
        >
          + 添加
        </button>
      </div>
      {items.map((item, index) => (
        <div className="admin__row" key={index}>
          <input
            className="admin__input"
            value={item}
            placeholder="一行文字"
            onChange={(event) =>
              onChange(items.map((entry, entryIndex) => (entryIndex === index ? event.target.value : entry)))
            }
          />
          <button
            type="button"
            className="admin__button admin__button--ghost admin__button--small"
            onClick={() => onChange(items.filter((_, entryIndex) => entryIndex !== index))}
          >
            删除
          </button>
        </div>
      ))}
    </div>
  )
}

function Section({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="admin__card">
      <h2 className="admin__card-title">{title}</h2>
      {children}
    </section>
  )
}

export default function Admin() {
  const [token, setToken] = useState(readStoredToken)
  const [rememberToken, setRememberToken] = useState(readRemembered)
  const [showToken, setShowToken] = useState(false)
  const [authed, setAuthed] = useState(false)
  const [busy, setBusy] = useState(false)
  const [error, setError] = useState('')
  const [content, setContent] = useState<ContentBundle | null>(null)
  const [tab, setTab] = useState<'products' | 'site' | 'home'>('products')
  const [selectedId, setSelectedId] = useState('')
  const [pendingImages, setPendingImages] = useState<Record<string, PreparedImage>>({})
  const [dirty, setDirty] = useState(false)
  const [uploading, setUploading] = useState(false)
  const [newImageValue, setNewImageValue] = useState('')
  const [status, setStatus] = useState<AdminStatus>({ kind: 'idle', message: '' })
  const bootstrapped = useRef(false)
  const selected = content?.products.find((product) => product.id === selectedId) ?? null

  useEffect(() => {
    const previousTitle = document.title
    document.title = 'Content Admin · JIANZHAN'
    const meta = document.createElement('meta')
    meta.name = 'robots'
    meta.content = 'noindex, nofollow'
    document.head.appendChild(meta)

    return () => {
      document.title = previousTitle
      meta.remove()
    }
  }, [])

  useEffect(() => {
    if (!dirty) return

    const onBeforeUnload = (event: BeforeUnloadEvent) => {
      event.preventDefault()
      event.returnValue = ''
    }

    window.addEventListener('beforeunload', onBeforeUnload)
    return () => window.removeEventListener('beforeunload', onBeforeUnload)
  }, [dirty])

  const connect = useCallback(async (rawToken: string) => {
    const clean = rawToken.trim()

    if (!clean) {
      setError('请先填写 GitHub Token。')
      return
    }

    setBusy(true)
    setError('')
    setStatus({ kind: 'loading', message: '正在连接 GitHub 并读取内容…' })

    try {
      const config = buildConfig(clean)
      const repo = await verifyRepo(config)

      const [productsFile, siteFile, homeFile] = await Promise.all([
        fetchContentFile(config, PRODUCTS_FILE),
        fetchContentFile(config, SITE_FILE),
        fetchContentFile(config, HOME_FILE),
      ])

      const products = productsFile ? parseProducts(productsFile.text) : defaultProducts
      const site = siteFile ? mergeSite(JSON.parse(siteFile.text)) : defaultSite
      const home = homeFile ? mergeHome(JSON.parse(homeFile.text)) : defaultHome

      setContent({ products, site, home })
      setSelectedId(products[0]?.id ?? '')
      setToken(clean)
      setAuthed(true)
      setDirty(false)
      setStatus({
        kind: repo.canPush ? 'success' : 'error',
        message: repo.canPush
          ? `已连接 ${repo.fullName}。`
          : '已连接，但这个 Token 可能没有写权限，保存时可能失败。',
      })
    } catch (err) {
      setAuthed(false)
      setContent(null)
      setError(errorMessage(err))
      setStatus({ kind: 'error', message: errorMessage(err) })
    } finally {
      setBusy(false)
    }
  }, [])

  useEffect(() => {
    if (bootstrapped.current) return
    bootstrapped.current = true

    if (token) {
      void connect(token)
    }
  }, [connect, token])

  const persistToken = (value: string, remember: boolean) => {
    try {
      if (remember) {
        localStorage.setItem(TOKEN_KEY, value)
        sessionStorage.removeItem(TOKEN_KEY)
        localStorage.setItem(REMEMBER_KEY, '1')
      } else {
        sessionStorage.setItem(TOKEN_KEY, value)
        localStorage.removeItem(TOKEN_KEY)
        localStorage.removeItem(REMEMBER_KEY)
      }
    } catch {
      /* storage can be blocked; the session still works */
    }
  }

  const handleLogin = (event: FormEvent) => {
    event.preventDefault()
    persistToken(token, rememberToken)
    void connect(token)
  }

  const logout = () => {
    try {
      localStorage.removeItem(TOKEN_KEY)
      localStorage.removeItem(REMEMBER_KEY)
      sessionStorage.removeItem(TOKEN_KEY)
    } catch {
      /* ignore */
    }
    setToken('')
    setAuthed(false)
    setContent(null)
    setPendingImages({})
    setDirty(false)
    setStatus({ kind: 'idle', message: '' })
  }

  const markDirty = () => {
    setDirty(true)

    if (status.kind === 'success' || status.kind === 'error') {
      setStatus({ kind: 'idle', message: '' })
    }
  }

  const updateProduct = (id: string, patch: Partial<Product>) => {
    setContent((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        products: prev.products.map((product) =>
          product.id === id ? { ...product, ...patch } : product,
        ),
      }
    })
    markDirty()
  }

  const updateSelected = (patch: Partial<Product>) => {
    if (selected) updateProduct(selected.id, patch)
  }

  const updateSpec = (index: number, field: keyof SpecItem, value: string) => {
    if (!selected) return
    const specifications = selected.specifications.map((spec, specIndex) =>
      specIndex === index ? { ...spec, [field]: value } : spec,
    )
    updateSelected({ specifications })
  }

  const updateSite = (patch: Partial<SiteContent>) => {
    setContent((prev) => (prev ? { ...prev, site: { ...prev.site, ...patch } } : prev))
    markDirty()
  }

  const updateHome = <K extends keyof HomeContent>(key: K, patch: Partial<HomeContent[K]>) => {
    setContent((prev) => {
      if (!prev) return prev
      return {
        ...prev,
        home: {
          ...prev.home,
          [key]: { ...prev.home[key], ...patch },
        },
      }
    })
    markDirty()
  }

  const handleImages = async (event: ChangeEvent<HTMLInputElement>, product: Product) => {
    const files = Array.from(event.target.files ?? [])
    event.target.value = ''

    if (!files.length) return

    setUploading(true)
    setStatus({ kind: 'loading', message: `正在处理 ${files.length} 张图片…` })

    try {
      const prepared: PreparedImage[] = []

      for (const file of files) {
        prepared.push(await prepareImage(file, product.slug))
      }

      setPendingImages((prev) => ({
        ...prev,
        ...Object.fromEntries(prepared.map((image) => [image.publicPath, image])),
      }))
      updateProduct(product.id, {
        images: [...product.images, ...prepared.map((image) => image.publicPath)],
      })
      setStatus({
        kind: 'success',
        message: `已处理 ${prepared.length} 张图片，点击“保存并部署”提交。`,
      })
    } catch (err) {
      setStatus({ kind: 'error', message: errorMessage(err) })
    } finally {
      setUploading(false)
    }
  }

  const moveImage = (product: Product, index: number, direction: -1 | 1) => {
    const target = index + direction

    if (target < 0 || target >= product.images.length) return

    const images = [...product.images]
    ;[images[index], images[target]] = [images[target], images[index]]
    updateProduct(product.id, { images })
  }

  const handleSave = async () => {
    if (!content) return

    setStatus({ kind: 'saving', message: '正在提交到 GitHub…' })

    const files = [
      {
        path: PRODUCTS_FILE,
        base64: toBase64(JSON.stringify({ products: content.products }, null, 2) + '\n'),
      },
      {
        path: SITE_FILE,
        base64: toBase64(JSON.stringify(content.site, null, 2) + '\n'),
      },
      {
        path: HOME_FILE,
        base64: toBase64(JSON.stringify(content.home, null, 2) + '\n'),
      },
      ...Object.values(pendingImages).map((image) => ({
        path: image.repoPath,
        base64: image.base64,
      })),
    ]

    try {
      const result = await commitFiles(
        buildConfig(token),
        'Update site content from admin',
        files,
      )

      setDirty(false)
      setPendingImages({})
      setStatus({
        kind: 'success',
        message: '已提交到 GitHub。Cloudflare Pages 会在 1-2 分钟内重新部署。',
        url: result.url,
      })
    } catch (err) {
      setStatus({ kind: 'error', message: errorMessage(err) })
    }
  }

  if (!authed) {
    return (
      <div className="admin admin--login">
        <div className="admin__login-card">
          <p className="admin__eyebrow">JIANZHAN · CONTENT STUDIO</p>
          <h1>内容后台</h1>
          <p className="admin__lead">
            用 GitHub Token 登录。内容会直接提交到仓库，Cloudflare Pages 自动重新部署，图片不再经过 bolt.diy 上传。
          </p>

          <form onSubmit={handleLogin} className="admin__login-form">
            <label className="admin__field">
              <span className="admin__label">GitHub Fine-grained Token</span>
              <div className="admin__token-row">
                <input
                  className="admin__input"
                  type={showToken ? 'text' : 'password'}
                  value={token}
                  onChange={(event) => setToken(event.target.value)}
                  placeholder="github_pat_..."
                  autoComplete="off"
                  spellCheck={false}
                />
                <button
                  type="button"
                  className="admin__button admin__button--ghost admin__button--small"
                  onClick={() => setShowToken((value) => !value)}
                >
                  {showToken ? '隐藏' : '显示'}
                </button>
              </div>
            </label>

            <label className="admin__check">
              <input
                type="checkbox"
                checked={rememberToken}
                onChange={(event) => setRememberToken(event.target.checked)}
              />
              在这台设备上记住 Token
            </label>

            <button
              type="submit"
              className="admin__button admin__button--primary admin__button--wide"
              disabled={busy}
            >
              {busy ? '连接中…' : '连接并加载内容'}
            </button>

            {error && <p className="admin__error">{error}</p>}
          </form>

          <div className="admin__help">
            <p>
              仓库：<code>{REPO_OWNER}/{REPO_NAME}</code> · 分支 <code>{REPO_BRANCH}</code>
            </p>
            <p>
              Token 需要该仓库的 <strong>Contents: Read and write</strong> 权限。建议单独创建一个、设置过期时间：
              <a href="https://github.com/settings/tokens?type=beta" target="_blank" rel="noreferrer">
                创建 Fine-grained Token
              </a>
            </p>
            <p>Token 只保存在当前浏览器，不会上传到任何第三方服务器；提交直接发往 api.github.com。</p>
          </div>
        </div>
      </div>
    )
  }

  if (!content) {
    return (
      <div className="admin admin--login">
        <p>正在加载内容…</p>
      </div>
    )
  }

  return (
    <div className="admin">
      <header className="admin__bar">
        <div>
          <p className="admin__eyebrow">JIANZHAN · CONTENT STUDIO</p>
          <h1>内容后台</h1>
        </div>
        <div className="admin__bar-actions">
          <a className="admin__button admin__button--ghost" href="#/" target="_blank" rel="noreferrer">
            打开站点
          </a>
          <button type="button" className="admin__button admin__button--ghost" onClick={logout}>
            退出
          </button>
          <button
            type="button"
            className="admin__button admin__button--primary"
            onClick={handleSave}
            disabled={status.kind === 'saving' || uploading}
          >
            {status.kind === 'saving' ? '提交中…' : dirty ? '保存并部署 *' : '保存并部署'}
          </button>
        </div>
      </header>

      {status.message && (
        <div className={`admin__status admin__status--${status.kind}`}>
          <span>{status.message}</span>
          {'url' in status && status.url && (
            <a href={status.url} target="_blank" rel="noreferrer">
              查看提交
            </a>
          )}
        </div>
      )}

      <div className="admin__layout">
        <aside className="admin__sidebar">
          <div className="admin__tabs">
            <button
              type="button"
              className={tab === 'products' ? 'is-active' : ''}
              onClick={() => setTab('products')}
            >
              产品
            </button>
            <button
              type="button"
              className={tab === 'site' ? 'is-active' : ''}
              onClick={() => setTab('site')}
            >
              站点
            </button>
            <button
              type="button"
              className={tab === 'home' ? 'is-active' : ''}
              onClick={() => setTab('home')}
            >
              首页文案
            </button>
          </div>

          {tab === 'products' && (
            <nav className="admin__product-list" aria-label="产品列表">
              {content.products.map((product) => (
                <button
                  type="button"
                  key={product.id}
                  className={product.id === selectedId ? 'is-active' : ''}
                  onClick={() => {
                    setSelectedId(product.id)
                    setNewImageValue('')
                  }}
                >
                  <span>{product.name}</span>
                  <small>{product.slug}</small>
                </button>
              ))}
            </nav>
          )}
        </aside>

        <main className="admin__main">
          {tab === 'products' && selected && (
            <>
              <Section title="产品信息">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="产品名称"
                    value={selected.name}
                    onChange={(value) => updateSelected({ name: value })}
                  />
                  <Field label="Slug（不可改）" value={selected.slug} readOnly />
                  <Field
                    label="副标题"
                    value={selected.subtitle}
                    onChange={(value) => updateSelected({ subtitle: value })}
                  />
                  <Field
                    label="价格"
                    type="number"
                    value={selected.price}
                    onChange={(value) => updateSelected({ price: Number(value) || 0 })}
                  />
                  <Field
                    label="货币"
                    value={selected.currency}
                    onChange={(value) => updateSelected({ currency: value })}
                  />
                  <Field
                    label="年份"
                    value={selected.year}
                    onChange={(value) => updateSelected({ year: value })}
                  />
                  <label className="admin__field">
                    <span className="admin__label">分类</span>
                    <select
                      className="admin__input"
                      value={selected.category}
                      onChange={(event) =>
                        updateSelected({ category: event.target.value as Product['category'] })
                      }
                    >
                      {categories.map((category) => (
                        <option key={category.id} value={category.id}>
                          {category.label}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="admin__field">
                    <span className="admin__label">釉色</span>
                    <select
                      className="admin__input"
                      value={selected.glaze}
                      onChange={(event) =>
                        updateSelected({ glaze: event.target.value as Product['glaze'] })
                      }
                    >
                      {glazes.map((glaze) => (
                        <option key={glaze.id} value={glaze.id}>
                          {glaze.name}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="admin__field">
                    <span className="admin__label">状态</span>
                    <select
                      className="admin__input"
                      value={selected.availability}
                      onChange={(event) =>
                        updateSelected({
                          availability: event.target.value as Product['availability'],
                        })
                      }
                    >
                      {availabilityOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </label>
                  <label className="admin__check admin__check--inline">
                    <input
                      type="checkbox"
                      checked={selected.featured}
                      onChange={(event) => updateSelected({ featured: event.target.checked })}
                    />
                    首页推荐
                  </label>
                </div>

                <Field
                  label="描述"
                  value={selected.description}
                  multiline
                  onChange={(value) => updateSelected({ description: value })}
                />
              </Section>

              <Section title="产品图片">
                <p className="admin__hint">
                  上传的图片会提交到 <code>public/images/uploads/</code>。证书图放在最后；也可以直接填已有的图片 key。
                </p>

                <div className="admin__image-grid">
                  {selected.images.map((image, index) => (
                    <div className="admin__image" key={index}>
                      <img
                        src={
                          pendingImages[image]
                            ? pendingImages[image].previewUrl
                            : resolveImage(image, 480)
                        }
                        alt=""
                        loading="lazy"
                      />
                      <div className="admin__image-body">
                        <input
                          className="admin__input admin__input--small"
                          value={image}
                          readOnly={Boolean(pendingImages[image])}
                          onChange={(event) =>
                            updateSelected({
                              images: selected.images.map((entry, entryIndex) =>
                                entryIndex === index ? event.target.value : entry,
                              ),
                            })
                          }
                        />
                        {pendingImages[image] && (
                          <span className="admin__badge">
                            待提交 · {formatBytes(pendingImages[image].bytes)}
                          </span>
                        )}
                        <div className="admin__image-actions">
                          <button
                            type="button"
                            className="admin__button admin__button--ghost admin__button--small"
                            onClick={() => moveImage(selected, index, -1)}
                            disabled={index === 0}
                          >
                            上移
                          </button>
                          <button
                            type="button"
                            className="admin__button admin__button--ghost admin__button--small"
                            onClick={() => moveImage(selected, index, 1)}
                            disabled={index === selected.images.length - 1}
                          >
                            下移
                          </button>
                          <button
                            type="button"
                            className="admin__button admin__button--ghost admin__button--small"
                            onClick={() =>
                              updateSelected({
                                images: selected.images.filter((_, entryIndex) => entryIndex !== index),
                              })
                            }
                          >
                            删除
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="admin__add-image">
                  <input
                    className="admin__input"
                    value={newImageValue}
                    onChange={(event) => setNewImageValue(event.target.value)}
                    placeholder="图片 key 或 /images/... 路径"
                  />
                  <button
                    type="button"
                    className="admin__button admin__button--ghost"
                    onClick={() => {
                      const value = newImageValue.trim()
                      if (!value) return
                      updateSelected({ images: [...selected.images, value] })
                      setNewImageValue('')
                    }}
                  >
                    添加
                  </button>
                  <label className="admin__button admin__button--primary admin__upload">
                    <input
                      type="file"
                      accept="image/*"
                      multiple
                      disabled={uploading}
                      onChange={(event) => void handleImages(event, selected)}
                    />
                    {uploading ? '处理中…' : '上传图片'}
                  </label>
                </div>
              </Section>

              <Section title="规格">
                <div className="admin__stack">
                  {selected.specifications.map((spec, index) => (
                    <div className="admin__row" key={index}>
                      <input
                        className="admin__input"
                        value={spec.label}
                        placeholder="名称，例如 Diameter"
                        onChange={(event) => updateSpec(index, 'label', event.target.value)}
                      />
                      <input
                        className="admin__input"
                        value={spec.value}
                        placeholder="值，例如 12.4 cm"
                        onChange={(event) => updateSpec(index, 'value', event.target.value)}
                      />
                      <button
                        type="button"
                        className="admin__button admin__button--ghost admin__button--small"
                        onClick={() =>
                          updateSelected({
                            specifications: selected.specifications.filter(
                              (_, specIndex) => specIndex !== index,
                            ),
                          })
                        }
                      >
                        删除
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    className="admin__button admin__button--small"
                    onClick={() =>
                      updateSelected({
                        specifications: [...selected.specifications, { label: '', value: '' }],
                      })
                    }
                  >
                    + 添加规格
                  </button>
                </div>
              </Section>

              <Section title="购买信息">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="购买链接"
                    value={selected.purchaseUrl ?? ''}
                    onChange={(value) => updateSelected({ purchaseUrl: value || null })}
                    hint="留空则按 WooCommerce ID 或询价处理"
                  />
                  <Field
                    label="WooCommerce 产品 ID"
                    type="number"
                    value={selected.wooId ?? ''}
                    onChange={(value) =>
                      updateSelected({ wooId: value ? Number(value) : undefined })
                    }
                  />
                </div>
              </Section>
            </>
          )}

          {tab === 'site' && (
            <>
              <Section title="品牌与联系">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="品牌名"
                    value={content.site.brand}
                    onChange={(value) => updateSite({ brand: value })}
                  />
                  <Field
                    label="中文品牌"
                    value={content.site.brandCn}
                    onChange={(value) => updateSite({ brandCn: value })}
                  />
                  <Field
                    label="标语"
                    value={content.site.tagline}
                    onChange={(value) => updateSite({ tagline: value })}
                  />
                  <Field
                    label="法律主体"
                    value={content.site.legalName}
                    onChange={(value) => updateSite({ legalName: value })}
                  />
                  <Field
                    label="邮箱"
                    value={content.site.email}
                    onChange={(value) => updateSite({ email: value })}
                  />
                  <Field
                    label="工作室地址"
                    value={content.site.studio}
                    onChange={(value) => updateSite({ studio: value })}
                  />
                  <Field
                    label="营业时间"
                    value={content.site.hours}
                    onChange={(value) => updateSite({ hours: value })}
                  />
                  <Field
                    label="站点 URL"
                    value={content.site.url}
                    onChange={(value) => updateSite({ url: value })}
                  />
                  <Field
                    label="货币"
                    value={content.site.currency}
                    onChange={(value) => updateSite({ currency: value })}
                  />
                </div>
              </Section>

              <Section title="社交链接">
                <LinkListEditor
                  label="Social"
                  items={content.site.social}
                  onChange={(social) => updateSite({ social })}
                />
              </Section>

              <Section title="页脚政策">
                <LinkListEditor
                  label="Policies"
                  items={content.site.policies}
                  onChange={(policies) => updateSite({ policies })}
                />
              </Section>

              <Section title="导航">
                <LinkListEditor
                  label="Navigation"
                  items={content.site.navigation}
                  onChange={(navigation) => updateSite({ navigation })}
                />
              </Section>
            </>
          )}

          {tab === 'home' && (
            <>
              <Section title="首页 Hero">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="小标题"
                    value={content.home.hero.kicker}
                    onChange={(value) => updateHome('hero', { kicker: value })}
                  />
                  <Field
                    label="CTA 按钮"
                    value={content.home.hero.cta}
                    onChange={(value) => updateHome('hero', { cta: value })}
                  />
                  <Field
                    label="主标题第一行"
                    value={content.home.hero.titleLine1}
                    onChange={(value) => updateHome('hero', { titleLine1: value })}
                  />
                  <Field
                    label="主标题第二行"
                    value={content.home.hero.titleLine2}
                    onChange={(value) => updateHome('hero', { titleLine2: value })}
                  />
                </div>
                <Field
                  label="斜体副句"
                  value={content.home.hero.line}
                  onChange={(value) => updateHome('hero', { line: value })}
                />
                <Field
                  label="介绍"
                  value={content.home.hero.sub}
                  multiline
                  onChange={(value) => updateHome('hero', { sub: value })}
                />
              </Section>

              <Section title="The Soul / 收藏区">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="Soul 小标题"
                    value={content.home.soul.eyebrow}
                    onChange={(value) => updateHome('soul', { eyebrow: value })}
                  />
                  <Field
                    label="Soul CTA"
                    value={content.home.soul.cta}
                    onChange={(value) => updateHome('soul', { cta: value })}
                  />
                  <Field
                    label="Soul 标题第一行"
                    value={content.home.soul.titleLine1}
                    onChange={(value) => updateHome('soul', { titleLine1: value })}
                  />
                  <Field
                    label="Soul 标题第二行"
                    value={content.home.soul.titleLine2}
                    onChange={(value) => updateHome('soul', { titleLine2: value })}
                  />
                </div>
                <Field
                  label="Soul 正文"
                  value={content.home.soul.body}
                  multiline
                  onChange={(value) => updateHome('soul', { body: value })}
                />
                <Field
                  label="图片说明"
                  value={content.home.soul.caption}
                  onChange={(value) => updateHome('soul', { caption: value })}
                />

                <div className="admin__grid admin__grid--two">
                  <Field
                    label="收藏区小标题"
                    value={content.home.collection.eyebrow}
                    onChange={(value) => updateHome('collection', { eyebrow: value })}
                  />
                  <Field
                    label="收藏区标题"
                    value={content.home.collection.title}
                    onChange={(value) => updateHome('collection', { title: value })}
                  />
                  <Field
                    label="收藏区 CTA"
                    value={content.home.collection.cta}
                    onChange={(value) => updateHome('collection', { cta: value })}
                  />
                </div>
                <Field
                  label="收藏区说明"
                  value={content.home.collection.note}
                  multiline
                  onChange={(value) => updateHome('collection', { note: value })}
                />
              </Section>

              <Section title="工艺区">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="小标题"
                    value={content.home.craft.eyebrow}
                    onChange={(value) => updateHome('craft', { eyebrow: value })}
                  />
                  <Field
                    label="标题"
                    value={content.home.craft.title}
                    onChange={(value) => updateHome('craft', { title: value })}
                  />
                  <Field
                    label="CTA"
                    value={content.home.craft.cta}
                    onChange={(value) => updateHome('craft', { cta: value })}
                  />
                </div>
                <Field
                  label="正文"
                  value={content.home.craft.body}
                  multiline
                  onChange={(value) => updateHome('craft', { body: value })}
                />
              </Section>

              <Section title="收藏与赠礼">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="小标题"
                    value={content.home.gifting.eyebrow}
                    onChange={(value) => updateHome('gifting', { eyebrow: value })}
                  />
                  <Field
                    label="标题"
                    value={content.home.gifting.title}
                    onChange={(value) => updateHome('gifting', { title: value })}
                  />
                  <Field
                    label="CTA"
                    value={content.home.gifting.cta}
                    onChange={(value) => updateHome('gifting', { cta: value })}
                  />
                </div>
                <Field
                  label="正文"
                  value={content.home.gifting.body}
                  multiline
                  onChange={(value) => updateHome('gifting', { body: value })}
                />
                <StringListEditor
                  label="清单"
                  items={content.home.gifting.list}
                  onChange={(list) => updateHome('gifting', { list })}
                />
              </Section>

              <Section title="Journal / 结尾">
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="Journal 小标题"
                    value={content.home.journal.eyebrow}
                    onChange={(value) => updateHome('journal', { eyebrow: value })}
                  />
                  <Field
                    label="Journal 标题"
                    value={content.home.journal.title}
                    onChange={(value) => updateHome('journal', { title: value })}
                  />
                  <Field
                    label="Journal CTA"
                    value={content.home.journal.cta}
                    onChange={(value) => updateHome('journal', { cta: value })}
                  />
                  <Field
                    label="结尾小标题"
                    value={content.home.closing.eyebrow}
                    onChange={(value) => updateHome('closing', { eyebrow: value })}
                  />
                </div>
                <div className="admin__grid admin__grid--two">
                  <Field
                    label="结尾标题第一行"
                    value={content.home.closing.titleLine1}
                    onChange={(value) => updateHome('closing', { titleLine1: value })}
                  />
                  <Field
                    label="结尾标题第二行"
                    value={content.home.closing.titleLine2}
                    onChange={(value) => updateHome('closing', { titleLine2: value })}
                  />
                  <Field
                    label="主按钮"
                    value={content.home.closing.ctaPrimary}
                    onChange={(value) => updateHome('closing', { ctaPrimary: value })}
                  />
                  <Field
                    label="次按钮"
                    value={content.home.closing.ctaSecondary}
                    onChange={(value) => updateHome('closing', { ctaSecondary: value })}
                  />
                </div>
                <Field
                  label="结尾正文"
                  value={content.home.closing.body}
                  multiline
                  onChange={(value) => updateHome('closing', { body: value })}
                />
              </Section>
            </>
          )}
        </main>
      </div>
    </div>
  )
}
