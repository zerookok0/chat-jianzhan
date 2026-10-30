import { AppLink } from '../components/ui/Media'
import { useDocumentMeta } from '../lib/hooks'
import { useI18n } from '../i18n'

export function NotFound() {
  const { t } = useI18n()

  useDocumentMeta(t('meta.nfTitle'), t('meta.nfDesc'))

  return (
    <div className="shell not-found-page">
      <p className="eyebrow">404</p>
      <h1 className="display display--lg">{t('nf.title')}</h1>
      <p className="body">{t('nf.body')}</p>
      <div className="not-found-page__links">
        <AppLink href="/collection" className="btn btn--outline">
          {t('nf.cta1')}
        </AppLink>
        <AppLink href="/" className="btn">
          {t('nf.cta2')}
        </AppLink>
      </div>
    </div>
  )
}
