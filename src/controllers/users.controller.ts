import { Request, Response } from "express";
import prisma from "../config/prisma-client.config";

export const UsersController = {
    async get(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();

            res.status(200).json({
                success: true,
                message: "get data successful",
                data: users
            })
        } catch (error) {
            res.status(500).json(error);
        }
    },
    create(req: Request, res: Response) {},
}