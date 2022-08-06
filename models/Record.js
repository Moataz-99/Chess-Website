// this is a mongoose propirity
const mongoose = require('mongoose'); // call mongoose 
const Schema = mongoose.Schema; // identify the Schema of Mongoose

const moveSchema = new Schema ({ // create a new Schema 
     move : {
        piece: { /// the piece
            type: String, // type of data 
            required: true // it's requiered to  send the data 
        },
        from: { // from where the piece moved from 
            type: String,
            required: true
        },
        to: { // to where the piece moved
            type: String,
            required: true
        }
     }

    
}
// ,{timestamps: true} // add an stamp to the move 
);
const Move = mongoose.model('moves', moveSchema); 
module.exports = Move;