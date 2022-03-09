const express = require("express");
const app = express();

const { PrismaClient } = require("@prisma/client");
const { passport } = require("./config/passport");
const prisma = new PrismaClient();

// middlewares
app.use(express.json());

// rutas
app.use("/users", require(""));

app.listen(3000, () => {
  console.log("aplicacion ejecutandose...");
});
