import axios from "axios";

const rapidAPIKey = process.env.X_RAPIDAPI_KEY;
const rapidAPIHost = process.env.X_RAPIDAPI_HOST;

export const POST = async (req: Request, res: Response) => {
  const { code } = await req.json();

  const options = {
    method: "POST",
    url: "https://online-code-compiler.p.rapidapi.com/v1/",
    headers: {
      "content-type": "application/json",
      "X-RapidAPI-Key": rapidAPIKey,
      "X-RapidAPI-Host": rapidAPIHost,
    },
    data: {
      language: "rust",
      version: "latest",
      code: code,
      input: null,
    },
  };
  try {
    const response = await axios.request(options);
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    return new Response("Something went worrong", { status: 500 });
  }
};
