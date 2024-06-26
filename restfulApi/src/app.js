const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
//mongo db k sath connect krne k lie

require("./db/conn");
const Student = require("./models/students");
// agar request .body use krna hai to express .json use krna pdega  middleware bolte hai ise
app.use(express.json());

//create a new Student
app.post("/students", (request, response) => {
  // const user=new Student(request.body)
  console.log(request.body);
  //post man mai data request mai body mai jara h islie yha request.body likha hai
  const user = new Student(request.body);
  //user.save mongo db pe file save krne k lie
  user
    .save()
    .then(() => {
      response.status(201).send(user);
    })
    .catch((e) => {
      response.send("error found -" + e);
    });
});

app.listen(port, () => {
  console.log(`app is listening on ${port}`);
});
