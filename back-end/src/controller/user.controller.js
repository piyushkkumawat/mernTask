const User = require("../modal/user.modal");
const bcrypt = require("bcryptjs")
const jwt = require('jsonwebtoken')

exports.Create = async (req, res) => {
  try {
    let { fname, lname, email, password, gender, role } = req.body;
    const findUser = await User.findOne({ email })
    if (findUser) {
      return res.status(400).json({
        status: 400,
        message: "User Already Registered"
      })
    } else {
      var salt = bcrypt.genSaltSync(10);
      password = bcrypt.hashSync(password, salt);
      const saveUser = new User({ fname, lname, email, password, gender, role });
      await saveUser.save();
      if (saveUser) {
        return res.status(200).json({
          status: 200,
          message: "User Registered"
        })
      } else {
        return res.status(400).json({
          status: 400,
          message: "User Not Registered"
        })
      }
    }
  } catch (error) {
    return res.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};

exports.login = async (req, res) => {
  try {
    const findUser = await User.findOne({ email: req.body.email });
    if (findUser) {
      const token = jwt.sign({ user: { userId: findUser._id } }, 'JWT_SECRET')
      return res.status(200).json({
        status: 200,
        message: "User Fetched",
        data: { ...findUser._doc, token: token }
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "User Not Found",
      });
    }
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}

//#region Get all user records
exports.getUser = async (req, res) => {
  try {
    const userList = await User.find();
    if (userList) {
      return res.status(200).json({
        status: 200,
        message: "User Fetched",
        data: userList,
      });
    } else {
      return res.status(400).json({
        status: 400,
        message: "User Not Found",
        data: [],
      });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      status: 500,
      message: "Internal Server Error",
    });
  }
};