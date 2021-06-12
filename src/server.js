import express from "express";
import db from "./db.js";
const app = express();

// : = url parameter
app.get("/users/:username", async (req, res) => {
  const { username } = req.params;
  try {
    const user = await db.getUserByUsername(username);
    if (user) {
      res.json(user);
    } else {
      res.status(404).send();
    }
  } catch (e) {
    res.status(500).json(e);
  }
});
export { app };
