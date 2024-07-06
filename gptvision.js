import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "openai";

const openai = new OpenAI();

const response = await openai.chat.completions.create({
    model: "gpt-4o",
    messages: [
        {
            role: "user",
            content: [
                {
                type: "text",
                text: "Describe this image",},
                {
                    type:"image_url",
                    image_url:{
                        url: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/dd/Gfp-wisconsin-madison-the-nature-boardwalk.jpg/2560px-Gfp-wisconsin-madison-the-nature-boardwalk.jpg",
                        detail: "low",
                    },
                },
            ],
        },
    ],


                },
);

console.log(response.choices[0].message.content);
