# node-app-maker

A simple and fast CLI tool to create a clean Node.js project structure with one command.  
This tool automatically generates folders like `src`, `controllers`, `routes`, and also creates basic starter files.

Perfect for beginners learning Node.js and developers who want a ready-to-use folder structure.

---

## Features

- Creates a clean Node.js project structure
- Generates folders:
  - `public`
  - `src`
    - `controllers`
    - `middlewares`
    - `models`
    - `routes`
    - `utils`
- Creates starter files:
  - `src/app.js`
  - `src/index.js`
  - `.env`
  - `.gitignore`
  - `README.md`
- Works using a single command  
- No extra configuration needed

---

## Install (Global)

You can install the CLI globally:

```bash
npm install -g node-app-maker

---

## Usage (Create Project Structure Instantly)

After installing the package globally, stay in your current folder where you want your Node.js project structure to be created.

Then run:

```bash
node-app-maker

This command will immediately generate the full folder structure and starter files in the current directory.

---

## Example

Step 1 — Move to your desired folder

```bash
cd Desktop/my-project

Step 2 — Run the CLI

```bash
node-app-maker

Step 3 — Done Your project structure is ready !

my-project/
│
├── public/
│
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   ├── app.js
│   ├── constants.js
│   └── index.js
│
├── .env
├── .gitignore
└── README.md


---


