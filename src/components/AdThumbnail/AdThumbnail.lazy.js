import React, { lazy, Suspense } from 'react';

const LazyAdThumbnail = lazy(() => import('./AdThumbnail'));

const AdThumbnail = props => (
  <Suspense fallback={null}>
    <LazyAdThumbnail {...props} />
  </Suspense>
);

export default AdThumbnail;
