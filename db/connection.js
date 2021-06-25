const mongoose = require("mongoose");

mongoose
    .connect(
        "mongodb+srv://Hamzoo:123@cluster0.6trjl.mongodb.net/psl?retryWrites=true&w=majority", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: true,
        }
    )
    .then(() => {
        console.log("Connected To MongoDB");
    })
    .catch((error) => {
        console.log("Error while connecting to Database");
        console.log(error.message);
    });