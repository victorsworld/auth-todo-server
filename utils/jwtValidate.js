const jwt = require('jsonwebtoken');

const jwtValidate = async (req, res, next) => {
  try {
    if (req.headers && req.headers.authorization) {
      let token = req.headers.authorization;
      console.log(token)
      
      let slicedToken = token.split(' ')[1];
      
      let decodedToken = await jwt.verify(slicedToken, process.env.SECRET_KEY);
      //decoded token will give us, payload ( any info we passed in), created time and expiration time
      
      if (decodedToken) {
        res.locals.decodedToken = decodedToken;
        next();
        return;
      }
    }else{
      return res
				.status(401)
				.json({
					success: false,
					message: "error",
					error: { user: "Not authorized" },
				});
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: 'error', error: error });
  }
};

module.exports = {
  jwtValidate,
};
