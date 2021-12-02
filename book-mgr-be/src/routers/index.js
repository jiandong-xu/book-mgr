const auth = require('./auth/index.js')
const inviteCode = require('./invite-code/index.js')
const book = require('./book/index')

module.exports = (app) => {
    app.use(auth.routes())//注册auth（导出到src下的index的app中）
    app.use(inviteCode.routes())
    app.use(book.routes())
}