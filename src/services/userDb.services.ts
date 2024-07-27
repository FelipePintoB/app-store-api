import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient();

export const createUserService = async () => {
    try {
        const newUser = await prisma.user.create({data: {name: "Andres"}})
        return newUser;
    } catch (error) {
        throw error
    }
}
