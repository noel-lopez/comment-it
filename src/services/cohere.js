//Make this a custom hook?
import axios from "axios";

const VITE_COHERE_API_KEY = import.meta.env.VITE_COHERE_API_KEY;

export const getCohereResult = async (comment) => {
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
      max_tokens: 20,
      return_likelihoods: "NONE",
      truncate: "END",
      prompt: comment,
    },
  };

  return axios
    .request(options)
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.error(error);
    });
};
