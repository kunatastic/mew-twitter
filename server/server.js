const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    message: "🙀🙀🙀",
  });
});

function isValidated(mew) {
  return (
    mew.name &&
    mew.name.toString().trim() !== "" &&
    mew.content &&
    mew.content.toString().trim() !== ""
  );
}

app.post("/mews", (req, res) => {
  if (isValidated(req.body)) {
    const mew = {
      name: req.body.name,
      content: req.body.content,
    };
    console.log(mew);
  } else {
    res.status(422);
    res.json({
      message: "Hye make sure to provide proper Values",
    });
  }
});

const PORT = 5000;
app.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
