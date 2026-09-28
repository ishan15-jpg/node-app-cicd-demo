import express from 'express'

const app = express()

app.get('/health', (_, res) => {
    res.status(200).json({
        message: "API is running successfully",
        status: "up"
    })
})

export default app