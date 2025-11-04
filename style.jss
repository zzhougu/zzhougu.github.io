:root{
  --bg:#ffffff;
  --fg:#0f172a; /* slate-900 */
  --muted:#475569; /* slate-600 */
  --soft:#e2e8f0; /* slate-200 */
  --brand:#0ea5e9; /* sky-500 */
  --brand-ink:#0369a1; /* sky-700 */
  --container: 980px;
}
*{box-sizing:border-box}
html,body{margin:0;padding:0}
body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,Ubuntu,Cantarell,Noto Sans,sans-serif; line-height:1.6; color:var(--fg); background:var(--bg)}

.container{max-width:var(--container); margin:0 auto; padding:0 16px}
.skip-link{position:absolute;left:-9999px;top:auto;width:1px;height:1px;overflow:hidden}
.skip-link:focus{left:16px;top:16px;width:auto;height:auto;background:#fff;padding:8px 12px;border:2px solid var(--brand)}

/* Header */
.site-header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.9);backdrop-filter:saturate(180%) blur(8px); border-bottom:1px solid var(--soft)}
.header-inner{display:flex;align-items:center;justify-content:space-between;min-height:64px}
.brand{font-weight:700;text-decoration:none;color:var(--fg);border:2px solid var(--fg);padding:4px 8px;border-radius:8px}
.nav-toggle{display:none}
.nav-list{display:flex;gap:20px;list-style:none;margin:0;padding:0}
.nav-list a{color:var(--muted);text-decoration:none;font-weight:500}
.nav-list a:hover{color:var(--fg)}

/* Hero */
.hero{padding:48px 0}
.hero-inner{display:grid;grid-template-columns:120px 1fr;gap:24px;align-items:center}
.avatar{width:120px;height:120px;border-radius:50%;object-fit:cover;border:4px solid var(--soft)}
.title{font-size:40px;line-height:1.15;margin:0}
.subtitle{margin:6px 0 10px;color:var(--muted)}
.lede{max-width:60ch}
.cta-row{display:flex;gap:12px;margin-top:12px}
.btn{display:inline-block;border:1px solid var(--soft);padding:10px 14px;border-radius:10px;text-decoration:none;color:var(--fg);font-weight:600}
.btn.primary{background:var(--brand);color:white;border-color:var(--brand)}
.btn.primary:hover{background:var(--brand-ink)}
.btn:hover{border-color:var(--brand)}

/* Sections */
.section{padding:36px 0}
.section.alt{background:#f8fafc}
.section h2{font-size:22px;margin:0 0 12px}
.plain{margin:0;padding-left:18px}

.card-list{list-style:none;margin:0;padding:0;display:grid;gap:14px}
.card{border:1px solid var(--soft);border-radius:14px;padding:14px;background:white}
.card-title{margin:0 0 6px;font-size:18px}
.card-meta{margin:0 0 8px;color:var(--muted)}
.card-actions{display:flex;gap:8px}
.chip{display:inline-block;font-size:14px;border:1px solid var(--soft);padding:6px 10px;border-radius:999px;text-decoration:none;color:var(--fg)}
.chip:hover{border-color:var(--brand);color:var(--brand-ink)}

.pub{border-left:3px solid var(--brand); padding-left:12px}
.pub-title{margin:0 0 4px}
.pub-authors,.pub-venue{margin:0;color:var(--muted)}

/* Contact */
.contact{list-style:none;margin:0;padding:0}
.contact li+li{margin-top:4px}

/* Footer */
.site-footer{border-top:1px solid var(--soft); padding:20px 0; color:var(--muted)}
.footer-inner{display:flex;justify-content:space-between;gap:12px}

/* Mobile */
@media (max-width: 720px){
  .hero-inner{grid-template-columns:1fr;gap:16px}
  .avatar{justify-self:center}
  .nav-toggle{display:inline-flex;align-items:center;gap:8px;border:1px solid var(--soft);background:white;padding:6px 10px;border-radius:10px}
  .nav-list{display:none;flex-direction:column;padding:12px;background:white;position:absolute;right:16px;top:60px;border:1px solid var(--soft);border-radius:12px}
  .nav-list.open{display:flex}
}