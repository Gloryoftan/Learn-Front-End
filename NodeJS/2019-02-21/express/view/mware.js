module.exports = (req,res,next)=>{
    req.mwareTest = "这是我创建的一个中间件js模块";
    next();
};