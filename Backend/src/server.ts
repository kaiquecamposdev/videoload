import { createTranscriptionRoute } from "./routes/create-transcription"
import { fastify } from "fastify"
import { fastifyCors } from "@fastify/cors"
import { generateAICompletionRoute } from "./routes/generate-ai-completion"
import { getAllPromptsRoute } from "./routes/get-all-prompts"
import { getAllVideosRoute } from "./routes/get-all-videos"
import { uploadVideoRoute } from "./routes/upload-video"

export const app = fastify()
const port = 8000

app.register(fastifyCors, {
  origin: "*",
})
app.register(getAllVideosRoute)
app.register(getAllPromptsRoute)
app.register(uploadVideoRoute)
app.register(createTranscriptionRoute)
app.register(generateAICompletionRoute)

app.listen({ port }, () => {
  console.log("Server listening on port ::" + port)
})