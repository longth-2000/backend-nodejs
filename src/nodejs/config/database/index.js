const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb+srv://long:Dominic1234@newcluster.c5ce2.mongodb.net/database1?retryWrites=true&w=majority', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });
        console.log("Connect Successfully!!!")

    }
    catch (error) {
        console.log("Error!!!!")
    }
}
module.exports = {connect}