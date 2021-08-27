const express = require("express");
const app = express();
const port = 4000;

const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/insstic_bears", {
  useNewUrlParser: true,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, 'connection error'));
db.once("open", function(){
  console.log(`[MongoDB] is connected !!!!`);
})

const bearsRoute = require("./routes/bearsRoute");

app.use(express.urlencoded({ extended: true}));
app.use(express.json())
app.set("views", "./views");
app.set("view engine", "pug");

app.get("/", (req, res) => {
  res.send("Coucou sur notre API");
});

app.use("/api/bears", bearsRoute);

app.listen(port, () => console.log(`server Opérationel captain 🐳`));
