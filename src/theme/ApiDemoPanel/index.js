// @ts-check
import React from "react";
import sdk from "@paloaltonetworks/postman-collection";
import Curl from "@theme/ApiDemoPanel/Curl";
import MethodEndpoint from "@theme/ApiDemoPanel/MethodEndpoint";
import Request from "@theme/ApiDemoPanel/Request";
import Response from "@theme/ApiDemoPanel/Response";
import SecuritySchemes from "@theme/ApiDemoPanel/SecuritySchemes";
function ApiDemoPanel({ item, infoPath }) {
  console.log(item)
  console.log(infoPath);

  const postman = new sdk.Request(item.postman);
  const { path, method } = item;
  return (
    <div>
      <MethodEndpoint method={method} path={path} />
      <SecuritySchemes infoPath={infoPath} />
      <Request item={item} />
      <Response />
      <Curl postman={postman} codeSamples={item["x-code-samples"] ?? []} />
    </div>
  );
}
export default ApiDemoPanel;
