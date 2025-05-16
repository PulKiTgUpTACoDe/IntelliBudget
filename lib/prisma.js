import { PrismaClient } from "./generated/prisma";
import { withAccelerate } from '@prisma/extension-accelerate'

export const db = globalThis.prisma || new PrismaClient().$extends(withAccelerate());

if (process.env.NODE_ENV !== "production") {
  globalThis.prisma = db;
}
