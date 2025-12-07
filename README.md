# IT Inventory Management System

A web-based system designed to streamline IT asset tracking using RFID and QR code technology.

## 📁 Project Structure

This project uses a **feature-based folder structure** for better organization:

```
├── authentication/     # Login & Registration
├── dashboard/         # Main Dashboard
├── assets/            # Asset Management (list + details)
├── maintenance/       # Maintenance Management
├── inspection/        # Inspection Management
├── qrcode/            # QR Code Scanner/Generator
├── shared/            # Shared components (sidebar, auth, etc.)
└── dist/              # Built files (output)
```

See [FOLDER_STRUCTURE.md](./FOLDER_STRUCTURE.md) for complete structure details.

## 🚀 Quick Start

### Firebase Authentication Setup

**NEW PROJECT?** Follow the complete setup guide: [FIREBASE_SETUP.md](./FIREBASE_SETUP.md)

**Quick Checklist:**
1. ✅ Enable Authentication in Firebase Console
2. ✅ Enable Email/Password sign-in method
3. ✅ Deploy Firestore security rules
4. ✅ Test registration and login

## 🚀 How to Run the Website

### Method 1: Development Mode (Recommended for Development)

**Best for:** Making changes, testing new features, development

1. **Install dependencies** (first time only):
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Access the website**:
   - The server will automatically open at: **http://localhost:8000**
   - Login page: **http://localhost:8000/** (index.html)
   - You will always land on the login page first, even if already logged in
   - Hot reload enabled - changes reflect immediately!

**Features:**
- ✅ Hot Module Replacement (HMR) - instant updates
- ✅ Source maps for debugging
- ✅ Uses source files from feature folders
- ✅ Automatically opens browser

### Method 2: Production Build (For Testing Built Files)

**Best for:** Testing the final built version before deployment

1. **Build the project**:
   ```bash
   npm run build
   ```
   This creates optimized files in the `dist/` folder.

2. **Preview the built files**:
   ```bash
   npm run preview
   ```
   Opens at: **http://localhost:4173**

### Method 3: Serve Built Files Directly

**Best for:** Quick testing without Vite

**Option A: Using Python** (Windows):
```bash
cd dist
python -m http.server 8000
```
Then open: **http://localhost:8000/index.html**

**Option B: Using PowerShell script**:
```bash
.\run-local.ps1
```
Opens at: **http://localhost:8000/index.html**

**Option C: Using Node.js**:
```bash
cd dist
npx serve
```

### Method 4: Deploy to Firebase Hosting

**Best for:** Production deployment

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Update firebase.json** (if needed):
   ```json
   "hosting": {
     "public": "dist",
     ...
   }
   ```

3. **Deploy**:
   ```bash
   npm run deploy
   ```
   Or deploy everything:
   ```bash
   npm run deploy:all
   ```

4. **Access your live site**:
   - **https://it-inventory-management-5bf72.web.app**
   - **https://it-inventory-management-5bf72.firebaseapp.com**

## Application Pages

- **Login/Signup**: `/index.html` - Authentication page
- **Dashboard**: `/dashboard.html` - Main dashboard
- **Assets**: `/asset.html` - Asset management
- **Asset Details**: `/assetdetails.html` - Individual asset details
- **QR Code**: `/qrcode.html` - QR code generator/scanner
- **Maintenance**: `/maintenance.html` - Maintenance tracking
- **Inspection Assets**: `/inspectionassets.html` - Asset inspection
- **Inspection Task**: `/inspectiontask.html` - Inspection tasks
- **Inspection Asset Details**: `/inspectionassetdetails.html` - Inspection details