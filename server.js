import express from "express";
import mongoose from "mongoose";
import { shortUrl, getOriginalUrl } from "./controller/user.js";
import path from "path";

const app = express();

app.use(express.static(path.join(path.resolve(),'public')))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "views"));

mongoose
  .connect(process.env.MONGO_URI, {
    dbName: "Rambabu",
  })
  .then(() => console.log("MongoDB is Conneted..!"))
  .catch((err) => console.log(err));

//  Rendering Ejs file
app.get("/", (req, res) => {
  res.render("index.ejs", { shortUrl: null });
});

// shorting url logic

app.post("/short-Url", shortUrl);

// Dynamic route and redireact original code

app.get("/:shortCode", getOriginalUrl);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("Server Running on PORT:", PORT);
});

