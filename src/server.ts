import "dotenv/config"
import app from "./app"
import { createServer } from "node:http"    

const server = createServer(app)

const PORT = process.env['PORT'] || 3000

server.listen(PORT, () => {
    console.log(`Application is running at http://localhost:${PORT}`)
})
