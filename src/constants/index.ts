export const rustConst = {
  name: "main.rs",
  code: `fn main() {
      println!("Hello, World!");
  }`,
};

export const solidityConst = {
  name: "main.sol",
  code: `// SPDX-License-Identifier: MIT\npragma solidity ^0.8.0;\n\ncontract SimpleStorage {\n    uint256 public storedData;\n\n    function set(uint256 x) public {\n        storedData = x;\n    }\n\n    function get() public view returns (uint256) {\n        return storedData;\n    }\n\n    function sayHello() public pure returns (string memory) {\n        return "Hello, World!";\n    }\n}`,
};

export const motokoConst = {
  name: "Main.mo",
  code: `actor {
      public query func hello() : async Text {
          "Hello, World!"
      };
  };`,
};
