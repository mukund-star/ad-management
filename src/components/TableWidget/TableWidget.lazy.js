import React, { lazy, Suspense } from 'react';

const LazyTableWidget = lazy(() => import('./TableWidget'));

const TableWidget = props => (
  <Suspense fallback={null}>
    <LazyTableWidget {...props} />
  </Suspense>
);

export default TableWidget;
