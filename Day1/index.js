// fs
//  third party packages
// npm node package manager
// import chalk from "chalk";
import {
  readUsersFromFile,
  writeUserIntoFile,
} from "./helpers/filesystems.mjs";

import sayed from "./helpers/filesystems.mjs";
sayed.printMessage();
// sync version
// callback version

// callback promise
// console.log(fs.readFileSync("data.json", "utf-8"));
// fs.readFile("./database/data.json", "utf8", (err, data) => {
//     console.log(data);
// });
let user = {
  id: 2,
  name: "askldnaslknd",
};

// add new user to json file
// first we must read json file
// second we push new user into users array
// third write new array into json file
// user has id ,name,email
//const users = JSON.parse(await readUsersFromFile("./database/data.json"));
//console.log(users)

//let [name, email] = process.argv.slice(2);
//"--name=ahmed"[("--name", "ahmed")];
//name = name.split("=")[1];
//email = email.split("=")[1];
//addUserToFile("./session1/database/data.json", name, email);

// yargs

// create crud operation for user 
// insert
async function addUserToFile(filename, name, email) {
  const users = JSON.parse(await readUsersFromFile(filename));
  let id = generateNewId(users);
  const user = {
    id,
    name,
    email,
  };
  console.log(users.length)
  users.push(user);
  writeUserIntoFile(filename, JSON.stringify(users));
  console.log("successful operation")
  console.log(users.length)
}

function generateNewId(users) {
  let id;
  if (!users.length) id = 1;
  else id = users[users.length - 1].id + 1;
  return id;
}

//delete
async function DeleteUser(filename, id) {
  const users = JSON.parse(await readUsersFromFile(filename));
  
  let requiredIndex = users.findIndex(el => {return el.id === id;});
 console.log(requiredIndex);
 if(requiredIndex === -1){
    return false;
 };
 users.splice(requiredIndex, 1);
 writeUserIntoFile(filename, JSON.stringify(users));
return console.log("success") //this doesn't work
};

// get
async function GetByIDFromFile(filename, id) {
  const users = JSON.parse(await readUsersFromFile(filename));
  
  let EmpID = users.find(el => {return el.id === id;});
 if(EmpID === -1){
    return console.log("this ID is not available");
 }  ;

 return EmpID
};

//update
async function UpdateUser(filename,id, name, email) {
  const users = JSON.parse(await readUsersFromFile(filename));
  console.log("The length in the update: "+users.length);
  for (var i=0; i<users.length; i++)
  {
    console.log("The iterator: "+i);
    if (users[i].id === id)
    {
      console.log("The successful user's id is: "+ users[i].id);
      users[i].email = email
      users[i].name = name
      writeUserIntoFile(filename, JSON.stringify(users));
      return console.log("success")
    }
  }
    return console.log("There is no such ID");
};

// insert
addUserToFile("./database/data.json", "MohamedSharif", "ms@fayoum.edu.eg")
//get
console.log(GetByIDFromFile("./database/data.json", 11))
//update
UpdateUser("./database/data.json", 1, "Sharif", "mohamed.sharif.moawad@gmail.com")
//get
console.log(GetByIDFromFile("./database/data.json", 1))
//delete
 DeleteUser("./database/data.json", 11)
