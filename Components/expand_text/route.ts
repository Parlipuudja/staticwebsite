require('dotenv').config();
const { Configuration, OpenAIApi } = require('openai');


const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);


export default async function Expandtext(input_text: string): Promise<string | undefined> {
  const new_text='Expand this following text: '+input_text;
  try {
    const response = await openai.createCompletion({
      model: 'gpt-4-turbo',
      prompt: new_text,
    });
    return response.data.choices[0].text;
  } catch (error) {
    console.error('Error generating text:', error);
  }
}