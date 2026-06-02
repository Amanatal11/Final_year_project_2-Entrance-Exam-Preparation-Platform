import React from 'react';

const baseClass =
  'animate-pulse rounded-md bg-surface border border-outline/10';

export const Skeleton = ({ className = '' }) => (
  <div className={`${baseClass} ${className}`} aria-hidden="true" />
);

export const SkeletonCard = ({ className = '' }) => (
  <div className={`rounded-xl border border-outline/10 bg-card p-4 sm:p-6 ${className}`} aria-hidden="true">
    <div className="flex items-start gap-4">
      <Skeleton className="h-10 w-10 rounded-lg shrink-0" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-2/3" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
    <div className="mt-4 space-y-2">
      <Skeleton className="h-3 w-full" />
      <Skeleton className="h-3 w-5/6" />
    </div>
  </div>
);

export default Skeleton;
