# 🔥 Firebase Setup Guide
## Azad Vegetable and Fruits — Real Google Login + Live Price Updates

---

## ⏱️ Total Time: ~20 minutes
## 💰 Cost: 100% FREE forever (Google's free tier)

---

## PART 1 — Create Your Firebase Project

### Step 1 — Go to Firebase Console
Open your browser and go to:
👉 https://console.firebase.google.com

Sign in with **your Google account** (the one you want to manage the shop with).

---

### Step 2 — Create New Project
1. Click **"Add project"**
2. Enter project name: `azad-vegetable-fruits`
3. Click **Continue**
4. Google Analytics → you can **disable** it (not needed)
5. Click **Create project**
6. Wait ~30 seconds, then click **Continue**

---

### Step 3 — Add a Web App
1. On the project dashboard, click the **`</>`** (Web) icon
2. App nickname: `azad-shop`
3. ✅ Check **"Also set up Firebase Hosting"** (for free deployment later)
4. Click **Register app**
5. You will see a **firebaseConfig** object like this:

```javascript
const firebaseConfig = {
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXX",
  authDomain: "azad-vegetable-fruits.firebaseapp.com",
  projectId: "azad-vegetable-fruits",
  storageBucket: "azad-vegetable-fruits.appspot.com",
  messagingSenderId: "123456789012",
  appId: "1:123456789012:web:abcdef1234567890"
};
```

6. **COPY THIS ENTIRE OBJECT** — you need it in the next step
7. Click **Continue to console**

---

## PART 2 — Paste Config Into Your Files

Open each of these 3 files and find the section that says:
```
"PASTE_YOUR_apiKey_HERE"
```

Replace the entire `firebaseConfig = { ... }` block with your copied config.

**Files to update:**
- `auth.html` — look for `const firebaseConfig = {`
- `index.html` — same section near bottom in `<script type="module">`
- `admin.html` — same section near bottom in `<script type="module">`

All 3 must have the **exact same config**.

---

## PART 3 — Enable Google Sign-In

### Step 1 — Go to Authentication
In Firebase Console sidebar:
👉 Click **Build → Authentication**

### Step 2 — Get Started
Click **"Get started"** button

### Step 3 — Enable Google Provider
1. Click **"Sign-in method"** tab
2. Click on **Google** in the providers list
3. Toggle **Enable** to ON
4. Enter your **Project support email** (your Google email)
5. Click **Save**

✅ Google login is now enabled!

---

## PART 4 — Enable Email/Password Login

Still in Authentication → Sign-in method:
1. Click **Email/Password**
2. Toggle **Enable** to ON
3. Click **Save**

✅ Email login is now enabled!

---

## PART 5 — Set Up Firestore Database (for real-time prices)

### Step 1 — Create Database
In Firebase Console sidebar:
👉 Click **Build → Firestore Database**

Click **"Create database"**

### Step 2 — Choose Mode
Select **"Start in test mode"** (for now — fine for development)
Click **Next**

### Step 3 — Choose Location
Select **`asia-south1 (Mumbai)`** — closest to India, fastest for your customers
Click **Enable**

### Step 4 — Set Security Rules
After database is created, click **"Rules"** tab and paste:

```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {

    // Users can read/write their own profile
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }

    // Products & prices: everyone logged in can read, only admin writes
    match /settings/{doc} {
      allow read: if request.auth != null;
      allow write: if false; // Admin writes directly from admin panel
    }

    // Orders: users can read their own, admin reads all
    match /orders/{orderId} {
      allow read, write: if request.auth != null;
    }
  }
}
```

Click **Publish**

---

## PART 6 — Add Your Domain to Authorized Domains

This is required for Google login to work on your deployed website.

1. In Firebase Console → **Authentication → Settings**
2. Scroll to **"Authorized domains"**
3. You'll see `localhost` is already there (for testing)
4. After you deploy to Vercel, click **"Add domain"** and add:
   - `your-app-name.vercel.app`
   - Or your custom domain if you have one

---

## PART 7 — Test Locally

Open `auth.html` in your browser. You should see:
- ✅ Login form loads (no errors)
- ✅ "Continue with Google" button shows
- ✅ Clicking Google button opens a REAL Google popup

If Google popup opens → **Firebase is configured correctly!** 🎉

---

## PART 8 — Deploy to Vercel (Free Hosting)

### Step 1 — Install Vercel CLI (one time only)
You need Node.js installed. Then run:
```bash
npm install -g vercel
```

### Step 2 — Deploy
Navigate to your project folder in terminal:
```bash
cd path/to/your/project
vercel
```

Follow prompts:
- Set up and deploy? **Y**
- Which scope? Choose your account
- Link to existing project? **N**
- Project name? `azad-vegetable-fruits`
- Directory? `./` (current directory)
- Override settings? **N**

Your site will be live at:
```
https://azad-vegetable-fruits.vercel.app
```

### Step 3 — Add domain to Firebase
Go to Firebase → Authentication → Settings → Authorized domains
Add: `azad-vegetable-fruits.vercel.app`

---

## PART 9 — How Real-Time Price Updates Work

```
Admin opens admin.html
      ↓
Admin changes Tomato price from ₹30 to ₹25
      ↓
Admin clicks "Save All Prices"
      ↓
Prices written to Firestore database
      ↓
Every customer browser has onSnapshot() listener
      ↓
Firestore sends update to ALL connected browsers instantly
      ↓
Product cards on customer site show new price ₹25
      ↓
No page refresh needed — happens in ~1-2 seconds!
```

---

## QUICK TROUBLESHOOTING

| Problem | Solution |
|---|---|
| Google popup blocked | Allow popups for your site in browser settings |
| "auth/unauthorized-domain" error | Add your domain to Firebase Authorized Domains |
| Prices not updating live | Check Firestore rules allow read for auth users |
| Login redirects back to login | Check all 3 files have the same firebaseConfig |
| "Firebase App named default already exists" | You have duplicate initializeApp calls — check index.html |

---

## SUMMARY — What You Get

| Feature | How |
|---|---|
| Real Google Login | Firebase Auth + Google OAuth |
| Email/Password Login | Firebase Auth |
| Stay Signed In | Firebase persistence |
| Real-time prices | Firestore onSnapshot |
| Customer profiles | Firestore users collection |
| Free forever | Firebase free tier (Spark plan) |

Firebase free tier limits (more than enough for a local shop):
- Authentication: **Unlimited users**
- Firestore reads: **50,000/day**
- Firestore writes: **20,000/day**
- Hosting: **10 GB storage**

---

Made with ❤️ for Azad Vegetable and Fruits, Ahmedabad
Trusted Since 1994 · 30+ Years 🏆
