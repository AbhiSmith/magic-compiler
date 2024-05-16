import { JsonView, allExpanded, darkStyles } from "react-json-view-lite";
import "react-json-view-lite/dist/index.css";

const OutPutArea = ({ output }: { output: string }) => {
  return (
    <div>
      <JsonView
        data={output ? JSON.parse(output) : "// Output"}
        shouldExpandNode={allExpanded}
        style={darkStyles}
      />
    </div>
  );
};

export default OutPutArea;

const json = {
  a: 1,
  b: "example",
};
