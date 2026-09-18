# Konversi CSS → SCSS (7-1 Pattern) — Tugas Rutin 4

Konversi `style.css` (Tugas Pertemuan 2 - Dashboard/Portofolio) ke SCSS modular
dengan struktur **7-1 pattern**.

## Struktur folder

```
scss-portfolio/
├── index.html
├── package.json
├── vite.config.js
└── scss/
    ├── abstracts/
    │   ├── _variables.scss   # semua warna, spacing, font, breakpoint
    │   ├── _mixins.scss      # 5 mixin reusable
    │   └── _index.scss       # @forward variables + mixins
    ├── base/
    │   ├── _reset.scss       # reset + @each loop (CSS custom properties)
    │   ├── _typography.scss  # body, h2, h3, p
    │   └── _index.scss
    ├── layout/
    │   ├── _header.scss
    │   ├── _nav.scss
    │   ├── _main.scss
    │   ├── _footer.scss
    │   └── _index.scss
    ├── components/
    │   ├── _cards.scss       # section & aside
    │   ├── _about.scss       # #about, figure, figcaption
    │   ├── _skills.scss      # #skills (pakai mixin pill-badge)
    │   ├── _education.scss   # #education
    │   ├── _hobi.scss        # #hobi
    │   ├── _forms.scss       # form, input, textarea, label
    │   ├── _buttons.scss     # button
    │   └── _index.scss
    ├── pages/_index.scss     # kosong (disiapkan sesuai pattern)
    ├── vendors/_index.scss   # kosong (disiapkan sesuai pattern)
    ├── themes/_index.scss    # kosong (disiapkan sesuai pattern)
    └── main.scss             # entry point, @use semua layer
```

## Checklist requirement

| # | Requirement | Status | Keterangan |
|---|---|---|---|
| 1 | Konversi CSS existing ke SCSS | ✅ | Semua rule dari `style.css` sudah dipindah |
| 2 | Variables untuk colors & spacing | ✅ | `abstracts/_variables.scss` |
| 3 | Nesting (max 3 level) | ✅ | Cth: `nav { a { &:hover {} } }` |
| 4 | Minimal 3 mixin reusable | ✅ | 5 mixin di `abstracts/_mixins.scss`: `transition`, `hover-shadow`, `respond-to`, `pill-badge`, `flex-center` |
| 5 | Struktur 7-1 pattern (partials) | ✅ | Folder `abstracts, base, layout, components, pages, vendors, themes` |
| 6 | Minimal 1 `@each` atau `@for` | ✅ | `@each $name, $value in $colors` di `base/_reset.scss` |
| 7 | Gunakan `@use` (bukan `@import`) | ✅ | Semua partial pakai `@use`/`@forward` |
| 8 | Compile dengan Vite / Dart SASS | ✅ | Lihat di bawah |

## Cara compile

### Opsi A — Dart Sass langsung
```bash
npm install -g sass
sass scss/main.scss dist/style.css --no-source-map
```

### Opsi B — Vite (dev server dengan hot reload)
```bash
npm install
npm run dev      # jalankan dev server
npm run build    # build production
```

Hasil compile SCSS sudah divalidasi menghasilkan CSS yang identik secara visual
dengan `style.css` original.
