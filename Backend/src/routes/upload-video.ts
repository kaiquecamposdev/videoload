import { FastifyInstance } from "fastify";
import fastifyMultipart, { fastifyMultipart } from "@fastify/multipart"
import fs from 'node:fs'
import path from 'node:path'
import { pipeline } from 'node:stream'
import { prisma } from "../lib/prisma";
import { promisify } from 'node:util'
import { randomUUID } from "node:crypto";

const pump = promisify(pipeline)

export async function uploadVideoRoute(app: FastifyInstance ) {
  app.register(fastifyMultipart, {
    limits: { // Definindo um tamanho máximo para o arquivo
      fileSize: 1048576 * 25 // 1mb * 25 = 25mb
    }
  })

  app.post('/videos', async (req, res) => {
    const data = await req.file()

    // Evitar o acaso do data estar vazio
    if(!data) {
      res.status(400).send({ error: "Missing file input." })
    }
    
    // Evitar extensão diferente 
    const extension = path.extname(data.filename)

    if(extension !== '.mp3') {
      return res.status(400).send({ error: "Invalid input type, please upload a MP3." })
    }

    // Evitar nomes de arquivos iguais
    const fileBaseName = path.basename(data.filename, extension)
    const fileUploadName = `${fileBaseName}-${randomUUID()}${extension}`
    const uploadDestination = path.resolve(__dirname, '../../tmp', fileUploadName)

    // Escrever o arquivo na pasta `uploadDestination`
    await pump(data.file, fs.createWriteStream(uploadDestination))

    // Registrar o arquivo no bd
    const video = await prisma.video.create({
      data: {
        name: data.filename,
        path: uploadDestination,
      }
    })

    res.send({
      video
    })
  })  
}