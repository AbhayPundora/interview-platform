import express from "express";
import "dotenv/config";

const app = express();

app.get("/health", (req, res) => {
  res.status(200).json({ msg: "api is up and running" });
});

app.listen(process.env.PORT, () => {
  console.log(`server is running on http://localhost:${process.env.PORT}`);
});
