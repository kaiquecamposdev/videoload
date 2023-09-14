import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllPromptsRoute(app: FastifyInstance ) {
  app.get('/prompts', async (req, res) => {
    const prompt = await prisma.prompt.findMany()
    if(prompt) {
      return res.send(prompt)
    }
  })  
}