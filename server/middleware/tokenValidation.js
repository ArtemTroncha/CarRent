const jwt = require("jsonwebtoken");


module.exports = function(req,res,next){
    const token = req.header('auth-token')
    if(!token) res.status(401).send("Access denied")
    try {
        const velified = jwt.verify(token,process.env.TOKEN_SECRET);
        req.user = velified
        next()

    } catch (err) {
        res.status(400).send("Invalid token")
    }
}

