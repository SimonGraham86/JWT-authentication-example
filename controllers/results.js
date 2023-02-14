
exports.getData = (req, res, next) => {
    const sessionId = req.sessionId;
    res.status(200).json({ sessionId: sessionId });
}