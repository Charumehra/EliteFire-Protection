# Analytics & Conversion Tracking Guide
## Elite Fire and Protection

### 1. Google Search Console (GSC) Setup
Google Search Console is the primary tool to track organic keyword impressions, clicks, click-through rates (CTR), and crawl indexation status.

1. **Add Property:** Log in to [search.google.com/search-console](https://search.google.com/search-console). Add `https://elitefireandprotection.in` as a **URL Prefix** or `elitefireandprotection.in` as a **Domain property**.
2. **DNS Verification:** Add the TXT verification record provided by Google to your domain DNS manager.
3. **Submit XML Sitemap:**
   - Go to **Sitemaps** in the left menu.
   - Enter `sitemap.xml` and click **Submit**.
   - Verify that all 24 URLs are discovered without crawl errors.
4. **URL Inspection:** Submit the homepage (`/`) and each of the 6 service pages (`/services/fire-alarm-systems`, etc.) for immediate inspection and indexation.

---

### 2. Google Analytics 4 (GA4) Tracking
To track user engagement and qualified lead conversions:

1. Create a GA4 property in [analytics.google.com](https://analytics.google.com).
2. Obtain your **Measurement ID** (e.g., `G-XXXXXXXXXX`).
3. Insert the GA4 tag into the `<head>` of `client/index.html`:
```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### 3. Tracked Conversion Events
The website's `analytics.ts` helper already dispatches the following conversion events:

| Event Name | Trigger Condition | Conversion Significance |
| :--- | :--- | :--- |
| `whatsapp_click` | User clicks any WhatsApp contact button | High-intent lead connecting directly via WhatsApp |
| `phone_click` | User clicks a phone call number (`tel:`) | High-intent customer initiating phone call |
| `quote_form_submit_success` | Valid quote request prepared & submitted | Formal quotation lead captured with scope details |

In GA4, navigate to **Admin** &rarr; **Events** &rarr; toggle **Mark as conversion** for `whatsapp_click`, `phone_click`, and `quote_form_submit_success`.
