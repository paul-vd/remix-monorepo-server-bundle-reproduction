import { test as TestA } from "~/acme-test";
import { test as TestB } from "~/acme-test/test.server";
import { acme as AcmeA } from "@acme/package-a";
import { acme as AcmeB } from "@acme/package-a/acme.server";

const TestWorkingRemoval = (props: { data?: any; description: string }) => {
  const result = props.data
    ? `❌ I did not remove the server code: ${props.data}`
    : "✅ I removed the server code";

  return (
    <div style={{ border: "1px dashed", padding: 20, marginBottom: 20 }}>
      <h3>
        <pre>import from "{props.description}"</pre>
      </h3>
      <p>{result}</p>
    </div>
  );
};

export default function Index() {
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <TestWorkingRemoval description={"~/acme-test"} data={TestA} />
      <TestWorkingRemoval
        description={"~/acme-test/test.server"}
        data={TestB}
      />
      <TestWorkingRemoval description={"@acme/package-a"} data={AcmeA} />
      <TestWorkingRemoval
        description={"@acme/package-a/acme.server"}
        data={AcmeB}
      />
    </div>
  );
}
