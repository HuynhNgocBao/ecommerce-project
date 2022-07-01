const authRouter = require('./auth');
const userRouter = require('./user');
const productRouter = require('./product');
const {protect} = require('../middlewares/auth');

function route(app){
    app.use('/api/auth', authRouter);
    app.use('/api/user', protect, userRouter);
    app.use('/api/product', productRouter);
}

module.exports = route;