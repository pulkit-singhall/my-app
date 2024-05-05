import mongoose, { Schema, Document } from "mongoose";

export interface query extends Document{
    name: string,
    email: string,
    content: string,
}

const querySchema: Schema<query> = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true
    }
})

const Query = (mongoose.models.Query as mongoose.Model<query>)
    || mongoose.model<query>("Query", querySchema)

export default Query 