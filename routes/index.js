import apiRoutes from "./api";

export default (app) => {
  app.use("/helade/api", apiRoutes);
};
