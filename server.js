
const express = require("express");

const app = express();

// Custom Middleware
function myMiddleware(req, res, next) {
    console.log("Middleware executed!");
    console.log("Request URL:", req.url);

    next();
}

// Apply Middleware
app.use(myMiddleware);

// Route
app.get("/", (req, res) => {
    res.send("Welcome to my website!");
});

app.get("/about", (req, res) => {
    res.send("This is About Page!");
});

// Start Server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});
                     
