
module.exports = function(req,res,next) {
    if(req.query.isAuth==="1") {
        next();
    }else {
        res.sendStatus(401);
    }
};
