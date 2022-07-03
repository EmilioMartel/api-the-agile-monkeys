import express from 'express';
import morgan from 'morgan';
import pkg from '../package.json';
import { createRoles } from "./libs/initialSetup";

import authRoutes from "./routes/auth.routes";

const app = express();
createRoles();

app.set('pkg', pkg);

// middleware
app.use(morgan('dev'));
app.use(express.json());

// routes
app.get("/", (req, res) => {
    res.json({
        author: app.get('pkg').author,
        description: app.get('pkg').description,
        version: app.get('pkg').version
    });
})

app.use("/api/auth", authRoutes);

export default app;