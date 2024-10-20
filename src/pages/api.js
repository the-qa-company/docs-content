import React, { Suspense } from "react";
import Layout from "@theme/Layout";
import BrowserOnly from "@docusaurus/BrowserOnly";

const LazyStoplight = React.lazy(() => import("../components/Spotlight"));

export default function Api() {
  return (
    <Layout title="API example">
      <BrowserOnly>
        {() => (
          <Suspense>
            <LazyStoplight apiDescriptionUrl="https://backend.dev.qanswer.ai/v3/api-docs/qanswer" />
          </Suspense>
        )}
      </BrowserOnly>
    </Layout>
  );
}