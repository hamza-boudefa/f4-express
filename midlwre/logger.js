const date=new Date()
const day=date.getDay()
const hour=date.getHours()

console.log(hour)
const logger=(req,res,next)=>{
    if(day>5 || hour<9 || hour>17){
        res.send('<h1>bara rawah , msakrin </h1>')
    }
    next()
}

module.exports=logger