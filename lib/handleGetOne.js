module.exports = (req, res) => {
  // Promise and/or async/await
  res.json({ id: req.params.id });
};