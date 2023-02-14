const jwt = require('jsonwebtoken');

const jwtSecretKey = "Asailorwenttoseaseaseatoseewhattheycouldseeseesee";

exports.generateKey = (req, res, next) => {
    const sessionId = req.body.id;
    
    const token = jwt.sign(
        {
            sessionId: sessionId
        },
        jwtSecretKey,
        { expiresIn: 600 }
    );
    res.status(200).json({ token: token });
}