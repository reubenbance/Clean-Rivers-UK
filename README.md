# 🌊 UK River Cleanup Logger

A simple web form for logging river cleanup efforts across the UK.  
Hosted on GitHub Pages, data written to Google Sheets via Google Apps Script.

---

## Files

| File | Purpose |
|------|---------|
| `index.html` | The public-facing form |
| `Code.gs` | Google Apps Script backend (not hosted on GitHub Pages — deployed separately) |

---

## One-Time Setup

### 1. Create a Google Sheet

1. Go to [sheets.google.com](https://sheets.google.com) and create a new spreadsheet.
2. Name it something like **River Cleanup Log**.
3. Leave it blank — the script will create headers automatically.

### 2. Deploy the Apps Script

1. In your Google Sheet, click **Extensions → Apps Script**.
2. Delete any existing code in `Code.gs`.
3. Paste the entire contents of `Code.gs` from this repo.
4. Click **Save** (💾).
5. Click **Deploy → New deployment**.
6. Set type to **Web app**.
7. Set **Execute as** → *Me*.
8. Set **Who has access** → *Anyone*.
9. Click **Deploy** and authorise the permissions when prompted.
10. Copy the **Web app URL** — it looks like:  
    `https://script.google.com/macros/s/AKfycb.../exec`

### 3. Add the URL to index.html

Open `index.html` and find this line near the bottom:

```js
const SCRIPT_URL = 'YOUR_APPS_SCRIPT_URL_HERE';
```

Replace `YOUR_APPS_SCRIPT_URL_HERE` with the URL you copied. Save the file.

### 4. Push to GitHub Pages

1. Push all files to a GitHub repository.
2. Go to **Settings → Pages**.
3. Set source to **main branch / root**.
4. GitHub will give you a URL like `https://yourusername.github.io/river-cleanup-log/`.

That's it — the form is live!

---

## How it works

- The form collects: river name, date, What3Words location, organiser name/email, volunteer count, waste weight, and free-text details.
- On submit, the data is POSTed as JSON to the Apps Script Web App.
- The script appends a new row to the **Cleanups** sheet with a timestamp.
- You can share the Google Sheet with teammates or download it as CSV for analysis.

---

## Notes

- **Privacy**: email addresses are optional. Consider who has access to the Google Sheet.
- **Re-deployments**: If you ever edit `Code.gs`, you must create a **New deployment** (not update an existing one) to get a fresh URL, then update `index.html` again.
- **No server costs**: Everything runs on Google's free tier.

---

## Licence

MIT — free to use, adapt, and share.
