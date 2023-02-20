const express = require("express");
const app = express();
const cors = require("cors");
const multer = require('multer')
// const upload = multer({dest:'uploads/'});

const { login } = require("./controllers/userControllers");
const { getUserProfile } = require("./controllers/userProfileConttroller");
const { getUserattendance, insertUserattendance, uploadSelfie } = require("./controllers/userAttendanceControllers");

app.use("./public", express.static("public"));
app.use(cors({ origin: `*`}));
// app.use(cors({ origin: `http://localhost:3000` }));

// app.post('/upload',upload.single('testUpload'),uploadSelfie)

// app.post("/login", login);
app.use('/login',login);

app.use("/user_profile", getUserProfile);
app.use('/user_attendance',getUserattendance);
app.use('/user_attendance',insertUserattendance)

app.listen(4000)



