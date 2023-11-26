import mysql from "mysql";
import { NextApiRequest, NextApiResponse } from "next";

export async function GET(request) {
  const connection = mysql.createConnection({
    host: "localhost:80",
    user: "root",
    password: "",
    database: "waitlist",
  });
  //   // const { email } = req.body;

  connection.connect();
  //   // Create a 'subscriptions' table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    )
    `;
  const insertQuery =
    "INSERT INTO subscriptions (email,fullname) VALUES ('example@yahoomail.com','Example User')";

  connection.query(createTableQuery, (error, result) => {
    if (error) {
      console.log("error hav occured again");
      return;
    } else {
      return new Response("Method Not Allowed");
    }
    // return connection.query(insertQuery, (err, res) => {
    //   if (err) {
    //     return new Response("An Error Occured Error, Next.js!" + err, {
    //       status: 400,
    //     });
    //   }
    // });
  });

  return new Response("An Error Occured Error, Next.js!", {
    status: 400,
  });
}

export async function POST(request) {
  const body = await request.json();
  const { email, fullname } = body;

  if (!email || !fullname) {
    return new Response("Missing Required Arguements", {
      status: 200,
      statusText: "Missing Required Arguements",
    });
  }

  const connection = mysql.createConnection({
    host: "localhost:80",
    user: "root",
    password: "",
    database: "waitlist",
  });

  connection.connect();
  //   // Create a 'subscriptions' table if it doesn't exist
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS subscriptions (
      id INT AUTO_INCREMENT PRIMARY KEY,
      fullname VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    )
    `;
  const insertQuery = "INSERT INTO subscriptions (email,fullname) VALUES (?,?)";

  connection.query(createTableQuery, (error, result) => {
    if (error) {
      console.log("error have occured again");
      return;
    } else {
      return new Response("Method Not Allowed");
    }
  });

  return new Response("User successfylly subscribed to waitlist", {
    status: 201,
    statusText: "Successfully added to waitlist",
  });
}
