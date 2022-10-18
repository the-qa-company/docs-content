import React from 'react';

//import ApiMetadata from "docusaurus-theme-openapi-docs/lib/types";
import ApiDemoPanel from "docusaurus-theme-openapi-docs/lib/theme/ApiDemoPanel"
import my from './api.json'

export default function Highlight() {
  console.log(my);
  var api = my; //as ApiMetadata[];
  console.log("here ",api[1].api);
  console.log(api);
  return (
    <ApiDemoPanel item={api[1].api} infoPath={'test'}/>
  )
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