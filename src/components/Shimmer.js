const Shimmer = () => {
  return (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 max-md:px-4">
      {/* skeleton of the search bar + filter button row */}
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="relative h-[52px] w-full max-w-md overflow-hidden rounded-full border border-line bg-panel">
          <div className="shimmer-sweep absolute inset-0 motion-reduce:animate-none" />
        </div>
        <div className="relative h-10 w-48 overflow-hidden rounded-full border border-line bg-panel">
          <div className="shimmer-sweep absolute inset-0 motion-reduce:animate-none" />
        </div>
      </div>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7 max-md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] max-md:gap-4">
        {Array(8)
          .fill("")
          .map((_, index) => (
            <div
              className="relative overflow-hidden rounded-2xl border border-line bg-panel"
              key={index}
            >
              {/* image area */}
              <div className="h-40 bg-panel-raised max-md:h-32" />

              {/* text rows: name, cuisines, rating + price */}
              <div className="space-y-3 px-4 pb-4 pt-4">
                <div className="h-4 w-3/4 rounded bg-panel-raised" />
                <div className="h-3 w-1/2 rounded bg-panel-raised" />
                <div className="flex gap-2 pt-1">
                  <div className="h-5 w-14 rounded-full bg-panel-raised" />
                  <div className="h-5 w-20 rounded bg-panel-raised" />
                </div>
              </div>

              {/* the pink-violet sweep, laid over the whole card */}
              <div className="shimmer-sweep absolute inset-0 motion-reduce:animate-none" />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Shimmer;
