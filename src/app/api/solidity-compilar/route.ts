import fs from "fs";
import path from "path";
import solc from "solc";
// import solc from "types-solc";

export const POST = async (req: Request, res: Response) => {
  try {
    const { textData } = await req.json();
    // console.log(textData);
    // Resolve the path to the Solidity file
    //   const helloPath = path.resolve(process.cwd(), "public", "temp", "hello.sol");

    // Read the Solidity source code from the file
    //   const source = fs.readFileSync(helloPath, "utf8");
    //   if (!source)
    //     return new Response(JSON.stringify({ Bytecode: "", ABI: "" }), {
    //       status: 200,
    //     });

    // Compile the Solidity code
    const input = {
      language: "Solidity",
      sources: {
        "hello.sol": {
          content: textData,
        },
      },
      settings: {
        outputSelection: {
          "*": {
            "*": ["*"],
          },
        },
      },
    };
    const output = JSON.parse(solc.compile(JSON.stringify(input)));

    // Check for compilation errors
    if (output.errors && output.errors.length > 0) {
      const errorMessages = output.errors.map(
        (error: any) => error.formattedMessage
      );
      //   console.error("Compilation errors:", errorMessages);
      return new Response(JSON.stringify({ errors: errorMessages }), {
        status: 400,
      });
    }

    // Extract the compiled contract's bytecode and ABI
    const contractName = Object.keys(output.contracts["hello.sol"])[0];
    const compiledContract = output.contracts["hello.sol"][contractName];
    const bytecode = compiledContract.evm.bytecode.object;
    const abi = compiledContract.abi;

    // Log the compiled output to the console
    //   console.log("Bytecode:", bytecode);
    //   console.log("ABI:", abi);
    return new Response(JSON.stringify({ Bytecode: bytecode, ABI: abi }), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("", {
      status: 200,
    });
  }
};
