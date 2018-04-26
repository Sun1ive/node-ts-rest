import app from "./app";

const server = app.listen(8081, () =>
  console.log("Server is running at port 8081")
);

export default server;