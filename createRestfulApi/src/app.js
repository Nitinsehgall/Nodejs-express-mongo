const express = require("express");
const MensRanking = require("./models/mens");
const app = express();
const port = process.env.PORT || 3000;
require("../src/db/conn");
app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Hello World!");
});
app.get("/mens", async (req, res) => {
  try {
    const getMens = await MensRanking.find({}).sort({"ranking":1});
    console.log(getMens);
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.post("/mens", async (req, res) => {
  try {
    const addingMensRecords = new MensRanking(req.body);
    console.log(req.body);

    const result = await addingMensRecords.save();

    res.send(result);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.get("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findById(_id);
    console.log(getMens);
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});

app.patch("/mens/:id", async (req, res) => {
  try {
    const _id = req.params.id;
    const getMens = await MensRanking.findByIdAndUpdate(_id, req.body,{new:true});
    console.log(getMens);
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});
app.delete("/mens/:id", async (req, res) => {
  try {
    const getMens = await MensRanking.findByIdAndDelete(req.params.id);
    console.log(getMens);
    res.send(getMens);
  } catch (e) {
    res.status(400).send(e);
  }
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
