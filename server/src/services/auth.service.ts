import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function signup(data: {
  username: string;
  displayName: string;
  email: string;
  password: string;
}) {
  const existing = await prisma.user.findFirst({
    where: {
      OR: [
        { email: data.email },
        { username: data.username },
      ],
    },
  });

  if (existing) {
    throw new Error("User already exists.");
  }

  const passwordHash = await bcrypt.hash(
    data.password,
    10,
  );

  const user = await prisma.user.create({
    data: {
      username: data.username,
      displayName: data.displayName,
      email: data.email,
      passwordHash,
    },
  });

  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET!,
    {
      expiresIn: "7d",
    },
  );

  return {
    token,
    user,
  };
}

export async function getCurrentUser(
  userId: string,
) {
  return prisma.user.findUnique({
    where: {
      id: userId,
    },
    select: {
      id: true,
      username: true,
      displayName: true,
      email: true,
    },
  });
}