const RestaurantCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData?.info;

  return (
    <div className="group h-full overflow-hidden rounded-2xl border border-line bg-panel shadow-card transition duration-300 hover:-translate-y-1.5 hover:border-sakura/60 hover:shadow-card-hover">
      <div className="relative h-40 overflow-hidden max-md:h-32">
        <img
          className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
          alt={name}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
        />
        {/* fades the photo into the card body */}
        <div className="absolute inset-0 bg-linear-to-b from-transparent from-50% to-panel" />

        {/* delivery time chip floating on the photo */}
        <span className="absolute bottom-2.5 right-2.5 rounded-full bg-night/80 px-2.5 py-1 text-[11px] font-bold text-ink backdrop-blur-sm">
          <span className="text-sakura">⏱</span>{" "}
          {resData?.info.sla?.deliveryTime} mins
        </span>
      </div>

      <div className="px-4 pb-4 pt-3">
        <h3 className="truncate font-display text-[15px] text-ink">{name}</h3>
        <h4 className="mt-1 truncate text-[13px] font-medium text-ink-low">
          {cuisines.join(", ")}
        </h4>

        <div className="mt-3 flex items-center gap-2">
          <span className="inline-flex items-center gap-1 rounded-full border border-violet/40 bg-violet/15 px-2.5 py-0.5 text-xs font-bold text-ink">
            <span className="text-sakura">★</span>
            {avgRating}
          </span>
          <span className="ticket whitespace-nowrap bg-linear-to-r from-sakura to-violet py-0.5 pl-3 pr-2.5 text-[11px] font-extrabold text-night">
            {costForTwo}
          </span>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;

// default export
