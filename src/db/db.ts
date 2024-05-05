import mongoose from "mongoose";

const dbConnect = new Promise((res, rej) => {
    try {
        const connection =
            mongoose.connect(`${process.env.MONGO_DB_URI}/${process.env.DB_NAME}`)
        res(connection)
    } catch (error) {
        rej(error)
    }
})

export default dbConnect