const express = require("express");
const app = express();
const product = require("./api/product");
const path = require("path");
app.set('views', path.join(__dirname, 'views'));

app.use(express.json({ extended: false }));

app.use("/api/product", product);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
