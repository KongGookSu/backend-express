const express = require("express");
const app = express();

require("dotenv").config();

const bookRoutes = require("./routes/bookRoutes");

app.use("/books", bookRoutes);

app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
