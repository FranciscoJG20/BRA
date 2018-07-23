module.exports = {
  index: (req, res) => {
    res.render("index", { page: "homepage" });
  },

  faq: (req, res) => {
    res.render("faq");
  }
};
