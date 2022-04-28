require("dotenv").config();

const express = require("express");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.send("<h1>Store API </h1><a href='/api/v1/products'>Product Route</a>")
});


app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000

const start = () => {
    try {
        app.listen(port, console.log(`Server is listening at port ${port}`))
    } catch (error) {
        console.log(error);
    }
}

start()