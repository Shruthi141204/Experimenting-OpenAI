import * as dotenv from "dotenv";
dotenv.config();

import { OpenAI } from "openai";

const openai = new OpenAI();

const response = await openai.chat.completions.create({
    model: "gpt-4-turbo",
    messages: [
        {
            role: "user",
            content: "Describe the image at this URL: https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9tOj8Q8Z59Gaz4XkQHaMhtSuNoeBpNq6q_w&s"
        }
    ]
});

console.log(response.choices[0].message.content);
