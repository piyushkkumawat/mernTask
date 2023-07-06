const jwt = require("jsonwebtoken");

exports.adminAuth = async (req, res, next) => {
    const token = req.header("auth");
    if (!token) {
        res.status(401).json({ mes: "Token not authorized" });
    } else {
        try {
            const decode = jwt.verify(token, 'JWT_SECRET');
            if (decode.user) {
                req.user = decode.user.userId;
                next();
                console.log("req.user ", req.user)
            } else if (decode.admin) {
                req.admin = decode.admin.id;
                next()
            } else {
                res.status(400).json({
                    status: 400,
                    message: "TOKEN_NOT_VALID",
                    data: []
                })
            }
            // next();
        } catch (err) {
            return res.status(500).json({
                status: "INTERNAL_SERVER_ERROR",
                message: "INTERNAL_SERVER_ERROR",
                message: err.message,
            });
        }
    }
};