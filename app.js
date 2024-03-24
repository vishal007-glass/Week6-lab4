const express = require("express");
const connectDB = require("./db");
const { getBooks, addBook, deleteBook, deleteAllBooks} = require("./controller");

const app = express();

app.use(express.json());

// Connect to MongoDB
connectDB();

// Routes
app.get("/books", getBooks);
app.post("/books", addBook);
app.delete("/books/:id", deleteBook);
app.delete("/books", deleteAllBooks);

const PORT = 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});