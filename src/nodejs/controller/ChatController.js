const Chat = require("../models/Chat")
class ChatController {
    insertContent(req, res) {
        var request = req.body
        var accountChat = new Chat({
            from: {
                index: request.from.index,
                name: request.from.name,
                image: request.from.image
            },
            to: {
                index: request.to.index,
                name: request.to.name,
                image: request.to.image
            },
            timestamp: {
                year: request.timestamp.year,
                month: request.timestamp.month + 1,
                day: request.timestamp.day,
                hour: request.timestamp.hour,
                minute: request.timestamp.minute,
                second: request.timestamp.second,
                millisecond: request.timestamp.millisecond
            },
            content: request.content,
        })
        accountChat.save((error, result) => {
            if (error) console.log(error)
            else res.send("Create frame successfully")
        })


    }
    displayContent(req, res) {
        Chat.find({}, (result, error) => {
            if (error) res.send(error)
            else res.send(result)
        })
    }
    displayContentById(req, res) {
        var friend = []
        Chat.find({ "to.index": { "$eq": req.params.id, "$exists": true } }, (error, result) => {
            if (error) res.send(error)
            else {
                result.forEach((element) => {
                    if (friend.length == 0 || !friend.some(friend => friend.index == element.from.index))
                        friend.push({
                            index: element.from.index,
                            name: element.from.name,
                            image: element.from.image
                        })
                })
                res.send(friend)
            }
        })
    }
}
module.exports = new ChatController