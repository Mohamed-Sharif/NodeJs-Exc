const express = require("express");
const studentModel = require("../models/student");
const app = express();

//getting all data from the the database
app.get("/students", async (request, response) => {
  const students = await studentModel.find({});

  try {
    response.send(students);
  } catch (error) {
    response.status(500).send(error);
  }
});

//creating a new object and saving it to the db
app.post("/student", async (request, response) => {
    const student = new studentModel(request.body);
  
    try {
      await student.save();
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
  });

// updating a certain element in the db based on the object id
app.patch("/student/:id", async (request, response) => {
    try {
      await studentModel.findByIdAndUpdate(request.params.id, request.body);
      await studentModel.save();
      response.send(student);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//getting a certain element based on the name
app.get("/student/:id", async (request, response) => {
    try {
      const data = await studentModel.findOne({StudentId:request.params.id})
      if (!data) response.status(404).send("Not found");
      response.send(data);
    } catch (error) {
      response.status(500).send(error);
    }
  });

//deleting a certain element based on the studentID
// ...

app.delete("/student/:id", async (request, response) => {
  try {
    const data = await studentModel.findByIdAndDelete(request.params.id);

    if (!data) response.status(404).send("Not found");
    response.status(200).send();
  } catch (error) {
    response.status(500).send(error);
  }
});

// ...
module.exports = app;