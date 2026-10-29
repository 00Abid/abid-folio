# Abid Khan — Cloud & DevOps Infrastructure Portfolio

![Status](https://img.shields.io/badge/Status-Production%20Ready-success)
![Design](https://img.shields.io/badge/Design-Swiss%20International%20Style-red)
![Stack](https://img.shields.io/badge/Stack-Pure%20HTML5%20%2F%20CSS3-00e5ff)
![Telemetry](https://img.shields.io/badge/Uptime%20Target-99.995%25-green)
![License](https://img.shields.io/badge/License-MIT-blue)

A single-page, high-performance portfolio crafted for **Cloud & DevOps Engineering**, built with **Pure HTML5 and CSS3** following the **Swiss Design System (International Typographic Style)**.

Zero runtime framework dependencies, instant load times, and 100/100 Lighthouse performance across all metrics.

---

## 🏗️ Architecture & Design System

### 1. Swiss International Typographic Style
* **Mathematical Grid Layout**: Asymmetric columns, strict typographical baseline rhythm, and crisp structural borders.
* **Palette**: Dark Obsidian (`#0a0e14`), Swiss Signal Red (`#ff3333`), Cloud Cyan (`#00e5ff`), and SRE OK Green (`#00ff88`).
* **Typography**: Space Grotesk (Neo-Grotesque Swiss display) paired with JetBrains Mono for system feeds and telemetry.

### 2. DevOps & Cloud Platform Focus
* **Interactive Terminal Simulator**: Live cluster feedback simulating `kubectl`, `terraform plan`, and `argocd` reconciliation.
* **Telemetry System Strip**: Node region (`ap-south-1`), SLA target (99.995%), declared IaC specs, and MTTR telemetry.
* **Infrastructure Modules (CNCF / CIS Standards)**:
  * Kubernetes & Orchestration (EKS/GKE, Cilium, Karpenter)
  * Infrastructure as Code (Terraform, OpenTofu, Terragrunt)
  * GitOps & Continuous Delivery (ArgoCD, GitHub Actions)
  * Observability & SRE (Prometheus, Grafana, Loki, OpenTelemetry)
  * Multi-Cloud Network Architecture (AWS, GCP, Cloudflare)
  * DevSecOps & Zero-Trust (HashiCorp Vault, Trivy, Kyverno)
* **GitOps 4-Phase Lifecycle Protocol**: Visual declarative pipeline from linting to progressive canary deployments.
* **Direct Dispatch Terminal**: Client-side contact terminal routing to `khanabid.dev@gmail.com`.

---

## 📂 Project Structure

```bash
abid-folio/
├── index.html         # Pure, standalone single-page portfolio (HTML + CSS + JS)
├── public/            # Static assets & web verification files
│   ├── .well-known/   # security.txt disclosure
│   ├── llms.txt       # AI/LLM contextual index
│   ├── humans.txt     # Team & project credits
│   └── *.webp         # Project visuals and profile assets
├── README.md          # Project documentation
└── .gitignore         # Version control ignore rules
```

---

## ⚡ Quick Start

Because this site is built with **Pure HTML5**, there is no compilation step, no Node.js runtime requirement, and no package manager needed.

### Local Preview

1. **Clone the repository**:
   ```bash
   git clone https://github.com/00Abid/abid-folio.git
   cd abid-folio
   ```

2. **Open directly in your browser**:
   * Simply double-click `index.html` or open it with your browser of choice:
   ```bash
   # On macOS
   open index.html

   # On Linux
   xdg-open index.html

   # On Windows
   start index.html
   ```

3. **Or run with any local lightweight server**:
   ```bash
   # Python 3
   python -m http.server 3000

   # Or npx serve
   npx serve .
   ```

---

## 🚀 Deployment

The site is production-ready for instant static hosting on any CDN or edge platform:

* **Vercel / Netlify / Cloudflare Pages**: Deploy directly from Git with no build command (`Build Command: None`, `Output Directory: .`).
* **AWS S3 + CloudFront / GitHub Pages**: Upload `index.html` and the `public/` folder directly to your bucket or branch.

---

## 🛡️ Security & Standards

* **No Trackers & Zero Analytics bloat**: Clean client-side code with zero third-party tracking scripts.
* **Security Standards**: RFC 9116 compliant security disclosure available at `public/.well-known/security.txt`.

---

## 📄 License

MIT License © 2026 [Abid Khan](https://github.com/00Abid).
