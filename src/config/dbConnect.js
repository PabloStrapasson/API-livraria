//mongodb+srv://admin:<password>@cluster0.ua9gerg.mongodb.net/?retryWrites=true&w=majority

import mongoose from "mongoose";

export default async function conectaDatabase(){
    mongoose.connect(process.env.DB_CONNECTION_STRING)

    return mongoose.connection
}

