"use server";

import axios from "axios";

// const url = "https://online-code-compiler.p.rapidapi.com/v1/";

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

  try {
    const response = await axios.request(options);
    console.log(response.data);
    // return response.data;
  } catch (error) {
    console.error(error);
  }
};

// const axios = require('axios');

// const options = {
//   method: 'POST',
//   url: 'https://online-code-compiler.p.rapidapi.com/v1/',
//   headers: {
//     'content-type': 'application/json',
//     'X-RapidAPI-Key': '6bd38dd780msh92352b1381a2149p180405jsnb3e99c71010f',
//     'X-RapidAPI-Host': 'online-code-compiler.p.rapidapi.com'
//   },
//   data: {
//     language: 'python3',
//     version: 'latest',
//     code: 'print("Hello, World!");',
//     input: null
//   }
// };

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }
