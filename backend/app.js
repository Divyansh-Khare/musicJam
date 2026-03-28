const express = require("express")
const path = require("path")
const User = require("../backend/models.js")
const connectDB = require('../backend/db.js')

function sleep(ms, callback) {
    setTimeout(callback, ms);
}

const app = express();
const PORT = process.env.PORT || 3000;
connectDB();
app.use(express.urlencoded({extended : false}))

// get methods
app.get("/", (req, res) => {
    // res.sendFile("C:/Users/DIVYANSH KHARE/Desktop/Codespace/MERN Projects/musicJam/frontend/home.html");
    res.sendFile(path.join(__dirname, "..", "frontend/home.html"));
})

app.get("/login", (req, res) => {
    // res.sendFile("C:/Users/DIVYANSH KHARE/Desktop/Codespace/MERN Projects/musicJam/frontend/login.html");
    res.sendFile(path.join(__dirname, "..", "frontend/login.html"));
})

app.get("/error/", (req, res) => {
    res.send("An error occured...");
})

// post methods
app.post("/login/auth/userid69206c6f766520796f75", async (req, res) => {
    try {
        const newUser = new User({
            username: req.body.username,
            password: req.body.password
        });
        await newUser.save();
        sleep(3000, () => {
            res.status(200).sendFile(path.join(__dirname, "..", "frontend/servers.html"));
        })
        
    } catch (err) {
        console.log("Error saving data...");
        console.log(err);

    }
    
})
app.listen(PORT, (req, res) => {
    console.log(`server started at port ${PORT}`);
})