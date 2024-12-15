import express from 'express';

const app = express();
const port = 3001;

app.get("/", (req, res) => {
    res.send("Hello from Hitesh1 and this is tea!");
});

app.get("/ice-tea", (req, res) => {
    res.send("What ice tea would you prefer");
});

app.get("/twitter", (req, res) => {
    res.send("shivampatracom");
});

app.listen(port, () => {
    console.log(`Server is running at port ${port}..`);
});