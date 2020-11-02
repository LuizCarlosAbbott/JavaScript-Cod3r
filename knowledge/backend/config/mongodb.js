const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost/knowledge_stats", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .catch((e) => {
    console.error("Não foi possível conectar com o MongoDB!");
  });
