const auth = require('./auth/index.js')

module.exports = (app) => {
    app.use(auth.routes())//注册auth（导出到src下的index的app中）
}