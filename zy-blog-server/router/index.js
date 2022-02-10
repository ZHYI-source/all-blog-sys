//路由  接口地址就在这里写
const  express = require ('express')

const router = express.Router()
//文件上传
router.use(require('./upload/upload'))
//web端
router.use(require('./web/article'))
//管理端
router.use(require('./system/sms'))
router.use(require('./system/blog'))


module.exports = router

