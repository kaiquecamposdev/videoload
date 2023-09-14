import { FastifyInstance } from "fastify";
import { createReadStream } from "node:fs"
import { openai } from "../lib/openai"
import { prisma } from "../lib/prisma";
import { z } from "zod"

export async function createTranscriptionRoute(app: FastifyInstance ) {
  app.post('/videos/:videoId/transcription', async (req, res) => {

    // Schema para validar os parâmetros existentes 
    const paramsSchema = z.object({
      videoId: z.string().uuid(),
    })

    const { videoId } = paramsSchema.parse(req.params)

    // Schema validando o prompt passado no body
    const bodySchema = z.object({
      prompt: z.string(),
    })

    const { prompt } = bodySchema.parse(req.body)

    // Buscando dentro do banco o vídeo pelo id 
    const video = await prisma.video.findUniqueOrThrow({
      where: {
        id: videoId,
      }
    })

    const videoPath = video.path
    const audioReadStream =  createReadStream(videoPath)

    const response = await openai.audio.transcriptions.create({
      file: audioReadStream,
      model: 'whisper-1',
      language: 'pt',
      response_format: 'json',
      temperature: 0,
      prompt,
    })
    const transcription = response.text

    // Update no banco e Retorno de dados
    await prisma.video.update({
      where: {
        id: videoId,
      },
      data: {
        transcription,
      }
    })
    return {transcription}
  })  
}