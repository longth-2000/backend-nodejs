const React = require("../models/Reacts")
class ReactionController {
    postReact(req, res) {
        React.findOne({ IndexHost: req.body.indexHost, IndexClient: req.body.indexClient }).then((result) => {
            if (result == null) {
                var acountReacted = new React({
                    IndexHost: req.body.indexHost,
                    IndexClient: req.body.indexClient
                })
                acountReacted.save((result, error) => {
                    if (error) res.send(error)
                    else res.send(result)
                })
            }
            else console.log("Liked!!!!")

        })

    }
    showLikedProfile(req, res) {
        React.find({ IndexClient: req.params.id }, (error, result) => {
            if (error) res.send(error)
            else res.send(result)
        }
        )
    }
    showisLikedProfile(req, res) {
        React.find({ IndexHost: req.params.id }, (error, result) => {
            if (error) res.send(error)
            else res.send(result)
        })
    }
    deleteProfile(req, res) {
         React.deleteOne({ IndexHost: req.body.ID }, (error, response) => {
            if (error) res.send(error)
            else res.send(response)
        })  
    }
}
module.exports = new ReactionController