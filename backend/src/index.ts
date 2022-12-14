import express, { Request, Response, NextFunction} from "express";
import routes from './routes/book-route'
import cors from 'cors'
import * as dotenv from 'dotenv'
import { connectToDatabase } from './config'
import { saveDataInDatabase } from "./api-data";

dotenv.config()

const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json())

app.use(function(req: Request, res: Response, next:NextFunction) {
    res.header('Access-Control-Allow-Origin', '*')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
    app.use(cors())
    next()
})

app.use(routes)


app.get('/', (req: Request, res: Response) => {
    return res.json({message: 'Hello World!'})
})

app.listen('3002', async () => {
    console.log('connectado')
    await connectToDatabase()
    await saveDataInDatabase()
})