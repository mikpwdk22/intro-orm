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
    async create(req: Request, res: Response) {
        try {
            const { username, email, fullName } = req.body;

            const findUser = await prisma.user.findFirst({
                where: {
                    email: email,
                },
            });

            await prisma.user.create({
            data: {
                username,
                email,
                fullName
            }
            });

            res.status(201).json({
                success: true,
                message: 'Create User Successfully',
                data: {
                    username,
                    email,
                    fullName
                }
            });
        } catch (error: any) {
            console.log(error);
            res.status(500).json({
                success: false,
                message: error?.message,
                data: null  
            });
            
        }
    },
}