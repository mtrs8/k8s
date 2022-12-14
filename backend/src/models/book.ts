import mongose, { Schema, Document } from 'mongoose'

export interface Book extends Document {
    _id: string;
    title: string;
    author: string;
}

const BookSchema = new Schema(
    {
        title: {
            type: String
        },
        author: {
            type: String
        },
    },
    {
        timestamps: true,
    }
)

export default mongose.model<Book>('Book', BookSchema)