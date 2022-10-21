import React from 'react';

//import ApiMetadata from "docusaurus-theme-openapi-docs/lib/types";
import ApiDemoPanel from "@theme/ApiDemoPanel"
import MethodEndpoint from "@theme/ApiDemoPanel/MethodEndpoint"
import my from './api.json'

export default function Highlight() {
  console.log(my);
  var api = my; //as ApiMetadata[];
  console.log("here ",api[1].api);
  console.log(api);
  const {
    path,
    method
  } = api[1].api;
  // return <div className={_stylesModule.default.apiDemoPanelContainer}>
  //     <_MethodEndpoint.default method={method} path={path} />

  return (
    <div>
    <MethodEndpoint method={method} path={path}></MethodEndpoint>
    <ApiDemoPanel item={api[1].api} infoPath={'test'}/>
    </div>
  )
  {/* return (
    <ApiDemoPanel item={api[0].api} infoPath={'test'}/>
  ) */}
  // return (
  //   <span
  //     style={{
  //       backgroundColor: 'blue',
  //       borderRadius: '2px',
  //       color: '#fff',
  //       padding: '0.2rem',
  //     }}>
  //     Hello
  //   </span>
  // );
}