
export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#fbfaec] flex flex-col items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        {/* Big 404 */}
        <div className="text-[150px] md:text-[200px] font-bold text-[#1db584] leading-none mb-4">
          404
        </div>
        
        {/* Silly message */}
        <h1 className="text-3xl md:text-4xl font-bold text-[#1e1d1b] mb-4">
          Uh oh! Looks like you took a wrong turn...
        </h1>
      </div>
    </div>
  );
}