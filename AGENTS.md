# AGENTS.md — Openhandsite (batuhanates.com)

## Proje
React + Vite + Tailwind SPA (JavaScript/JSX, TypeScript yok). Dil: TR/EN/DE.
Site: https://www.batuhanates.com — GitHub: batudigital44/Openhandsite — Hosting: **Netlify** (repo kökündeki `netlify.toml`, publish = `dist`, master'dan otomatik deploy).

## Komutlar
- `npm run build` — Vite build + `vite-plugin-prerender` (puppeteer) ile 18 route statik HTML'e çevrilir.
- `npx vite preview --port 4173` — build çıktısını localde test et.
- Dev: `npm run dev`.

## Mimari notları
- **Prerender:** `vite.config.js` → `vite-plugin-prerender` (CJS, `createRequire`). Route listesi `src/i18n/routes.js` (`ROUTE_SLUGS`, `SUPPORTED_LANGS`, `DEFAULT_LANG`). Her dil ayrı URL: `/hakkimda`, `/en/about`, `/de/about` vb.
- **Meta:** `src/seo/pageMeta.js` (`SITE_URL`, `OG_IMAGE`, `getPageMeta`, `getHreflang`) + `src/components/Seo.jsx` (react-helmet-async). Sayfa meta'sının **tek kaynağı Helmet** olmalı — `index.html`'e statik `description`/`og:*`/`twitter:*` eklemeyin, aksi halde prerender çıktısında çift etiket oluşur.
- **404:** `public/404.html` + `public/_redirects`. Catch-all redirect **eklemeyin** (Netlify Forms POST'unu bozar); Netlify eşleşmeyen URL'e 404.html'i 404 statüsüyle sunar.
- **İçerik:** `src/context/LanguageContext.jsx` TR/EN/DE sözlükleri. Sayfa verileri (portfolyo projeleri, sertifikalar vb.) ilgili `src/pages/*.jsx` içinde; `t('portfolio.<key>.<field>')` ile çevrilir.
- **Formlar:** Netlify Forms'a `digital@batuhanates.com` adresine gider (FormSubmit). Honeypot alanı: `name="website"`.

## Konvansiyonlar / tuzaklar
- **Görseller:** Tüm görseller WebP'dir (`src/assets/images/*.webp`); orijinal PNG/JPG'ler silindi. Yeni görsel eklerken WebP üretin (Pillow: `Image.open(f).convert('RGBA').save(out,'WEBP',quality=80,method=6)`). Görsellerde `loading="lazy" decoding="async"` kullanın; sadece hero/banner gibi above-the-fold görseller eager kalsın.
- **Başlık hiyerarşisi:** Sayfa başına tek `h1`, bölüm başlıkları `h2`, kart/proje başlıkları `h3`. `h4`'e atlamayın.
- **Tasarım dili:** `text-gray-400` gövde metni, `glass-card` kart, `text-xs` yerine `text-sm` etiket/chip. Bölüm başlıklarına emoji koymayın (kart ikonları ayrı).
- **Kontrast:** `text-gray-500` küçük metinde AA'yı geçmez; kullanmayın.
- Kullanıcı isteği: framework/tasarım değişmeyecek; mevcut bileşenler ve stil sınıfları kullanılacak.

## Deploy / git
- Remote'ta geçersiz PAT gömülü olabilir. Push: `git push https://x-access-token:<PAT>@github.com/batudigital44/Openhandsite.git master`. PAT paylaşılırsa iş sonunda rotasyon uyarısı yapın.
- Deploy sonrası yeni sürümü doğrulamak için `assets/index-<hash>.js` hash'ini local `dist` ile karşılaştırın (Netlify gecikmesi ~1-2 dk).
