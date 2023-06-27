import React, { useEffect } from 'react';

const iframeCode = `
<iframe
  src='https://dev.qanswer.ai/widget?custom=%7B%22initialMsg%22%3A%22%22%7D&qaSystem=%7B%22name%22%3A%22qanswer-doc%22%2C%22owner%22%3A%22admin%22%2C%22type%22%3A%22text%22%7D'
  frameBorder='0'
  style='border:none;overflow:hidden;position:fixed;right:16px;bottom:16px;z-index:999;'
  allowtransparency='true'
  onload='let iframe=this;window.addEventListener("message",function(e){if(e.data.type==="resize"){iframe.style.width=e.data.width;iframe.style.height=e.data.height;}});'
/>
`

// Default implementation, that you can customize
export default function Root({ children }) {
  return (
    <>
      {children}
      <div
        style={{ position: 'absolute' }}
        dangerouslySetInnerHTML={{ __html: iframeCode }}
      />
    </>
  )
}