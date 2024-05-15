import mo from "motoko";

export const GET = async (res: Response) => {
  try {
    // Create a Motoko script in a virtual file system
    mo.write(
      "Main.mo",
      `
    actor {
      public query func hello() : async Text {
        "Hello, world!"
      };
    };
  `
    );

    // Generate the corresponding Candid interface
    // console.log(mo.run("Main.mo"));
    const output = mo.run("Main.mo");

    // mo.eval(`
    //   print "Hello Motoko"
    // `);

    return new Response(
      JSON.stringify({
        output: output,
      }),
      {
        status: 200,
      }
    );
  } catch (error) {}
};
