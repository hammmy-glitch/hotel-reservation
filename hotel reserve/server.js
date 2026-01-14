const express = require("express");
const fs = require("fs");

const app = express();
app.use(express.json());
app.use(express.static("public"));

app.get("/bookings", (req, res) => {
    const data = JSON.parse(fs.readFileSync("bookings.json"));
    res.json(data);
});

app.post("/book", (req, res) => {
    const data = JSON.parse(fs.readFileSync("bookings.json"));
    data.push(req.body);
    fs.writeFileSync("bookings.json", JSON.stringify(data, null, 2));
    res.sendStatus(200);
});

app.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});
