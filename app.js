const express = require("express")


const app = express()


app.use(express.urlencoded({ extended: false }));
app.use(express.static("public"));
app.set('view engine', 'ejs');

app.get("/", function (req, res) {
    res.render("index")
})


// document.querySelectorAll("h1").on("mouseover", function () {
//     document.querySelectorAll("h1").animate({ opacity: 0.5 })
// })



app.listen(process.env.PORT || 2727);