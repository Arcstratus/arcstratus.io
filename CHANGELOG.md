## 0.3.0 (2025-05-03)

### Feat

- remove support page
- **component**: add animated-list and terminal from magicui
- add animated components from magic-ui
- **ui**: add card-hover-effect component from aceternity
- **i18n**: add `use server` for getDictionary
- add links for footer
- add two products, unitobuy and island-voice
- add privacy and terms pages
- enable GA and integrate Microsoft Clarity
- add news page
- move contact to about page
- add pages for products
- add about, contact, service pages
- create i18n implementation
- add shadcn components
- change locale path from /zh to /tw
- display default language at root path without redirect
- **page**: add careers page with AI content
- **page**: add about page with AI content
- **page**: add blog page with default layout
- **sitemap**: add news and products URLs with localization options
- **page**: add products page
- **component**: add animated timeline
- **components**: add resizable-navbar component from aceternity
- **page**: add service and contact sections
- **page**: add the default layout for sections
- **page**: add service-ai layout
- **page**: add platform layout
- add logo
- add robots.ts and sitemap.ts for SEO
- add GA4

### Fix

- **page**: refine service content
- **components**: make the BentoCard clickable
- remove press page
- **page**: refine home page content
- **page**: refine products pages, animations and content
- **home**: remove clients-section and refactor home sections
- **ui**: remove github icon from header
- fix params type error on layout
- update robots.ts and sitemap.ts
- update params type to Promise
- update nav items and fix the wrong company name
- rewrite / to show english version for SEO
- exclude robots and sidemap from middleware redirect
- remove all content and page
- update the i18n implementation
- add i18n wording
- **i18n**: remove auth section from dictionaries
- fix type on layout
- update language references from zh to tw
- fix the i18n implementation in all components
- **layout**: adjust footer grid layout for better responsiveness
- **layout**: use # to links thay was still under construction
- **component**: decrease z-index to 3d-ping link
- **component**: set target attr to 3d-ping link
- **layout**: increase padding to main
- **layout**: add locale and theme toggles to header actions
- **layout**: fix the missed type for HeaderMobile
- **layout**: update layout and cotent for footer
- **layout**: update the rich layouts for footer
- **component**: add dropdown-menu to navbar for sub-menu
- **component**: fix the type error of 3d-ping
- **page**: integrate markdown using mdx
- **page**: refactor sections for news page
- **page**: add news route
- **layout**: add link to header logo
- **layout**: refactor footer and update styles for main
- **layout**: rewrite header with resizable-navbar
- update the breaking changes for calendar using react-day-picker 9.1.4
- use `zh` instead of `tw` as i18n path
- **page**: remove about section
- **page**: add demo components for service-ai
- **page**: update content for hero
- **page**: update layout styles for home
- **i18n**: use zh instead of tw on path
- **seo**: change change-frequency to weekly
- **public**: remove bg for logo.png
- **page**: update the width of ask-button in hero section for RWD
- use dynamic metadata for i18n
- **page**: rewrite hero section
- **ui**: update header styles for RWD
- update header styles
- store user preferences locale using cookies
- add public files to exclude paths from middleware of localization

### Refactor

- group routers for company, developers, legal and resources
- **ui**: refactor header, main and footer components
- clean up global styles for body
- enhance middleware

## 0.2.0 (2025-03-24)

### Feat

- add about, hero and service pages
- add i18n
- add UIs for layout
- add shadcn/ui package

### Fix

- replace lucide-react with @tabler/icons-react
- add middleware to enable i18n
- enhnace home page with sections and new styles
- add the breadcrumb UI and update layout styles
- remove demo code
