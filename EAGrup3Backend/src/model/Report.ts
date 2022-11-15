import { Schema, model } from 'mongoose';

const Report = new Schema({
    content: String,
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    date: Date, //data de publicació
    accepted: Boolean, //false si encara no ha estat verificada per l'equip de gertió
                       //true si l'equip accepta com a valida la queixa
});

export default model('Report', Report);