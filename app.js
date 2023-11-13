const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

const errorController = require("./controllers/error");
const User = require("./models/user");


const MongoConnect = require("./util/database").MongoConnect;

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));

app.use((req, res, next) => {

  User.findById("654afd0bbce6f5366039af73")
    .then((user) => {
      req.user = new User(user.name, user.email, user.cart, user._id);
      next(); 
    })
    .catch((err) => console.log("user rerr", err));
});

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);



MongoConnect(()=>{
  app.listen(3000);
})