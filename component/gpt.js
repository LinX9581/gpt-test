import express from "express";
import fetch from "node-fetch";

const router = express.Router();

router.post("/", async function (req) {
  let title = 'Nodejs-Template '
  res.render('gpt', {
      title,
  });
});

// chatGPT('hiii')

async function chatGPT(text) {
  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: text }],
      }),
      headers: { "Content-Type": "application/json", Authorization: `Bearer ${config.openai.key}` },
    });

    const json = await response.json();
    console.log(`Token-> prompt: ${json.usage.prompt_tokens} reply: ${json.usage.completion_tokens} total: ${json.usage.total_tokens}`);
    console.log(json.choices[0].message.content.replace(/^\s+/, ""));
  } catch (error) {
    console.error(error);
  }
}

module.exports = router;
