import express from "express";
import fs from 'fs'
import data from "./data.mjs";

const app = express();
app.use(express.json());
//getting all users
app.get("/users", (req, res) => {
  res.send(data.users);
});

// all functions are tested usign the thunder vscode extension

//getting user by id
app.get("/users/:id", (req, res) => {
  const userId = req.params.id
  console.log(userId);
  let EmpID = data.users.find(el => {return el.id == userId;});
  console.log(EmpID);
  if(EmpID){
      res.send(EmpID);
  }
  else{
    res.send("this ID is not available");
  }
});

//deleting users by id
app.delete("/users/:id", (req, res) => {
  const userId = req.params.id
let requiredIndex = data.users.findIndex(el => {return el.id == userId;});
    console.log(requiredIndex);
    if(requiredIndex === -1){
        res.send("this ID is not available")
    }
    else{
      data.users.splice(requiredIndex, 1);
      res.send("Successful")
    }    
  })

// inserting new users
app.put("/users/:name/:mail", (req, res) => {
  const name = req.params.name;
  const email = req.params.mail;
  let id = generateNewId(data.users);
    const user = {
        id,
        name,
        email,
    };
function generateNewId(users) {
    let id;
    if (!users.length) id = 1;
    else id = users[users.length - 1].id + 1;
    return id;
}
data.users.push(user)
res.send(data.users)  
  })

  //updating mail and name at a specific id
app.put("/users/:id/:name/:mail", (req, res) => {

  const name = req.params.name;
  const email = req.params.mail;
  const id = req.params.id;
  let EmpID = data.users.find(el => {return el.id == id;});
  console.log(EmpID);
  if(EmpID){
    EmpID.email=email;
    EmpID.name=name;
      res.send(EmpID);
  }
  else{
    res.send("this ID is not available");
  }
res.send(data.users)  
  })

app.listen(4000, () => console.log("listening to port 4000"));
