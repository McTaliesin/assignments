const = express = require("");
const app = express();
const bodyParser = require("body-parser")
const morgan = require("morgan");
const mongoose = process.env.PORT || 7000;

app.use(bodyParser.json());
app.use(morgan("dev"));

app.use("/characters", require("/routes/character"))

mongoose.connect("mongodb://localhost/mario-kart", (err) => {
    if (err) throw err;
    console.log("Connected to the database");
});

const characterSchema = new mongoose.Schema({
    name: {
    type: String,
    required: true
    }''
    coolness: {
    type: Number,
    min: [1, "mustatleastbe1"],
    max: 10
    isGoodGuy: Boolean,
    favoriteWeapons: [{
      type: String,
      enum: ["greenshel", "redshel"]
    }],
    address: {
        street: String,
        city: String,
        state: {
            type: String,
            minlength: 2,
            maxlength: 2,
            enum: ["AL", "AK", "AR"]
        },
        zip: String


    }
});

const Character = mongoose.model("Character", characterSchema);


    }
})

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
})
