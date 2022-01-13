const auth = require('./auth/index.js');
const inviteCode = require('./invite-code/index.js');
const book = require('./book/index');
const inventoryLog = require('./Inventory-log');
const user = require('./user/index');

module.exports = (app) => {
    app.use(auth.routes())//注册auth（导出到src下的index的app中）
    app.use(inviteCode.routes())
    app.use(book.routes())
    app.use(inventoryLog.routes())
    app.use(user.routes())
}