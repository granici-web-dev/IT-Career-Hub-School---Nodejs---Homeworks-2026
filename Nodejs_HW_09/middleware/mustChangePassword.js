function mustChangePassword(req, res, next) {
  const { mustChangePassword } = req.user;

  if (mustChangePassword) {
    return res
      .status(400)
      .json({ message: "You must change your password before proceeding" });
  }

  next();
}

export default mustChangePassword;
