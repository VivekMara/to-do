import express from "express"
import 'dotenv/config'
const app = express();
const port = 3000









try {
    app.listen(port , (req,res) => {
        console.log(`App is listening on port ${port}`)
    })
} catch (error) {
    console.error(error)
}





export default app


