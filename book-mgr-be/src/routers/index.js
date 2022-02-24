const auth = require('./auth/index.js');
const inviteCode = require('./invite-code/index.js');
const book = require('./book/index');
const inventoryLog = require('./Inventory-log');
const user = require('./user/index');
const character = require('./character/index');
const log = require('./log');
const forgetPassword = require('./forget-password');
const bookClassify = require('./book-classify');
const profile = require('./profile');
const dashboard = require('./dashboard');
const upload = require('./upload');

module.exports = (app) => {
    app.use(auth.routes())//注册auth（导出到src下的index的app中）
    app.use(inviteCode.routes())
    app.use(book.routes())
    app.use(inventoryLog.routes())
    app.use(user.routes())
    app.use(character.routes())
    app.use(log.routes())
    app.use(forgetPassword.routes())
    app.use(bookClassify.routes())
    app.use(profile.routes())
    app.use(dashboard.routes())
    app.use(upload.routes())
};