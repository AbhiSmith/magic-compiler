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

  //   try {
  //     const response = await axios.request(options);
  //     console.log(response.data);
  //     return response.data; // Return the response data
  //   } catch (error) {
  //     console.error(error);
  //     throw error; // Rethrow the error to be handled by the caller
  //   }
};

// const onClickRun = async () => {
//   const url = "https://online-code-compiler.p.rapidapi.com/v1/";
//   const options: any = {
//     method: "POST",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "6bd38dd780msh92352b1381a2149p180405jsnb3e99c71010f",
//       "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
//     },
//     body: {
//       language: "python3",
//       version: "latest",
//       code: 'print("Hello, World!");',
//       input: null,
//     },
//   };

//   try {
//     const response = await fetch(url, options);
//     const result = await response.text();
//     console.log(result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// useEffect(() => {
// const fecther = async () => {
//   const options = {
//     method: "POST",
//     url: "https://online-code-compiler.p.rapidapi.com/v1/",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key":
//         "6bd38dd780msh92352b1381a2149p180405jsnb3e99c71010f",
//       "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
//     },
//     data: {
//       language: "python3",
//       version: "latest",
//       code: 'print("Hello, World!");',
//       input: null,
//     },
//   };
//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
// fecther();
// }, []);

// const fecther = async () => {
//   const options = {
//     method: "POST",
//     url: "https://online-code-compiler.p.rapidapi.com/v1/",
//     headers: {
//       "content-type": "application/json",
//       "X-RapidAPI-Key": "6bd38dd780msh92352b1381a2149p180405jsnb3e99c71010f",
//       "X-RapidAPI-Host": "online-code-compiler.p.rapidapi.com",
//     },
//     data: {
//       language: "python3",
//       version: "latest",
//       code: 'print("Hello, World!");',
//       input: null,
//     },
//   };

//   try {
//     const response = await axios.request(options);
//     console.log(response.data);
//   } catch (error) {
//     console.error(error);
//   }
// };
