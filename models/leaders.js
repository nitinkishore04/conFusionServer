const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    abbr: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: String,
        required: true,
        default: false
    }
}, {
    timestamps: true
});

var Leaders = mongoose.model('Leader', leaderSchema);

module.exports = Leaders;