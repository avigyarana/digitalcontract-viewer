import app from "./app";

app.listen(process.env.PORT || 4000, process.env.ADDRESS || "0.0.0.0", () => {
  console.log(
    `Running a GraphQL API server at ${
      process.env.ADDRESS || "http://localhost:4000"
    }/graphql`
  );
});
