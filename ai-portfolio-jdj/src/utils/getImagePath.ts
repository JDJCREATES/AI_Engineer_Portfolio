export const getImagePath = (path: string): string => {
  // Remove /src prefix if it exists
  const cleanPath = path.replace(/^\/src/, '');
  
  // In production (GitHub Pages), use the base path
  if (import.meta.env.PROD) {
    return `/AI_Engineer_Portfolio${cleanPath}`;
  }
  
  // In development, use the path as-is
  return cleanPath;
};
