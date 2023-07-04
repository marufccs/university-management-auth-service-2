import express, { Application, NextFunction, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'
import globalErrorHandler from './errors/globalErrorHandler'

// middleware
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

// Testing
// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   next('Ore baba error')
// })

app.use(globalErrorHandler)

export default app
