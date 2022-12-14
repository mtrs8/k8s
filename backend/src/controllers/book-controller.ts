import { Request, Response, NextFunction } from 'express'
import BookModel from '../models/book'

export const getAllBooks = async (req: Request, res: Response, next: NextFunction) => {
    try{
        const books = await BookModel.find()
        return res.status(200).json(books).end()
    } catch (error) {
        return res.status(400).json(error).end()
    }
}