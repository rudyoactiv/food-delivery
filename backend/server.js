import express from 'express';
import cors from 'cors';
import { connectDB } from "./config/db.js";
import foodRouter from './routes/foodRoute.js';
import userRouter from './routes/userRoute.js';
import 'dotenv/config';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';
import axios from 'axios';



// app config
const app = express();
const port = process.env.PORT || 4000;

// middleware
app.use(express.json());
app.use(cors());

// db connection
connectDB();

// api endpoints
app.use("/api/food", foodRouter)
app.use("/images", express.static("uploads"))
app.use("/api/user", userRouter)
app.use("/api/cart", cartRouter)
app.use("/api/order", orderRouter)

app.get('/', (req, res) => {
    res.send('API Working')
})

// self ping
app.get('/ping', (req, res) => {
    res.status(200).send('Ping received');
});

app.listen(port, () => {
    console.log(`Server started on http://localhost:${port}`)

    // Ping itself every 14 minutes
    setInterval(async () => {
        try {
            await axios.get('https://ecom-backend-6w8m.onrender.com/ping');
            console.log('Ping sent to self');
        } catch (error) {
            console.error('Error pinging self:', error.message);
        }
    }, 12 * 60 * 1000); // 12 minutes    
})