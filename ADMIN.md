# Content Studio (`/admin`)

The storefront keeps its editable copy in `/content` as JSON, so product text and images can be changed without asking bolt.diy to read local files.

## Open the admin

After the site is deployed:

```
https://<your-domain>/#/admin
```

For example: `https://jianzhan.studio/#/admin`.

## Create a GitHub token

1. Open <https://github.com/settings/tokens?type=beta>.
2. **Generate new token** → name it `jianzhan-content-admin`.
3. **Repository access** → Only select repositories → `zerookok0/chat-jianzhan`.
4. **Permissions** → Repository permissions → **Contents: Read and write**.
5. Set a short expiration (90 days is sensible).
6. Generate and copy the token.

The token is used only by your browser to call `api.github.com`. It is not sent to any other server. Use “退出” to clear it when you are done on a shared computer.

## What can be edited

- **产品** — name, subtitle, description, price, currency, category, glaze, availability, year, featured flag, specifications, purchase link, WooCommerce ID, and gallery images. Use **+ 新建产品** to add a piece; use **删除产品** at the bottom of the form to remove one.
- **站点** — brand, tagline, contact details, social links, footer policies, navigation.
- **首页文案** — hero, soul, collection, craft, gifting, journal and closing copy.

## Adding a product

1. Click **+ 新建产品** in the left sidebar.
2. Fill in the name, then set a unique slug while the product is still new.
3. Add specifications, pricing and images.
4. Click **保存并部署**.

The slug becomes read-only after the first save. Do not change it later without adding a redirect, or the old product URL will break.

Deleting a product only removes it from the catalogue on the next deploy; images already uploaded stay in `public/images/uploads/`.

Images uploaded through the admin are committed to:

```
public/images/uploads/
```

The product record stores the public path (`/images/uploads/...`). The storefront resolves either a stock image key or a custom path.

## Save and deploy

Click **保存并部署**:

1. The admin creates one commit on `main` with the changed JSON and any new images.
2. Cloudflare Pages notices the new commit and rebuilds.
3. The live site reflects the new copy and images after the build finishes (usually 1–2 minutes).

The success banner links to the commit. Cloudflare's own deployment log is the place to confirm the build finished.

## Image guidance

- JPG, PNG or WebP.
- The admin resizes the long edge to 1800 px and compresses before upload.
- Keep product photos under ~3 MB after compression.
- Upload order is gallery order. Put packaging images before the certificate so the certificate is last.
- For a custom image, paste an absolute URL (`https://...`) or a public path (`/images/...`) into the image field if it already exists.

## Security

- The page sends the token directly to GitHub; there is no content API server.
- The admin route is marked `noindex, nofollow`, but it is still a public URL. The GitHub token is the credential.
- For stronger protection, put Cloudflare Access in front of `/#/admin` and `api.github.com` is still called directly by the browser. (Cloudflare Access only gates the page; it does not need to proxy GitHub.)
- If you ever paste a token into a shared browser, revoke it from GitHub and create a new one.

## Troubleshooting

**`GitHub Token 无效或已过期`**
Create a new fine-grained token and make sure it has Contents read/write on this repository.

**`找不到仓库或文件`**
Check the token's repository access. The admin expects `zerookok0/chat-jianzhan` on `main`.

**Saved but the site is unchanged**
Check the Cloudflare Pages deployment for the new commit. If the project is not connected to GitHub auto-deploy, trigger a deployment manually.

**Build fails with `VITE_WP_SITE_URL`**
Add `VITE_WP_SITE_URL=https://your-wordpress-site.example` to the Cloudflare Pages environment variables. The Vite config has a fallback for the preconnect hint, but checkout links still need the real store URL.
