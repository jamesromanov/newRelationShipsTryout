const { connectDb } = require("./config/db");
const app = require("./middleware/app");
const env = require("dotenv").config();
connectDb();
app.listen(process.env.PORT || 3000, () => {
  console.log("Server running on:", process.env.PORT || 3000);
});
