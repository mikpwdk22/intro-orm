import { Request, Response } from "express";
import prisma from "../config/prisma-client.config";
import { usersService } from "../services/users.service";

export const UsersController = {
    async get(req: Request, res: Response) {
        try {
            const users = await prisma.user.findMany();

            res.status(200).json({
                success: true,
                message: "get data successful",
                data: users,
            })
        } catch (error) {
            res.status(500).json(error);
        }
    },
    async create(req: Request, res: Response) {
        const { username, email, fullName, role} = req.body;
        
        await usersService.create({username, email, fullName, role})

        res.status(201).json({
            success: true,
            message: 'create users successful',
            data: {
                username,
                email,
                fullName,
            },
        }); 

            
        }
    }