# node-app-maker

A simple and fast CLI tool to generate a clean Node.js project structure automatically.

This tool helps you instantly scaffold a complete Node.js project folder with:

- `public/`
- `src/` -> `db,controllers`, `models`, `routes`, `middlewares`, `services`
- Basic `index.js`
- `.env`, `.gitignore`, `README.md`
- Automatic folder creation using `process.cwd()`

---

## Installation

You can use **any one** of the following methods.

---

## ** 1 Global Installation (Recommended)**

Install globally so the command works anywhere:

```bash
npm install -g node-app-maker
```

Now you can run:

```bash
node-app-maker
```

---

## ** 2 Local Installation (Inside a project)**

```bash
npm install node-app-maker
```

Use via NPX:

```bash
npx node-app-maker
```

---

## ** 3 No Installation (One-time run using NPX)**

This downloads and executes directly from npm:

```bash
npx node-app-maker
```

---

#  Usage

Go to the folder where you want to create the project:

```bash
cd D:\Projects\my-app
node-app-maker
```

or (if installed locally)

```bash
npx node-app-maker
```

---

## Folder Structure Created

```
project/
│-- public/
│
└─── src/
     │-- index.js
     |-- db/
     │-- controllers/
     │-- models/
     │-- routes/
     │-- middlewares/
     │-- services/
│
│-- .env
│-- .gitignore
│-- README.md
```

---

# Command Options

### **Create project in current folder**

```bash
node-app-maker
```

### **Create project inside a new folder**

```bash
node-app-maker myproject
```

This will create:

```
myproject/public
myproject/src
...
```

---

# ! Windows Users: PATH Fix

If you installed globally but see this error:

```
'node-app-maker' is not recognized as an internal or external command
```

Fix:

### 1. Check prefix path:

```bash
npm config get prefix
```

### 2. Add this path to **Environment Variables -> PATH**:

```
C:\Users\YOUR_USERNAME\AppData\Roaming\npm
```

Restart VS Code / CMD.

---

# PowerShell Error Fix (Windows Users)

If you see this error while running the command:

```
npx : File C:\Program Files\nodejs\npx.ps1 cannot be loaded because running scripts is disabled on this system.
```

This happens because **PowerShell blocks script execution by default**.  
To fix it, follow these steps:

---

## Step 1: Open PowerShell as Administrator

1. Press **Windows Key**
2. Search for **PowerShell**
3. Right-click **Windows PowerShell**
4. Click **Run as administrator**

---

## Step 2: Enable script execution for current user

Run this command:

```
Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
```

When asked for confirmation, type:

```
Y
```

and press **Enter**.

---

## Step 3: Run your command again

Now you can safely run:

```
npx node-app-maker
```

or (if installed globally):

```
node-app-maker
```

---

## Alternative (Temporary Fix - No Admin Needed)

If you don't want to change your execution policy permanently, run:

```
Set-ExecutionPolicy -Scope Process -ExecutionPolicy Bypass
```

This works only for the current PowerShell window.

---

# Example Commands

```bash
mkdir myproject
cd myproject
node-app-maker
```

```bash
node-app-maker myapi
```

```bash
npx node-app-maker
```

---



### Command not recognized

```bash
npm install -g node-app-maker
```

or

```bash
npx node-app-maker
```

---

### Folders created inside node_modules

Cause: running from `node_modules/node-app-maker`.

Fix:

```bash
cd D:\Projects\myapp
node-app-maker
```

---