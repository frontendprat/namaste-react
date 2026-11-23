import { useEffect, useState } from "react";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      " https://namastedev.com/api/v1/listRestaurantMenu/" + resId,
    );
    const json = await data.json();
    console.log(json);
    setResInfo(json.data);
  };
  return resInfo;
};

export default useRestaurantMenu;
