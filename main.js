// ─────────────────────────────────────────────────────────────
// i18n — bilingual (中文 default / English), persisted in localStorage
// ─────────────────────────────────────────────────────────────
const I18N = {
  "meta.title": { zh: "AMLClaw — 开源加密货币 AML 筛查平台", en: "AMLClaw — Open-Source Crypto AML Screening Platform" },
  "meta.desc": {
    zh: "KYA 地址筛查、KYT 交易筛查、批量筛查与 7×24 持续监控——由 width.info 合规引擎驱动，服务端规则集与资金占比评分，逐条路径证据，自托管、MIT 协议、免费开源。",
    en: "KYA address screening, KYT transaction screening, batch screening and 24/7 monitoring — powered by the width.info compliance engine with server-side rulesets and a fund-attribution score. Self-hosted, MIT-licensed, free.",
  },
  "hero.title": { zh: "开源加密货币 AML 筛查平台", en: "Open-Source Crypto AML Screening" },
  "hero.tagline": { zh: "KYA 地址筛查 · KYT 交易筛查 · 批量筛查 · 7×24 持续监控", en: "KYA address screening · KYT transaction screening · batch · 24/7 monitoring" },
  "hero.desc": {
    zh: "AMLClaw 把专业链上反洗钱筛查打包成一个可自主部署的 Web 平台。规则集在 width.info 引擎服务端运行——制裁、网络犯罪、赌博、司法冻结等——支持多跳资金追溯、逐条路径证据，以及由 API 直接返回的资金占比评分。没有黑盒、不需要本地维护规则、不需要数据库。",
    en: "AMLClaw packages professional on-chain AML screening into a self-hostable web platform. Rulesets run server-side on the width.info engine — Sanctions, Cybercrime, Gambling, Public Freezing Actions and more — with multi-hop fund tracing, per-path evidence, and a fund-attribution score (资金占比评分) returned by the API itself. No black box, no local rule maintenance, no database.",
  },
  "hero.btn1": { zh: "在 GitHub 查看", en: "View on GitHub" },
  "hero.btn2": { zh: "免费获取 API Key", en: "Get a Free API Key" },
  "stat.screen": { zh: "筛查模式", en: "Screening Modes" },
  "stat.batch": { zh: "每批条目", en: "Items / Batch" },
  "stat.license": { zh: "MIT 协议", en: "MIT License" },
  "stat.setup": { zh: "自主部署", en: "Setup" },
  "problem.title": { zh: "还在一个一个地址手工筛查？", en: "Still Screening Addresses One at a Time?" },
  "problem.desc": { zh: "2026 年的加密合规，很多仍停留在黑盒评分、手工复制粘贴和\u201c到时候再说\u201d。", en: "In 2026, most crypto compliance still runs on black-box scores, manual copy-paste, and hope." },
  "p1.title": { zh: "\u201c相信我们的评分\u201d", en: "\u201cTrust Our Score\u201d" },
  "p1.text": { zh: "厂商给你一个数字，你问为什么——\u201c专有算法\u201d。审计时怎么向监管解释？又怎么证明到底是哪笔资金有问题？", en: "The vendor gives you a number. You ask why. \u201cProprietary algorithm.\u201d Try explaining that to a regulator during an audit — or proving which funds were actually risky." },
  "p2.title": { zh: "逐个地址手工筛查", en: "Manual, Address by Address" },
  "p2.text": { zh: "粘贴一个地址、等追溯结果、复制粘贴报告、再处理下一个……五十个地址就得熬一个通宵。批量筛查不该靠电子表格。", en: "Paste one address, wait for the trace, copy-paste the report, repeat for the next fifty. Batch screening shouldn't require a spreadsheet and a Friday night." },
  "p3.title": { zh: "没有持续监控", en: "No Continuous Monitoring" },
  "p3.text": { zh: "今天查完一个地址，明天它被冻结了，没人知道——因为没有任何机制会复查它，也不会复查它的对手方。", en: "You screen an address today. It gets frozen tomorrow. Nobody knows — because nothing re-checks it, and nothing re-checks its counterparties." },
  "p4.title": { zh: "合规欠债", en: "Compliance Debt" },
  "p4.text": { zh: "一次性筛查构不成审计证据链。监管要的是证据路径、历史记录和可辩护的处置结论——不是一张评分的截图。", en: "One-off screens don't build an audit trail. Regulators want evidence chains, history, and a defensible verdict — not a screenshot of a score." },
  "modules.title": { zh: "五大模块，一个合规台", en: "Five Modules. One Compliance Desk." },
  "modules.desc": { zh: "从单个地址到一批交易，全流程跑在 width.info V3 引擎上。", en: "From a single address to a portfolio of transactions — the whole pipeline runs on the width.info V3 engine." },
  "m1.title": { zh: "KYA 地址筛查", en: "KYA Address Screening" },
  "m1.text": { zh: "筛查任意以太坊 / Tron 地址，双向多跳追溯资金（0–5 跳）。服务端规则集识别制裁、网络犯罪、赌博、司法冻结等风险，输出逐条规则命中证据与可交互的资金流向图。", en: "Screen any Ethereum or Tron address with multi-hop fund tracing (0–5 hops each direction). Server-side rulesets flag Sanctions, Cybercrime, Gambling, Freezing Actions — with per-rule path evidence and an interactive fund-flow graph." },
  "m2.title": { zh: "KYT 交易筛查", en: "KYT Transaction Screening" },
  "m2.text": { zh: "筛查一笔交易的资金来源（in）、资金去向（out）或两端。Chainalysis 风格告警，DIRECT/INDIRECT 敞口类型，分方向规则集（KYT-IN / KYT-OUT）与完整路径证据。", en: "Screen a transaction's source of funds (in), destination (out), or both. Chainalysis-aligned alerts with DIRECT/INDIRECT exposure, per-direction rulesets (KYT-IN / KYT-OUT), and full path evidence." },
  "m3.title": { zh: "批量筛查", en: "Batch Screening" },
  "m3.text": { zh: "一次粘贴最多 50 个地址或交易哈希。async 模式实时进度，逐条风险与资金占比评分，一键查看完整报告，支持 CSV 导出留档。", en: "Paste up to 50 addresses or transaction hashes. Async mode with live progress, per-item risk + fund score, one-click full reports, and CSV export for your records." },
  "m4.title": { zh: "地址监控", en: "Address Monitoring" },
  "m4.text": { zh: "监控地址\u201c加入监控之后\u201d发生的每一笔转账——超过设定金额的新交易自动做 KYT 查询，全量入台账一笔不漏，高风险命中立即触发 Webhook 告警。", en: "Watch a watched address's future transfers — every new stablecoin transaction is KYT-screened on your schedule, with a full ledger and high-risk webhook alerts." },
  "m5.title": { zh: "TX 监控", en: "TX Monitoring" },
  "m5.text": { zh: "盯防交易 from/to 对手方地址本身的风险变化。周期 KYA 复筛跟踪风险走势，一旦被打上制裁 / 冻结标签或风险等级升高，第一时间告警。", en: "Watch a transaction's from/to counterparty. Periodic KYA re-screening tracks the risk trend and alerts the moment an address gets tagged Sanctions or Freeze, or its level escalates." },
  "how.title": { zh: "工作流程 · How It Works", en: "How It Works" },
  "how.desc": { zh: "从提交到报告，每一步都由 width.info V3 引擎服务端完成。", en: "From submit to report — every step runs server-side on the width.info V3 engine." },
  "how1.title": { zh: "提交筛查", en: "Submit a Screen" },
  "how1.text": { zh: "粘贴地址（KYA）或交易哈希（KYT），选择筛查方向与参数（跳数、时间序列、CEX 免疫等），async 模式提交到 width.info。", en: "Paste an address (KYA) or transaction hash (KYT), pick the direction and parameters (hops, force time sequence, CEX immunity…), and submit in async mode to width.info." },
  "how2.title": { zh: "服务端规则集", en: "Server-Side Rulesets" },
  "how2.text": { zh: "制裁、恐怖融资、网络犯罪、赌博、司法冻结等规则集在 width.info 服务端运行，双向多跳追溯资金路径（0–5 跳），返回命中规则与敞口金额。", en: "Sanctions, TF, Cybercrime, Gambling, Freezing Actions and more run server-side on width.info — multi-hop fund tracing (0–5 hops each way) returns the matched rules and exposure amounts." },
  "how3.title": { zh: "资金占比评分", en: "Fund-Attribution Score" },
  "how3.text": { zh: "引擎按「方向 × 跳数 × 严重度 × 资金占比」返回 0–100 分与处置判定（放行 / 复核 / 尽调 / 拒绝）；SELFHIT、时间序列、CEX 免疫均由服务端处理。", en: "The engine returns a 0–100 score (direction × hops × severity × fund ratio) plus a verdict (accept / review / EDD / block). SELFHIT, time sequencing and CEX immunity are all handled server-side." },
  "how4.title": { zh: "证据与报告", en: "Evidence & Report" },
  "how4.text": { zh: "逐条规则命中证据、资金路径、可交互流向图与 Chainalysis 风格告警；完整报告自动存入历史，随时一键回看。", en: "Per-rule hit evidence, fund paths, an interactive flow graph and Chainalysis-style alerts. Full reports are saved to history for one-click recall." },
  "how5.title": { zh: "批量与监控", en: "Batch & Monitoring" },
  "how5.text": { zh: "批量筛查最多 50 条，async 并发出报告、支持 CSV 导出；地址 / TX 监控按计划定时复查，风险升高或新增制裁、冻结标签即触发告警。", en: "Batch-screening up to 50 items with async progress and CSV export; address / TX monitoring re-checks on schedule and alerts on escalation or new Sanctions/Freeze tags." },
  "cmp.title": { zh: "厂商评分 vs. 证据链", en: "Vendor Scores vs. Evidence" },
  "cmp.desc": { zh: "一边给你一个数字，另一边给你一份案件档案。", en: "One side gives you a number. The other gives you a case file." },
  "cmp.colOld": { zh: "传统厂商", en: "Traditional Vendor" },
  "cmp.colNew": { zh: "AMLClaw", en: "AMLClaw" },
  "cmp.row.cost": { zh: "成本", en: "Cost" },
  "cmp.cost.old": { zh: "每年 $100K+", en: "$100K+ / year" },
  "cmp.cost.new": { zh: "免费（MIT 协议）", en: "Free (MIT License)" },
  "cmp.row.score": { zh: "评分", en: "Scoring" },
  "cmp.score.old": { zh: "黑盒\u201c专有\u201d评分", en: "Black-box \u201cproprietary\u201d score" },
  "cmp.score.new": { zh: "服务端规则集 + 资金占比评分，每分都有证据", en: "Server-side rulesets + fund-attribution score, evidence for every point" },
  "cmp.row.screen": { zh: "筛查方式", en: "Screening" },
  "cmp.screen.old": { zh: "一次一个地址", en: "One address at a time" },
  "cmp.screen.new": { zh: "单条 + 批量（每批 50，async）", en: "Single + batch (50/run, async)" },
  "cmp.row.rules": { zh: "规则", en: "Rules" },
  "cmp.rules.old": { zh: "厂商固定规则", en: "Fixed vendor rules" },
  "cmp.rules.new": { zh: "width.info 上的自定义规则集 ID，或内置默认", en: "Your own ruleset IDs on width.info, or builtins" },
  "cmp.row.monitor": { zh: "监控", en: "Monitoring" },
  "cmp.monitor.old": { zh: "没有，或额外付费", en: "None or add-on" },
  "cmp.monitor.new": { zh: "地址 + 对手方，定时任务，自动告警", en: "Address + counterparty, scheduled, alerting" },
  "cmp.row.host": { zh: "部署", en: "Hosting" },
  "cmp.host.old": { zh: "SaaS 锁定", en: "SaaS lock-in" },
  "cmp.host.new": { zh: "自托管，文件存储，无需数据库", en: "Self-hosted, file-based, no database" },
  "cmp.row.audit": { zh: "审计留痕", en: "Audit Trail" },
  "cmp.audit.old": { zh: "散落在邮件里", en: "Scattered in emails" },
  "cmp.audit.new": { zh: "历史记录 + CSV 导出 + 完整报告", en: "History + CSV export + full reports" },
  "cmp.row.transparency": { zh: "透明度", en: "Transparency" },
  "cmp.transparency.old": { zh: "闭源", en: "Closed source" },
  "cmp.transparency.new": { zh: "开源，每条规则命中都可见", en: "Open source, every rule hit visible" },
  "qs.title": { zh: "五分钟部署你的合规台", en: "Deploy Your Compliance Desk in Five Minutes" },
  "qs.desc": { zh: "克隆、安装、运行，然后在设置页粘贴免费的 width.info API Key。", en: "Clone, install, run, and paste your free width.info API key in Settings." },
  "val.title": { zh: "开箱即用，而不是九十天后", en: "Day One Ready. Not Day Ninety." },
  "val.desc": { zh: "一个 API Key，服务端全部搞定，专业筛查开箱即用。", en: "Professional screening out of the box — one API key, server-side everything." },
  "v1.num": { zh: "服务端", en: "Server-side" },
  "v1.text": { zh: "规则集与评分在 width.info 引擎运行——无需本地维护规则，始终最新", en: "Rulesets & scoring run on the width.info engine — no local rule maintenance, always current" },
  "v2.num": { zh: "2+2", en: "2+2" },
  "v2.text": { zh: "两类筛查（KYA / KYT）+ 两类监控（地址 / 对手方），外加批量", en: "Screening modes (KYA / KYT) and monitoring modes (address / counterparty), plus batch" },
  "v3.text": { zh: "每批最多 50 个地址或交易哈希——async、实时进度、CSV 导出", en: "Addresses or tx hashes per batch — async, live progress, CSV export" },
  "v4.num": { zh: "无需 DB", en: "No DB" },
  "v4.text": { zh: "文件存储，备份友好，随处部署——甚至 Docker", en: "File-based storage, backup-friendly, deploy anywhere — even Docker" },
  "eco.title": { zh: "开源 · 免费", en: "Open Source · Free" },
  "eco.desc": { zh: "整个平台开源，MIT 协议，代码属于你。", en: "The whole platform is open source, MIT-licensed — the code is yours." },
  "eco1.badge": { zh: "Web 平台", en: "Web UI" },
  "eco1.title": { zh: "🖥️ AMLClaw 平台", en: "🖥️ AMLClaw Platform" },
  "eco1.text": { zh: "KYA / KYT / 批量筛查与 7×24 监控，自托管 Next.js 应用。中英双语、深色/浅色主题、文件存储。", en: "KYA / KYT / batch screening and 24/7 monitoring in a self-hostable Next.js app. Bilingual (中文 / English), dark & light themes, file-based storage." },
  "ft.tagline": { zh: "开源 AML 筛查，由 width.info 合规引擎驱动。", en: "Open-source AML screening, powered by the width.info compliance engine." },
  "ft.license": { zh: "MIT License · AMLClaw", en: "MIT License · AMLClaw" },
};

let lang = "zh";
try { lang = localStorage.getItem("amlclaw-lang") === "en" ? "en" : "zh"; } catch { /* ignore */ }

/** Apply a language to the whole page (data-i18n texts, meta, toggle label). */
function applyLang(next) {
  lang = next === "en" ? "en" : "zh";
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    const value = I18N[key]?.[lang];
    if (value === undefined) return;
    if (el.tagName === "META") el.setAttribute("content", value);
    else el.textContent = value;
  });
  document.querySelectorAll("[data-i18n-alt]").forEach((el) => {
    const value = I18N[el.dataset.i18nAlt]?.[lang];
    if (value !== undefined) el.setAttribute("alt", value);
  });
  const toggle = document.getElementById("lang-toggle");
  if (toggle) toggle.textContent = lang === "zh" ? "EN" : "中文";
  try { localStorage.setItem("amlclaw-lang", lang); } catch { /* ignore */ }
}

document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("lang-toggle");
  if (toggle) {
    toggle.addEventListener("click", () => applyLang(lang === "zh" ? "en" : "zh"));
  }
  applyLang(lang);
});

// ─────────────────────────────────────────────────────────────
// Fade-in on scroll
// ─────────────────────────────────────────────────────────────
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.problem-card, .agent-card, .value-card, .card, .code-block, .stats-bar, .compare-table').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(20px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  observer.observe(el);
});

// Staggered animation for pipeline
document.querySelectorAll('.pipeline .agent-card').forEach((el, i) => {
  el.style.transitionDelay = `${i * 0.1}s`;
});

document.querySelectorAll('.pipeline .pipeline-arrow').forEach((el, i) => {
  el.style.opacity = '0';
  el.style.transition = 'opacity 0.4s ease';
  el.style.transitionDelay = `${i * 0.1 + 0.15}s`;
  observer.observe(el);
});
