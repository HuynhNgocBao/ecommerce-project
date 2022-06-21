const authRouter = require('./auth');
const userRouter = require('./user');
const {protect} = require('../middlewares/auth');

function route(app){
    app.use('/api/auth', authRouter);
    app.use('/api/user', protect, userRouter);
}

module.exports = route;