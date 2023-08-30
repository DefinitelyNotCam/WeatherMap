import express from 'express';

const app = express();
const PORT = process.env.PORT || 3001;

app.get("/api", (req, res) => {
    res.json({ ok: "This is a test, does this work?", message: "test" });
});

app.listen(PORT, () => {
    return console.log(`Express is listening at http://localhost:${PORT}`);
});