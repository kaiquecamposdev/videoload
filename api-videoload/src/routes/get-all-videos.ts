import { FastifyInstance } from "fastify";
import { prisma } from "../lib/prisma";

export async function getAllVideosRoute(app: FastifyInstance ) {
  app.get('/videos', async (req, res) => {
    const video = await prisma.video.findMany()
    if(video) {
      return res.send(video)
    }
  })  
}