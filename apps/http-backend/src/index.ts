import express from 'express';
import jwt from "jsonwebtoken";
import { middleware } from './middleware';
import { CreateUserSchema, SigninSchema, CreateRoomSchema } from '@repo/common/types';

const app = express();

app.post("/signup", (req, res) => {
    // Simulate user signup logic
    const data = CreateUserSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            message: "Invalid input",
        });
    }
    console.log("User signed up");
    res.status(201).send("User signed up successfully");
}
);

app.post("/signin", (req, res) => {
    // Simulate user signin logic
    const data = SigninSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            message: "Invalid input",
        });
    }
    console.log("User signed in");
    res.status(200).send("User signed in successfully");
}
);

app.post("/room", middleware, (req, res) => {
    // Room logic
    const data = CreateRoomSchema.safeParse(req.body);
    if (!data.success) {
        return res.status(400).json({
            message: "Invalid input",
        });
    }
    res.json({
        roomId: 123
    })
})

app.listen(3001)