
export const SkeletonCard = () => {
  
  return (
    <div className="p-6 rounded-2xl bg-gray-100 animate-pulse">
      <div className="h-12 w-12 rounded-full mb-4 bg-gray-300"></div>
      <div className="h-6 rounded mb-3 bg-gray-300"></div>
      <div className="h-4 rounded w-3/4 bg-gray-300"></div>
    </div>
  );
};

export const SkeletonText = ({ lines = 3 }) => {
  
  return (
    <div className="space-y-3 animate-pulse">
      {[...Array(lines)].map((_, i) => (
        <div
          key={i}
          className="h-4 rounded bg-gray-300"
          style={{ width: i === lines - 1 ? '60%' : '100%' }}
        ></div>
      ))}
    </div>
  );
};

export const SkeletonImage = () => {
  
  return (
    <div className="w-full h-64 rounded-2xl animate-pulse bg-gray-300">
      <div className="flex items-center justify-center h-full">
        <svg className="w-12 h-12 text-gray-400" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z" clipRule="evenodd" />
        </svg>
      </div>
    </div>
  );
};
