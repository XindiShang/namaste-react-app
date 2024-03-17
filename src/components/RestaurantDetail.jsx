import React from 'react';

const RestaurantDetail = () => {
  const fetchData = async () => {
    const response = await fetch('https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6105073&lng=77.1145653&restaurantId=453670&catalog_qa=undefined&submitAction=ENTER');
    const data = await response.json();
    console.log(data);
  }

  React.useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <h1>Restaurant Detail</h1>
      <p>Here you will find the details of the restaurant.</p>
    </div>
  );
}

export default RestaurantDetail;
