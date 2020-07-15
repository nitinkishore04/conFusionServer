const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
const Schema = mongoose.Schema;
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    label: {
        type: String,
        required: true
    },
    price: {
        type: Currency,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    featured: {
        type: String,
        required: true,
        default: false
    },
},{
    timestamps: true
});

var Promotions = mongoose.model('Promotion',promotionSchema);

module.exports = Promotions;