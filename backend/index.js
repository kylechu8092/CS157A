import express from "express";
import mysql from "mysql2";
import cors from "cors";

const app = express();
app.use(cors());

console.log("Attempting to connect to database");
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "kyle1234",
  database: "Homework2",
});


app.use(express.json());


app.get("/", (req,res) => {
    res.send("Hello World");
})

app.post("/query", (req, res) => {
    const {query} = req.body;
    console.log("Request body:", req.body);
    if (typeof query !== "string") {
        console.log("Invalid query format");
        return res.status(400).json({ error: "Invalid query format" });
    }
    db.query(query, (err,data) =>{
        if (err) {
            console.log("Error executing query:", err);
            res.json(err)
    }
    console.log("Data received from database:");
    res.json(data)
    }
)
})

app.get("/tables", (req, res) => {
    const query = "SHOW TABLES";
    db.query(query, (err, data) => {
      if (err) {
        console.error("Error fetching table names:", err);
        return res.status(500).json(err);
      }
      const tableNames = data.map((row) => Object.values(row)[0]); // Extract table names
      res.json(tableNames);
    });
  });
  

app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
