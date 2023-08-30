require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const PORT = process.env.PORT;
const app = express();
app.use(bodyParser.json());

app.get("/", async (_, res) => {
  return res.status(200).json({
    message: "app active",
  });
});

app.post("/add", async (req, res) => {
  const { name } = req.body;
  try {
    // create task
    return res.status(201).json({
      message: "task created",
    });
  } catch (error) {
    return res.status(500).json({
      message: "unable to create task",
    });
  }
});

app.post("/complete", async (req, res) => {
  const { _id } = req.body;
  try {
    // mark task complete
    return res.status(200).json({
      message: "task marked complete",
    });
  } catch (error) {
    return res.status(500).json({
      message: "unable to mark task complete",
    });
  }
});

app.listen(PORT, () => {
  console.log(`app listening on port ${PORT}`);
});
