const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");

const errorPagesController = require("./controllers/errorPages");

const rootDir = require("./utils/path");
const app = express();
app.set('view engine', 'ejs')
app.set('includes', 'views/includes')
app.set('views', 'views')


app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(rootDir, "public")));

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use('/admin',adminRoutes);

app.use(shopRoutes);

app.use(errorPagesController.get404Page);

app.listen(3000, () => console.log("Server listening on port 3000"));
