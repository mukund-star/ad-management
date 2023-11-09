import React, { lazy, Suspense } from 'react';

const LazyTableAndGraphWidget = lazy(() => import('./TableAndGraphWidget'));

const TableAndGraphWidget = props => (
  <Suspense fallback={null}>
    <LazyTableAndGraphWidget {...props} />
  </Suspense>
);

export default TableAndGraphWidget;
