# Static Hosting & Deployment Guide
## Elite Fire and Protection

The application has been built using a **Static Site Generation (SSG)** architecture.
Running `npm run build` outputs 24 pre-rendered static HTML pages, CSS bundles, JS hydration chunks, `robots.txt`, and `sitemap.xml` directly into `client/dist/`.

Because the site is 100% static, it can be hosted on any high-performance Edge CDN platform for **₹0 to ₹500/month** with automatic SSL, global CDN caching, and 99.99% uptime.

---

### Option A (Recommended): Vercel Deployment

1. **Push your code to GitHub:**
   ```bash
   git init
   git add .
   git commit -m "feat: complete static website for Elite Fire and Protection"
   git remote add origin https://github.com/your-username/elite-fire-and-protection.git
   git push -u origin main
   ```
2. **Connect to Vercel:**
   - Log into [vercel.com](https://vercel.com).
   - Click **Add New Project** and select your GitHub repository.
   - Configure Build Settings:
     - **Framework Preset:** Vite
     - **Root Directory:** `./`
     - **Build Command:** `npm run build`
     - **Output Directory:** `client/dist`
   - Click **Deploy**.
3. **Custom Domain:**
   - Go to Project Settings &rarr; Domains &rarr; Add `elitefireandprotection.in` and `www.elitefireandprotection.in`.
   - Update your domain DNS with your registrar:
     - `A` Record: `@` &rarr; `76.76.21.21`
     - `CNAME` Record: `www` &rarr; `cname.vercel-dns.com`

---

### Option B: Netlify Deployment

1. **Connect to Netlify:**
   - Log into [netlify.com](https://www.netlify.com).
   - Click **Add new site** &rarr; **Import an existing project**.
   - Build Settings:
     - **Base directory:** (leave blank or `./`)
     - **Build command:** `npm run build`
     - **Publish directory:** `client/dist`
   - Click **Deploy site**.
2. **Domain Configuration:**
   - In Netlify Site Settings &rarr; Domain management &rarr; Add custom domain `elitefireandprotection.in`.
   - Point your DNS records as specified by Netlify.

---

### Option C: Cloudflare Pages

1. In the Cloudflare dashboard, go to **Workers & Pages** &rarr; **Create application** &rarr; **Pages** &rarr; **Connect to Git**.
2. Select repository:
   - **Build command:** `npm run build`
   - **Build output directory:** `client/dist`
3. Click **Save and Deploy**. Cloudflare automatically handles SSL, DDOS protection, and edge caching across 300+ global data centers.

---

### Option D: Traditional Apache / Nginx / Shared Hosting (cPanel)

If uploading to traditional web hosting via FTP or cPanel File Manager:
1. Run local build: `npm run build`
2. Open `d:\Elite\client\dist\`
3. Upload all files and folders inside `client/dist/` directly into your server's `public_html/` root directory.
4. Add the following `.htaccess` inside `public_html/` to enable clean URLs and gzip compression:

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  # Serve existing files and directories
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule ^ index.html [L]
</IfModule>

<IfModule mod_deflate.c>
  AddOutputFilterByType DEFLATE text/html text/plain text/xml text/css text/javascript application/javascript application/json
</IfModule>
```
