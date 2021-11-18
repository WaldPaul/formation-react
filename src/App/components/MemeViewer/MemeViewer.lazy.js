import React, { lazy, Suspense } from 'react';

const LazyMemeViewer = lazy(() => import('./MemeViewer'));

const MemeViewer = props => (
  <Suspense fallback={null}>
    <LazyMemeViewer {...props} />
  </Suspense>
);

export default MemeViewer;
