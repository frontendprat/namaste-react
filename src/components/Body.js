import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  // State variables
  // Array destructuring
  const [listOfRestaurants, setListofRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();

    // Optional chaining
    setListofRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
    setFilteredRestaurants(
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants,
    );
  };
  const onlineStatus = useOnlineStatus();
  if (onlineStatus == false)
    return (
      <div className="mx-auto mt-32 flex max-w-md flex-col items-center gap-3 px-6 text-center">
        <span className="text-4xl text-sakura">✦</span>
        <h1 className="text-gradient font-display text-2xl uppercase tracking-wide">
          Looks like you are offline!
        </h1>
        <p className="text-sm text-ink-mid">
          Check your connection and we'll bring the menu back.
        </p>
      </div>
    );
  // Conditional rendering using ternary operator
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-8 max-md:px-4">
      <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
        <div className="flex w-full max-w-md items-center gap-2.5 rounded-full border border-line bg-panel py-1.5 pl-5 pr-1.5 transition focus-within:border-sakura focus-within:shadow-glow">
          <span className="text-lg text-sakura">⌕</span>
          <input
            placeholder="Search for restaurants/food"
            type="text"
            className="min-w-0 flex-1 bg-transparent text-sm font-medium text-ink outline-none placeholder:text-ink-low"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="shrink-0 cursor-pointer rounded-full bg-linear-to-r from-sakura to-violet px-5 py-2.5 font-display text-[11px] uppercase tracking-wider text-night transition hover:brightness-110 active:scale-95"
            onClick={() => {
              const filteredRestaurants = listOfRestaurants.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase()),
              );
              setFilteredRestaurants(filteredRestaurants);
            }}
          >
            Search
          </button>
        </div>

        <button
          className="btn"
          onClick={() => {
            const filteredList = filteredRestaurants.filter(
              (res) => res.info.avgRating > 4.2,
            );
            setFilteredRestaurants(filteredList);
          }}
        >
          ✦ Top Rated Restaurants
        </button>
      </div>

      <h2 className="mb-5 flex items-baseline gap-3 font-display text-lg uppercase tracking-wider text-ink">
        Restaurants
        <span className="font-sans text-sm font-semibold normal-case tracking-normal text-ink-low">
          {filteredRestaurants.length} places
        </span>
      </h2>

      <div className="grid grid-cols-[repeat(auto-fill,minmax(250px,1fr))] gap-7 max-md:grid-cols-[repeat(auto-fill,minmax(160px,1fr))] max-md:gap-4">
        {filteredRestaurants.map((restaurant) => (
          <Link
            className="block"
            to={"restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
          >
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
