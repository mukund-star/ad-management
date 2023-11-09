import React, { lazy, Suspense } from 'react';

const LazyTextAddForm = lazy(() => import('./TextAddForm'));

const TextAddForm = props => (
  <Suspense fallback={null}>
    <LazyTextAddForm {...props} />
  </Suspense>
);

export default TextAddForm;
