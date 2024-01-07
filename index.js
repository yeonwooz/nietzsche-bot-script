const { Configuration, OpenAIApi } = require('openai');
require('dotenv').config();

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const execute = async () => {
    const response = await openai.createCompletion({
        // text-davinci-003 deprecated (https://platform.openai.com/docs/deprecations)
        model: 'gpt-3.5-turbo-instruct',
        prompt: process.env.PROMPT, // https://promptbase.com/prompt/fredrich-nietzsche-chatbot
        temperature: 0.7,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
        // stop: [],    // not supported
    });
    console.log(response.data.choices[0]);
    return response;
};

execute();
