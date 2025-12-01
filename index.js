#!/usr/bin/env node
const fs = require("fs");
const path = require("path");

function safeMkdir(dir) {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
    console.log("created:", dir);
  }
}

function writeIfNotExists(file, content) {
  if (!fs.existsSync(file)) {
    fs.writeFileSync(file, content);
    console.log("created file:", file);
  }
}

function makeApp() {
  const args = process.argv.slice(2);

  //   process.argv = [
  //   "/path/to/node",         // argv[0]
  //   "/path/to/create.js",    // argv[1]
  //   "myproject"              // argv[2] user argument
  // ]

  const targetName = args[0] || ".";
  const targetPath = path.join(process.cwd(), targetName);

  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
    console.log("Created project:", targetPath);
  } else {
    console.log("Using folder:", targetPath);
  }

  // Create root folders
  safeMkdir(path.join(targetPath, "public"));
  safeMkdir(path.join(targetPath, "public/uploads")); 
  safeMkdir(path.join(targetPath, "src"));

  // Create src subfolders
  const src = path.join(targetPath, "src");
  const folder = ["config","db","controllers", "middlewares", "models", "routes", "services", "utils"];

  folder.forEach((dir) => safeMkdir(path.join(src, dir)));

  // Root files
  writeIfNotExists(
    path.join(targetPath, "README.md"),
    "# Project\n\nAdd About Your Project\n"
  );

  writeIfNotExists(
    path.join(targetPath, ".gitignore"),
    "node_modules\n.env\n.DS_Store\n"
  );

  writeIfNotExists(
    path.join(targetPath, ".env"),
    "# Environment variables\n\nPORT=3000\nMONGODB_URL=\nCORS_ORIGIN=*\nACCESSS_TOKEN_SECRET=\nACCESS_TOKEN_EXPIRY=\nREFRESH_TOKEN_SECRET=\n\nCLOUDINARY_CLOUD_NAME=\nCLOUDINARY_API_KEY=\nCLOUDINARY_API_SECRET=\n"
  );

  // src files
  writeIfNotExists(
    path.join(src, "index.js"),
    `const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/',(req,res)=>{
    res.send("<h1>This Package Is Created By Manav Delvadiya</h1>");
});
app.listen(PORT, () => console.log(\`server running at https://localhost:${PORT}\`));
module.exports = app;`
  );

  //   writeIfNotExists(
  //     path.join(src, "index.js"),
  //     `const app = require("./app");
  // const PORT = process.env.PORT || 3000;
  // app.listen(PORT, () => console.log(\`Server running on port ${PORT}\`));`
  //   );

  console.log("\nComplete!");
  console.log(`Next steps:
  cd ${targetName}
  npm init -y
  npm install express`);
}

makeApp();
