# User Data Processing

This repository contains a solution to a task that processes user data from a JSON file and writes specific information to text files:

## Task: Process User Data from JSON
Write a program that performs the following tasks:

1. Reads the content of the `users.json` file, which contains user data.
2. Counts the number of users in the file.
3. Retrieves the names of all users.
4. Writes the number of users to a text file named `user_count.txt`.
5. Writes the names of all users to a text file named `user_names.txt`.

### Solution Overview

The program is written in JavaScript using Node.js. It reads the `users.json` file, extracts the relevant information (number of users and their names), and writes the data to the specified text files.

- The JSON file is located in the `Jsons` folder.
- The output text files are saved in the `Texts` folder.

### Files and Folders

- `users.json` (Located in `Jsons` folder): Contains the data for each user, including their name, last name, age, and ID.
- `user_count.txt` (Located in `Texts` folder): Contains the total number of users.
- `user_names.txt` (Located in `Texts` folder): Contains the names of all the users, one name per line.

> The solution is included in a folder named "userDataProcessing".

> The `Jsons` and `Texts` folders are inside the "userDataProcessing" folder.

### How to Run the Program

1. Ensure that you have Node.js installed on your machine.
2. Clone the repository to your local machine.
3. Navigate to the folder where the code is located.
4. Run the program with the following command:
   ```bash
   node index.js
