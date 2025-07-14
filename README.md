# 🔗URLKeeper

URLKeeper is a simple, Firebase-powered web app for saving and organizing URLs along with optional memos. It allows users to quickly add links, view them in a list, and delete individual or all entries. A Chrome Extension version is also available for quick access while browsing.

> ✍️ Ideal for keeping track of tutorials, articles, videos, or tools you want to revisit later.

## Demo

<https://urlkeeper.netlify.app/>

⚠️ This demo uses a public Firebase database with no authentication.
Anyone can view, add, or delete data. Please use it for demonstration only — do not store sensitive information.

## Features

- 🔖 Save a URL with an optional memo
- 📋 Display all saved links in a clean list
- ❌ Delete individual links
- 🧼 Delete all saved links (double-click protection)
- ☁️ Data stored in Firebase Realtime Database

## 🖥️ Technologies Used

| Tech                     | Purpose                          |
| ------------------------ | -------------------------------- |
| HTML/CSS                 | Page layout and styling          |
| JavaScript (ES6 modules) | Functionality & DOM manipulation |
| Firebase                 | Real-time database (storage)     |

## How to use

1. **Add a URL**

   - Enter a URL in the input box
   - Optionally enter a memo
   - Click `Save Input`

2. **View and Access**

   - Saved links and memos appear in a list
   - Click a link to open in a new tab

3. **Delete**

   - Click ❌ to remove one link
   - Double-click `DELETE ALL` to clear all

## ⚙️ Developer Notes

Firebase structure:

```Firebase
leads: {
  uniqueKey1: [url, memo],
  uniqueKey2: [url, memo],
  ...
}

```

- Deletion logic uses Firebase remove() for both single and all entries

- `window.removeLine()` is globally exposed to allow inline button use

## 🔐 Permissions & Privacy

- No tracking

- All data is saved only to your personal Firebase database

- No login required
