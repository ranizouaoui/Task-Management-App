// components/ui/LoadingDots.tsx

const LoadingDots = () => {
  return (
  
    <div className="flex gap-2">
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-700"></div>
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-700"></div>
    <div className="w-5 h-5 rounded-full animate-pulse bg-blue-700"></div>
    </div>
      
  );
};

export default LoadingDots;
