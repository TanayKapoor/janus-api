const express = require("express");
const app = express();
const port = 3000;
const apiRoutes = require("./routes/api");
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");

app.use(express.json());
app.use("/api", apiRoutes);

const options = {
  swaggerDefinition: {
    info: {
      title: "My Node API",
      version: "1.0.0",
      description: "Example API using Swagger",
    },
    host: "localhost:3000",
    basePath: "/",
  },
  apis: ["./routes/*.js"], // Path to the API docs
};

const specs = swaggerJsdoc(options);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(specs));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
  console.log(`Swagger UI available at http://localhost:${port}/api-docs`);
});
