import  prisma  from "../config/prisma-client.config";
import { User } from "../generated/prisma/client";

export const usersService = {
  async get() {
    return prisma.user.findMany();
  },

  async create(
    data: Pick<User, "username" | "email" | "fullName" | "role">
  ) {
    const { username, email, fullName, role } = data;

    const findUser = await prisma.user.findFirst({
      where: { email },
    });

    if (findUser) {
      throw new Error("Email already registered");
    }

    return prisma.user.create({
      data: {
        username,
        email,
        fullName,
        role,
      },
    });
  },
};
