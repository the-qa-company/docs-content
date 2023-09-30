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
  src="https://app.qanswer.ai/widget?kb=QAnswer%20-%20Documentation&amp;user=demo&amp;type=text" 
  frameborder="0" style="border:none;overflow:hidden;display:none;position:fixed;right:16px;bottom:16px;z-index:9999;" allowtransparency="true" onload="let iframe=this;window.addEventListener(&quot;message&quot;,function(t){&quot;resize&quot;===t.data.type&amp;&amp;(iframe.style.width=t.data.width||iframe.style.width,iframe.style.height=t.data.height||iframe.style.height,iframe.style.right=t.data.right||iframe.style.right,iframe.style.bottom=t.data.bottom||iframe.style.bottom,iframe.style.display=&quot;block&quot;)});">
</iframe>
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
