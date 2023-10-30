const errorHandler = (handler) => async (req, res, next) => {
    try {
        await handler(req, res, next);
    } catch (err) {
        return res.status(400).json({ error: err.message });
    }
};

export default errorHandler;
