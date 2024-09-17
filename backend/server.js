// server.js
const app = require("./index");

if (process.env.NODE_ENV !== "test") {
  const port = process.env.PORT || 5000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
