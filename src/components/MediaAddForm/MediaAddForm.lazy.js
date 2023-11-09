import React, { lazy, Suspense } from 'react';

const LazyMediaAddForm = lazy(() => import('./MediaAddForm'));

const MediaAddForm = props => (
  <Suspense fallback={null}>
    <LazyMediaAddForm {...props} />
  </Suspense>
);

export default MediaAddForm;
