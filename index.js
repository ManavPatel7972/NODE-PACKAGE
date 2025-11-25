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

function main() {
  const args = process.argv.slice(2);
  const targetName = args[0] || ".";
  const targetPath = path.resolve(process.cwd(), targetName);

  if (!fs.existsSync(targetPath)) {
    fs.mkdirSync(targetPath, { recursive: true });
    console.log("Created project:", targetPath);
  } else {
    console.log("Using folder:", targetPath);
  }

  // Create root folders
  safeMkdir(path.join(targetPath, "public"));
  safeMkdir(path.join(targetPath, "src"));

  // Create src subfolders
  const src = path.join(targetPath, "src");
  const folder = ["controllers", "middlewares", "models", "routes", "utils"];

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
    "# Environment variables\nPORT=3000\n"
  );

  // src files
  writeIfNotExists(
    path.join(src, "app.js"),
    `const express = require("express");
const app = express();
app.get('/',(req,res)=>{
    res.send("<h1>This Package Is Created By Manav Delvadiya</h1>");
})
module.exports = app;`
  );

  writeIfNotExists(
    path.join(src, "index.js"),
    `const app = require("./app");
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(\`Server running on port ${PORT}\`));`
  );

  console.log("\nComplete!");
  console.log(`Next steps:
  cd ${targetName}
  npm init -y
  npm install express`);
}

main();
