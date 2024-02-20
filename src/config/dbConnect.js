//mongodb+srv://admin:<password>@cluster0.ua9gerg.mongodb.net/?retryWrites=true&w=majority

import mongoose from "mongoose";

export default async function conectaDatabase(){
    mongoose.connect('mongodb+srv://admin:admin123@cluster0.ua9gerg.mongodb.net/livraria?retryWrites=true&w=majority')

    return mongoose.connection
}

