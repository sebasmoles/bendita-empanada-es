const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;
const distPath = path.join(__dirname, "dist");

app.use(express.static(distPath));

// For managing SPA routes
app.get(/.*/, (req, res) => {
	res.sendFile(path.join(distPath, "index.html"));
});

app.listen(port, () => {
	console.log(`Server is up on port ${port}!`);
});
