const express = require("express");
const app = express();
const mongoose = require("mongoose");
const helmet = require("helmet");
const morgan = require("morgan");
const dotenv = require("dotenv");
const multer = require("multer");
const path = require("path");
const router = require("./routes/index");
const cors = require("cors");

dotenv.config();

//Database connection
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Database connected!"))
  .catch((err) => console.log(err));

//Creating path and route for images and files storage
app.use("/images", express.static(path.join(__dirname, "public/images")));

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    if (
      file.mimetype === "application/pdf" ||
      file.mimetype === "application/txt"
    ) {
      cb(null, "public/files");
    }
    if (
      file.mimetype === "image/jpeg" ||
      file.mimetype === "image/jpg" ||
      file.mimetype === "image/png" ||
      file.mimetype === "image/jfif"
    ) {
      cb(null, "public/images");
    }
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage });
app.post("/update", upload.array("file", 10), (req, res) => {
  res.status(200).json("file has been uploaded");
});

//middleswares
app.use(express.json());
app.use(cors());
app.use(helmet());
app.use(morgan("common"));

app.use(router);

app.listen(4000 || process.env.PORT, () => {
  console.log(`Server is up and running`);
});
