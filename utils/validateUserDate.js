const { isEmail, isStrongPassword } = require('validator');

const validateUserData = (req, res, next) => {
  const { email, password } = req.body;

  const errObj = {};
  if (!isEmail(email)) {
    errObj.email = 'Please enter a valid email';
  }
  if (!isStrongPassword(password)) {
    errObj.password =
      'Your password must contain 1 lowercase, 1 uppercase, 1 number, 1 special character and at least 8 characters long';
  }

  if(Object.keys(errObj).length > 0){
    return res.status(401).json({
        success: false,
        message: "error",
        errObj: errObj,
    })
  } else {
    next();
  }
};

module.exports = {
    validateUserData
}
