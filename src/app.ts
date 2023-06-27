import express, { Application, Request, Response } from 'express'
const app: Application = express()
import cors from 'cors'
import usersRouter from './app/modules/users/users.route'

// middleware
app.use(cors())

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/api/v1/users/', usersRouter)

// Testing
app.get('/', async (req: Request, res: Response) => {
  res.send('Working Successfully')
})

export default app
