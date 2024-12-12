const fs = require("fs");
const path = require("path");

// Define the paths for the input and output files, now using the Jsons and Texts directories
const jsonDirectory = path.join(__dirname, "Jsons");
const textsDirectory = path.join(__dirname, "Texts");

const usersFilePath = path.join(jsonDirectory, "users.json");
const outputCountPath = path.join(textsDirectory, "user_count.txt");
const outputNamesPath = path.join(textsDirectory, "user_names.txt");

// Read the data from the JSON file
const fileContent = fs.readFileSync(usersFilePath, "utf8");
const usersList = JSON.parse(fileContent);

// Get the total number of users and their names
const totalUsers = usersList.length;
const namesArray = usersList.map((user) => user.name);

// Save the total number of users to a text file
fs.writeFileSync(outputCountPath, `User Count: ${totalUsers}`, "utf8");

// Save the user names to a text file, each name on a new line
fs.writeFileSync(outputNamesPath, namesArray.join("\n"), "utf8");

console.log("User count and names have been successfully saved in the Texts folder!");
