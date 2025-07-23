const express = require("express");
const fs      = require("fs");
const path    = require("path");
const bodyParser = require("body-parser");

const app = express();
const PORT = process.env.PORT || 3000;

// Serve everything under /public
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.json());

const BL = path.join(__dirname, "public/blacklist.json");

app.post("/blacklist", (req, res) => {
  const name = (req.body.domain || "").trim().toLowerCase();
  if (!name) return res.status(400).json({ error: "Missing domain" });

  let list = [];
  try {
    list = JSON.parse(fs.readFileSync(BL, "utf8"));
  } catch (e) {
    console.error("Could not read blacklist.json", e);
    return res.status(500).json({ error: "Server error" });
  }

  if (list.includes(name)) {
    return res.json({ status: "already blacklisted" });
  }

  list.push(name);
  fs.writeFileSync(BL, JSON.stringify(list, null, 2), "utf8");
  return res.json({ status: "ok", domain: name });
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
