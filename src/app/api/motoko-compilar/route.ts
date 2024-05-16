import mo from "motoko";

export const POST = async (req: Request) => {
  try {
    const { code } = await req.json();
    mo.write("Main.mo", code);
    const output = mo.run("Main.mo");

    return new Response(
      JSON.stringify({
        output: output,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.error("Error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to compile the code",
      }),
      {
        status: 500,
      }
    );
  }
};
