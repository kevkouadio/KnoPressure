const db = require("../models");
const jwt = require("jsonwebtoken");
const util = require("util");

const signTokenAsync = util.promisify(jwt.sign);

module.exports = {
  // Resolves to an object with failure message or
  // token and user if login is successful.
  logUserIn: async (email, password) => {
    const user = await db.User.findOne({ email });
    if (!user) {
      return { success: false, message: "User not found" };
    }

    const isMatch = await user.verifyPassword(password);
    if (!isMatch) {
      return {
        success: false,
        message: "Authentication failed. Wrong password.",
      };
    }

    const ONE_DAY = 129600; // 129600 seconds per day
    const token = await signTokenAsync(
      { id: user._id, email: user.email, username: user.username },
      process.env.SERVER_SECRET,
      { expiresIn: ONE_DAY }
    );
    return {
      success: true,
      message: "Token Issued!",
      token,
      user,
    };
  },

  // Express middleware function
  isAuthenticated: (req, res, next) => {
    const token = req.header("Authorization");
    if (!token) {
      return res.status(401).json({ message: "Access Denied" });
    }
  
    try {
      const decoded = jwt.verify(token.split(" ")[1], process.env.SERVER_SECRET);
      req.user = decoded;
      next();
    } catch (err) {
      return res.status(401).json({ message: "Token is not valid" });
    }
  },  
};
