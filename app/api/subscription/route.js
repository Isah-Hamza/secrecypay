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

  //         // Insert the new subscription into the 'subscriptions' table
  //         const insertQuery = 'INSERT INTO subscriptions (email) VALUES (?)';
  //         connection.query(insertQuery, [email], (error, results) => {
  //           if (error) throw error;

  //           // Close the MySQL connection
  //           connection.end();

  //           // Return a success response
  //           return res.status(200).json({ success: true, message: 'Subscription successful' });
  //         });
  //       });
  //     } catch (error) {
  //       console.error('Error saving subscription:', error);
  //       return res.status(500).json({ success: false, message: 'Internal Server Error' });
  //     }
  //   }

  //   // Return a method not allowed response for non-POST requests
  // }

  return new Response("An Error Occured Error, Next.js!", {
    status: 400,
  });
}

export async function POST() {
  return Response.json({message: "Hello, Post requset" });
}
