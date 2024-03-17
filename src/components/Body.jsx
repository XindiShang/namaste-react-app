import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  // when state changes, component re-renders,
  // but it doesn't matter because react uses virtual dom
  // and it only updates the part which has changed to the real dom (a reconciliation process)
  const [searchText, setSearchText] = useState('');
  console.log('body rendered');

  useEffect(() => {
    fetchData();
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6105073&lng=77.1145653&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');

    const json = await data.json();
    console.log(json);

    const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

    console.log(restaurants);

    setRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  const onFilterClick = () => {
    const filteredRestaurants = restaurants.filter((res) => {
      return res?.info?.avgRating >= 4.5;
    });

    setFilteredRestaurants(filteredRestaurants);
  }

  const onResetClick = () => {
    setFilteredRestaurants(restaurants);
  }

  const onSearchTextChange = (e) => { 
    setSearchText(e.target.value);
  }

  const onSearchClick = () => { 
    const filteredRestaurants = restaurants.filter((res) => {
      return res?.info?.name.toLowerCase().includes(searchText.toLowerCase());
    });

    setFilteredRestaurants(filteredRestaurants);
  }

  if (!restaurants.length) return (
    <div className="body">
      <Shimmer />
    </div>

  );

  return (
    <div className="body">
      {/* <div className="search-container">
        <input type="text" placeholder="Search for restaurants" />
      </div> */}

      <div className="filter">
        <div className="search">
          <input className="search-box" type="text" placeholder="Search for restaurants" value={searchText} onChange={onSearchTextChange} />
          <button className="search-btn" onClick={onSearchClick}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={onFilterClick}
        >
          Top Rated Restaurants
        </button>
        <button
          className="filter-btn"
          onClick={onResetClick}
        >
          All Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {renderRestaurantList(filteredRestaurants)}
      </div>
    </div>
  );
}

const renderRestaurantList = (restaurants) => {
  return restaurants.map((res) => {
    return (
      <RestaurantCard
        key={res.info.id}
        data={res.info}
      />
    );
  });
}

export default Body;