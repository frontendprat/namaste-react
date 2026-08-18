import { useState } from "react";
import RestaurantCard from "./RestaurantCard";
// import listOfRestaurants from "../utils/mockData";

// State variables

let listOfRestaurants;
const Body = () => {
  // Below is array destructuring
  const [listOfRestaurants, setListofRestaurants] = useState([
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334475",
        name: "KFC",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "kfc-btm-layout-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
        locality: "2nd Stage",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        promoted: true,
        avgRating: 3.8,
        totalRatings: 500,
        new: false,
      },
    },
    {
      type: "restaurant",
      data: {
        type: "F",
        id: "334479",
        name: "Morroco Brocolli",
        uuid: "eaed0e3b-7c0e-4367-8f59-f41d309fb93a",
        city: "1",
        area: "BTM Layout",
        totalRatingsString: "500+ ratings",
        cloudinaryImageId: "bdcd233971b7c81bf77e1fa4471280eb",
        cuisines: ["Burgers", "Biryani", "American", "Snacks", "Fast Food"],
        tags: [],
        costForTwo: 40000,
        costForTwoString: "₹400 FOR TWO",
        deliveryTime: 36,
        minDeliveryTime: 36,
        maxDeliveryTime: 36,
        slaString: "36 MINS",
        lastMileTravel: 3.5,
        slugs: {
          restaurant: "kfc-btm-layout-btm",
          city: "bangalore",
        },
        cityState: "1",
        address:
          "KFC restaurants, 942,SV Tower, 16th Main, BTM 2nd Stage ,560076",
        locality: "2nd Stage",
        parentId: 547,
        unserviceable: false,
        veg: false,
        select: false,
        favorite: false,
        tradeCampaignHeaders: [],
        chain: [],
        longDistanceEnabled: 0,
        rainMode: "NONE",
        thirdPartyAddress: false,
        thirdPartyVendor: "",
        adTrackingID:
          "cid=6109309~p=1~eid=00000186-a341-249f-05e6-09c500910178",
        lastMileTravelString: "3.5 kms",
        hasSurge: false,
        promoted: true,
        avgRating: 3.9,
        totalRatings: 500,
        new: false,
      },
    },
  ]);
  return (
    <div className="body">
      <div className="filter-block">
        <div className="search">Search</div>
        <div className="filter-btn-container">
          <button
            className="filter-btn"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 3.8,
              );
              console.log(listOfRestaurants);
              setListofRestaurants(filteredList);
            }}
          >
            Top Rated Restraunts
          </button>
        </div>
      </div>

      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.data.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
