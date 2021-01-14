import express from 'express'
import usersRouter from './routes/users.routes.js'
import postsRouter from './routes/posts.routes.js'

const PORT = process.env.PORT ?? 3000
const app = express()

app.use(express.json())
app.use('/api', usersRouter)
app.use('/api', postsRouter)

app.listen(PORT, () => {
  console.log(`Server has been started on port ${PORT}...`)
})

