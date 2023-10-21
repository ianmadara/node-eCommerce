exports.get404Page = (req, res, next) => {
  res.render("404", { docTitle: "Page Not Found" });
};
