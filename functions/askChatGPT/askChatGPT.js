const axios = require('axios')

exports.handler = async function (event, context) {
  const body = JSON.parse(event.body)
  const question = body.question

  const openaiApiKey = process.env.OPENAI_API_KEY

  try {
    const response = await axios.post(
      'https://api.openai.com/v1/engines/davinci-codex/completions',
      {
        prompt: question,
        max_tokens: 100,
      },
      {
        headers: {
          Authorization: `Bearer ${openaiApiKey}`,
        },
      },
    )

    return {
      statusCode: 200,
      body: JSON.stringify({ answer: response.data.choices[0].text.trim() }),
    }
  } catch (error) {
    console.error(error)
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Something went wrong!' }),
    }
  }
}
