class ViewController {
    postView(req,res){
        res.send(req.body)
    }
}
module.exports = new ViewController