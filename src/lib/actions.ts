"use server";

import axios from "axios";

const rapidAPIKey = process.env.X_RAPIDAPI_KEY;
const rapidAPIHost = process.env.X_RAPIDAPI_HOST;

export const rustCompilar = async () => {
  const options = {
    method: "POST",
    url: "https://online-code-compiler.p.rapidapi.com/v1/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": rapidAPIKey,
      "X-RapidAPI-Host": rapidAPIHost,
    },
    data: {
      language: "python3",
      version: "latest",
      code: 'print("Hello, World!");',
      input: null,
    },
  };

  const response = await axios.request(options);
  console.log("response", response);

  try {
    const response = await axios.request(options);
    console.log(response.data);
    return response.data; // Return the response data
  } catch (error) {
    console.error(error);
    throw error; // Rethrow the error to be handled by the caller
  }
};
