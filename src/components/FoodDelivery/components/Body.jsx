import { useState, useEffect } from "react";
import { Shimmer } from "./Shimmer";
import { RestaurantCard } from "./RestaurantCard";

export const Body = () => {
  const [swiggyData, setSwiggyData] = useState([]);
  const [dataFromSearch, setDataFromSearch] = useState([]);

  //useState - Whenever the state of the variable changes, the whole component re-renders

  useEffect(() => {
    actualSwiggyData();
  }, []);

  const actualSwiggyData = async () => {
    const data = await fetch(
      "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING",
    );
    const json = await data.json();
    setSwiggyData(json);
    setDataFromSearch(json);
  };

  const [searchText, setSearchText] = useState("");

  return swiggyData?.length < 1 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search-div">
          <input
            type="text"
            className="search"
            value={searchText}
            onChange={(text) => {
              setSearchText(text.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              if (searchText === "") {
                setDataFromSearch(swiggyData);
              } else {
                const searchedRestaurants =
                  swiggyData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.filter(
                    (resp) => {
                      return resp.info.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase());
                    },
                  );
                const finalData = JSON.parse(JSON.stringify(swiggyData));
                finalData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants =
                  searchedRestaurants;
                setDataFromSearch(finalData);
              }
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredData =
              swiggyData?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.filter(
                (x) => {
                  return Number(x?.info?.avgRating) > 4.5;
                },
              );
            const finalData = JSON.parse(JSON.stringify(swiggyData));
            finalData.data.cards[1].card.card.gridElements.infoWithStyle.restaurants =
              filteredData;
            setDataFromSearch(finalData);
          }}
        >
          {`Top rated restaurants (> 4.5 stars)`}
        </button>
      </div>
      <div className="restaurant-component">
        {dataFromSearch?.data?.cards?.[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.map(
          (response) => (
            <RestaurantCard data={response?.info} key={response?.info?.id} />
          ),
        )}
      </div>
    </div>
  );
};
