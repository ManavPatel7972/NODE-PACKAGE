# node-app-maker

A simple and fast CLI tool to generate a clean Node.js project structure automatically.

This tool helps you instantly scaffold a complete Node.js project folder with:

- `public/`
- `src/` -> `controllers`, `models`, `routes`, `middlewares`, `utils`
- Basic `app.js`
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
     │-- app.js
     │-- controllers/
     │-- models/
     │-- routes/
     │-- middlewares/
     │-- utils/
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

### 2. Add this path to **Environment Variables → PATH**:

```
C:\Users\YOUR_USERNAME\AppData\Roaming\npm
```

Restart VS Code / CMD.

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


# Troubleshooting

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