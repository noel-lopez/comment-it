//Make this a custom hook?
import axios from "axios";

const VITE_COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY;

export const getCohereResult = async (comment) => {
  const commentTemplate =
    "Given the done code explanation, write a commit message that describes what the user have done in that code, as summarized as possible, using less than 50 characters. No sentence context needed. Begin with a verb like Add, Change, Fix, Remove, etc.\nCode explanation: ";
  const commentInput = commentTemplate + comment;
  const options = {
    method: "POST",
    url: "https://api.cohere.ai/generate",
    headers: {
      accept: "application/json",
      "Cohere-Version": "2022-12-06",
      "content-type": "application/json",
      authorization: `Bearer ${VITE_COHERE_API_KEY}`,
    },
    data: {
      model: "command-xlarge-nightly",
      max_tokens: 50,
      temperature: 0.3,
      k: 0,
      p: 0.75,
      frequency_penalty: 0,
      presence_penalty: 0,
      stop_sequences: [],
      return_likelihood: "NONE",
      prompt: commentInput,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data.generations[0].text;
    })
    .catch(function (error) {
      console.error(error);
    });
};
