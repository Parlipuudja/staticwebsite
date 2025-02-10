const dotenv = require("dotenv")
const { OpenAI } = require("openai")

dotenv.config()

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

async function Makebulletpoints(input_text) {
  const new_text = "Make bullet points for this following text: " + input_text
  try {
    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: new_text }],
      max_tokens: 500,
    })
    return response.choices[0].message.content
  } catch (error) {
    console.error("Error generating text:", error)
    throw error
  }
}
module.exports = Makebulletpoints

