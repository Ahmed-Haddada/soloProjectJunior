const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());
app.use(cors());

const userRouter = require("./routes/users.js");
const adminRouter = require("./routes/admin.js")

const db = require("./models/index.js");

app.use("/user", userRouter);
app.use("/admin", adminRouter);

app.listen(PORT, () => {
  console.log(`Server listening at http://localhost:${PORT}`);
});
