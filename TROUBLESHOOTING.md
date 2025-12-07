# Troubleshooting Guide

## ❌ "This localhost page can't be found" Error

### Problem
When running `npm run dev`, you get a "page can't be found" error.

### Solution
Vite requires an `index.html` file in the **root directory** to serve as the entry point.

**✅ Fixed:** A root `index.html` file has been created that serves as the login page.

### How to Access Pages

**Main Entry Point:**
- http://localhost:8000/ (root index.html - login page)

**Other Pages:**
- Dashboard: http://localhost:8000/dashboard/dashboard.html
- Assets: http://localhost:8000/assets/asset.html
- Maintenance: http://localhost:8000/maintenance/maintenance.html
- etc.

### If Still Not Working

1. **Make sure you're in the project root:**
   ```bash
   cd C:\Users\USER\Downloads\it-inventory-management-system
   ```

2. **Check if index.html exists:**
   ```bash
   dir index.html
   ```

3. **Restart the dev server:**
   ```bash
   # Stop the server (Ctrl+C)
   npm run dev
   ```

4. **Clear browser cache** and try again

5. **Check the console** for any JavaScript errors

## Other Common Issues

### Port Already in Use
```bash
# Change port in vite.config.js (line 6)
port: 8000,  # Change to another port like 3001
```

### Module Not Found Errors
```bash
npm install
```

### Firebase Errors
- Check `authentication/firebase.js` has correct config
- Make sure Firebase Authentication is enabled in Firebase Console
- See [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

### Build Errors
```bash
# Delete node_modules and reinstall
rm -rf node_modules
npm install
```

