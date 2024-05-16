import fs from "fs";
import path from "path";
import solc from "solc";
// import solc from "types-solc";

export const POST = async (req: Request, res: Response) => {
  try {
    const { code } = await req.json();
    const input = {
      language: "Solidity",
      sources: {
        "hello.sol": {
          content: code,
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

    if (output.errors && output.errors.length > 0) {
      const errorMessages = output.errors.map(
        (error: any) => error.formattedMessage
      );
      return new Response(JSON.stringify({ errors: errorMessages }), {
        status: 400,
      });
    }

    const contractName = Object.keys(output.contracts["hello.sol"])[0];
    const compiledContract = output.contracts["hello.sol"][contractName];
    const bytecode = compiledContract.evm.bytecode.object;
    const abi = compiledContract.abi;

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
