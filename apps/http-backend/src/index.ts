import express from 'express';
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "./config";
import { middleware } from './middleware';

const app = express();

app.post("/signup", (req, res) => {
    // Simulate user signup logic
    console.log("User signed up");
    res.status(201).send("User signed up successfully");
}
);

app.post("/signin", (req, res) => {
    // Simulate user signin logic
    console.log("User signed in");
    res.status(200).send("User signed in successfully");
}
);

app.post("/room", middleware, (req, res) => {
    // Room logic
    // db logic
    res.json({
        roomId: 123
    })
})

app.listen(3001)