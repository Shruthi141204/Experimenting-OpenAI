import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "openai";

const openai = new OpenAI();

const response = await openai.images.generate({
    prompt: "A city skyline at sunset",
    n: 1,
    size: "512x512"
});

console.log(response.data[0].url);
