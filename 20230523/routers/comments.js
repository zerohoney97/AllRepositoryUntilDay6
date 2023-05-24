const router=require('express').Router();
const {isLogin}=require('../middleware/isLogin');
const {insert}=require('../controllers/commentController');
router.post('/insert/:id',isLogin,insert);

module.exports=router;