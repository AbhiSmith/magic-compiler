export const POST = async (req: Request, res: Response) => {
  const { program } = await req.json();

  return new Response(
    JSON.stringify({
      program: program,
    })
  );
};
