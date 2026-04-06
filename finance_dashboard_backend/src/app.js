import express from 'express';
import routes from './routes/index.js';
import errorMiddleware from './middlewares/error.middleware.js';
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();

app.use(cors({
  origin: "http://localhost:5173",
  credentials: true
}));

app.use(express.json());
app.get('/', (req, res) => {
    res.send("Finance Dashboard API Running");
});
app.use('/api', routes);
app.use((req, res) => {
    res.status(404).json({ success: false, message: "Route Not Found" });
});
app.use(errorMiddleware);

export default app;