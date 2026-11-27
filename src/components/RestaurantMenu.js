import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
const RestaurantMenu = () => {
  const { resId } = useParams();
  const resInfo = useRestaurantMenu(resId);
  if (resInfo === null) {
    return <Shimmer />;
  }
  const { name, cuisines, cloudinaryImageId, costForTwoMessage, avgRating } =
    resInfo?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  return (
    <div className="mx-auto max-w-4xl px-6 pb-20 pt-8 max-md:px-4">
      {/* hero banner with the restaurant name laid over the photo */}
      <div className="relative overflow-hidden rounded-3xl border border-line shadow-card">
        <img
          className="h-72 w-full object-cover [filter:saturate(1.15)_contrast(1.05)_brightness(0.8)] max-md:h-52"
          alt={name}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_1600,h_640,c_fill/" +
            cloudinaryImageId
          }
        />
        <div className="absolute inset-0 bg-linear-to-t from-night via-night/40 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-6 max-md:p-4">
          <h1 className="font-display text-3xl text-ink max-md:text-xl">{name}</h1>
          <p className="mt-1.5 text-sm font-medium text-ink-mid">
            {cuisines.join(", ")}
          </p>
        </div>
      </div>

      {/* rating + cost badges */}
      <div className="mt-5 flex flex-wrap items-center gap-3">
        <span className="inline-flex items-center gap-1.5 rounded-full border border-violet/40 bg-violet/15 px-4 py-1.5 text-sm font-bold text-ink">
          <span className="text-sakura">★</span>
          {avgRating}
        </span>
        <span className="ticket bg-linear-to-r from-sakura to-violet py-1.5 pl-5 pr-4 text-sm font-extrabold text-night">
          {costForTwoMessage}
        </span>
      </div>

      <div className="mt-12">
        <h2 className="mb-6 flex items-center gap-4 font-display text-xl uppercase tracking-wider text-ink">
          <span className="text-sakura">✦</span>
          Menu
          <span className="h-px flex-1 bg-linear-to-r from-sakura/60 via-violet/40 to-transparent" />
        </h2>

        <ul className="flex flex-col gap-4">
          {itemCards.map((item) => (
            <li key={item.card.info.id}>
              <div className="flex items-center justify-between gap-5 rounded-2xl border border-line bg-panel p-4 transition duration-300 hover:-translate-y-0.5 hover:border-sakura/60 hover:shadow-card-hover max-md:gap-3 max-md:p-3">
                <div className="min-w-0 flex-1">
                  <h3 className="text-[15px] font-semibold text-ink">
                    {item.card.info.name}
                  </h3>
                  <p className="ticket mt-2.5 inline-block bg-linear-to-r from-sakura to-violet py-1 pl-4 pr-3 text-[13px] font-extrabold text-night">
                    {item.card.info.price}
                  </p>
                </div>

                {item.card.info.imageId ? (
                  <img
                    className="size-24 shrink-0 rounded-xl object-cover max-md:size-20"
                    alt={item.card.info.name}
                    src={
                      "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_300,h_300,c_fit/" +
                      item.card.info.imageId
                    }
                  />
                ) : (
                  <div className="flex size-24 shrink-0 items-center justify-center rounded-xl bg-panel-raised text-2xl text-sakura/60 max-md:size-20">
                    ✦
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default RestaurantMenu;