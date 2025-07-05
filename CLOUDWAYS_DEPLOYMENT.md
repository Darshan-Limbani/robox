Here’s an improved and more professional version of your **Cloudways Deployment Guide** in Markdown. This version
enhances clarity, structure, formatting, and consistency:

---

# 🚀 Cloudways Deployment Guide

This guide will walk you through deploying updates to your Cloudways application (`quiz_50_php`) using Git and SSH.

---

## 1. Deploy via Cloudways Git Interface

1. **Log in** to your [Cloudways Platform](https://platform.cloudways.com/).
2. Navigate to your **Application**:
   `Applications` → `quiz_50_php`
3. In the **left sidebar**, go to **Deployment via Git**.
4. Select the desired **Git branch** (e.g., `main`).
5. Click **Pull** to fetch and deploy the latest code from the selected branch.

---

## 2. Connect to Cloudways via SSH

Use the SSH credentials provided in your Cloudways account to connect to your server.

### Example SSH Command

```bash
ssh master_rvcxmkuyxk@206.189.42.101
```

> Replace the username and IP address with your actual server details. Enter your SSH password when prompted.

---

## 3. Navigate to Your Application Directory

```bash
cd applications/zpwzjjjunh/public_html/
```

---

## 4. Install Project Dependencies

```bash
npm install --force
```

> The `--force` flag ensures that all dependencies are installed, even if conflicts are detected.

---

## 5. Build the Project

```bash
npm run build
```

This will generate the production-ready files in the `dist/` directory.

---

## 6. Deploy Build to Public Directory

Copy the contents of the `dist` folder to the root of the `public_html` directory:

```bash
cp -r dist/* .
```

## 7. Restart the Server

After deployment, restart the server to ensure all changes take effect:

1. Open the **Cloudways Dashboard**.
2. Go to the **Servers** tab.
3. Click the **three dots (⋮)** next to your server name.
4. Select **Restart**.


