import React, { useEffect } from 'react';

export interface MetaProps {
  title: string;
  description: string;
  canonicalPath?: string;
  ogImage?: string;
  type?: string;
}

export const SITE_URL = 'https://elitefireandprotection.in';
export const DEFAULT_OG_IMAGE = 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80';

export const MetaTags: React.FC<MetaProps> = ({
  title,
  description,
  canonicalPath = '',
  ogImage = DEFAULT_OG_IMAGE,
  type = 'website',
}) => {
  const canonicalUrl = `${SITE_URL}${canonicalPath.startsWith('/') ? canonicalPath : `/${canonicalPath}`}`;

  useEffect(() => {
    // Only update in client browser environment
    if (typeof document !== 'undefined') {
      document.title = title;

      const setMetaTag = (selector: string, attr: string, value: string) => {
        let el = document.querySelector(selector) as HTMLMetaElement | HTMLLinkElement;
        if (!el) {
          if (selector.startsWith('link')) {
            el = document.createElement('link');
            document.head.appendChild(el);
          } else {
            el = document.createElement('meta');
            document.head.appendChild(el);
          }
        }
        el.setAttribute(attr, value);
      };

      // Description
      setMetaTag('meta[name="description"]', 'content', description);

      // Canonical URL
      setMetaTag('link[rel="canonical"]', 'href', canonicalUrl);

      // Open Graph Tags
      setMetaTag('meta[property="og:title"]', 'content', title);
      setMetaTag('meta[property="og:description"]', 'content', description);
      setMetaTag('meta[property="og:url"]', 'content', canonicalUrl);
      setMetaTag('meta[property="og:image"]', 'content', ogImage);
      setMetaTag('meta[property="og:type"]', 'content', type);

      // Twitter Cards
      setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
      setMetaTag('meta[name="twitter:title"]', 'content', title);
      setMetaTag('meta[name="twitter:description"]', 'content', description);
      setMetaTag('meta[name="twitter:image"]', 'content', ogImage);
    }
  }, [title, description, canonicalUrl, ogImage, type]);

  return null;
};
