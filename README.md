
# 🧩 QiForge Admin Panel (v2)

## 📘 Overview
The **QiForge Admin Panel** is a glasmorphic, governance-driven web interface for managing the internal operations of **QiForge Organisation**.  
It runs independently on the subdomain **[admin.qiforge.org](https://admin.qiforge.org)** and is version-controlled under its own GitHub repository.

This dashboard currently operates on static **HTML, CSS, and JavaScript**, with modular structure for seamless backend integration (Node.js + MongoDB planned).

---

## 🚀 Features
- 🧾 **Proposal Voting System** — Weighted votes and 70% approval threshold.
- ⚖️ **Governance Logic** — Based on QiForge’s internal role hierarchy and bias system.
- 🔒 **Super Admin Override** — Hidden override control accessible only to Super Admin.
- 💎 **Glasmorphic Design** — Sleek modern UI matching QiForge’s core branding.
- 📊 **Dynamic Dashboard** — Stats cards for teams, projects, and proposals.

---

## 🗂️ Folder Structure

```
QiForge-Admin/
 ┣ index.html              → Login page
 ┣ dashboard.html          → Main dashboard
 ┣ /css/
 ┃ ┣ style.css             → Global + login design
 ┃ ┗ dashboard.css         → Dashboard layout
 ┣ /js/
 ┃ ┣ auth.js               → Login + Super Admin shortcut
 ┃ ┣ dashboard.js          → Voting logic + dummy data
 ┃ ┗ modal.js              → (Reserved for proposal creation modal)
 ┗ /assets/
   ┗ logo.png
```

---

## 🧾 Governance Logic Summary

Each admin’s **vote weight** is calculated as:

```
VoteWeight = 1.0 + (TeamsLed * 0.5) + (ProjectsLed * 0.2) + (YearsExp * 0.1)
normalizedWeight = (rawWeight / maxWeight) * 5
```

✅ *Highest Admin = 100% (weight 5)*  
✅ *Super Admin = +10% hidden bias*  
✅ *≥ 70% approval → action approved*  
✅ *Super Admin approval = instant override*

---

## ⚙️ Deployment Guide (Hostinger + GitHub)

### 1️⃣ Repository Setup
- Create repo: **qiforge-admin**
- Push files to GitHub  
  ```bash
  git add .
  git commit -m "QiForge Admin Panel v2"
  git push origin main
  ```

### 2️⃣ Hostinger Subdomain Setup
- Subdomain: **admin.qiforge.org**
- Directory: `/public_html/admin`
- Deploy by uploading files or connecting Git repo.

### 3️⃣ Test
Visit:  
👉 [https://admin.qiforge.org](https://admin.qiforge.org)

---

## 🔒 Access Credentials (Demo)
| Role | Email | Password |
|------|--------|-----------|
| Super Admin | yogesh@qiforge.org | root |
| Admin | admin@qiforge.org | admin123 |

> *Note: Credentials are temporary demo values only — replace with secure backend authentication later.*

---

## 🧭 Future Roadmap
- Backend integration (Node.js + Express + MongoDB)
- Real proposal database + vote persistence
- Admin authentication via JWT
- Activity logs and email notifications
- GitHub repository syncing for QiForge projects

---

## 🏷️ License
© 2025 QiForge Organisation.  
Learning and contribution are permitted, but **impersonation of QiForge** or **malicious use of its name or assets** is strictly prohibited.
