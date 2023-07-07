import React, { useEffect } from 'react';

const iframeCode = `
<style>
  @media print {
    #qanswer-widget {
      display: none !important;
    }
  }
</style>
<iframe
  id='qanswer-widget'
  src='https://app.qanswer.ai/widget?custom=%7B%22initialMsg%22%3A%22%22%7D&qaSystem=%7B%22name%22%3A%22QAnswer%20-%20Documentation%22%2C%22owner%22%3A%22demo%22%2C%22type%22%3A%22text%22%7D'
  frameBorder='0'
  style='border:none;overflow:hidden;display:none;position:fixed;right:16px;bottom:16px;z-index:9999;'
  allowtransparency='true'
  onload='let iframe=this;window.addEventListener("message",function(t){"resize"===t.data.type&&(iframe.style.width=t.data.width||iframe.style.width,iframe.style.height=t.data.height||iframe.style.height,iframe.style.right=t.data.right||iframe.style.right,iframe.style.bottom=t.data.bottom||iframe.style.bottom,iframe.style.display="block")});'
/>
`

// Default implementation, that you can customize
export default function Root({ children }) {

  useEffect(() => {
    const div = document.createElement('div')
    div.innerHTML = iframeCode
    document.body.appendChild(div)
  }, [])

  return <>{children}</>
}