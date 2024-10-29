// import RestaurantCard from "./RestaurantCard.js";
// import { useEffect, useState, useContext } from "react";
// import Shimmer from "./Shimmer.js";
// import { SWIGGY_URL } from "../utils/constants.js";
// import { Link } from "react-router-dom";
// import useOnlineStatus from "../utils/useOnlineStatus.js";
// import Usercontext from "../utils/Usercontext.js";
// import Whatsonyourmind from "./whatsonyourmind.js";

// const Body = () => {
//   const [listofrestaurants, setListofrestaurants] = useState([]);
//   const [filteredRestaurant, setfilteredRestaurant] = useState([]);
//   const [carouselData, setCarouselData] = useState(null);
//   const [searchText, setSearchText] = useState("");

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const fetchData = async () => {
//     const data = await fetch(SWIGGY_URL);
//     const json = await data.json();

//     setListofrestaurants(
//       json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );
//     setfilteredRestaurant(
//       json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
//     );

//     setCarouselData(
//       json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
//     );
//   };
//   const onlinestatus = useOnlineStatus();
//   if (onlinestatus === false)
//     return (
//       <h1>
//         Looks like you are Offline!!! Please check your internet connection
//       </h1>
//     );

//   const { loggedInUser, setUserName } = useContext(Usercontext);

//   return listofrestaurants.length === 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">

//         {/* this is top rated button */}
//         {/* <div className="search m-4 p-4 flex items-center">
//           <button
//             className="px-4 py-2 bg-gray-100 m-4 rounded-lg"
//             onClick={() => {
//               const filteredList = listofrestaurants.filter(
//                 (res) => res.info.avgRating > 4
//               );
//               setListofrestaurants(filteredList);
//             }}
//           >
//             Top Rated Restaurant
//           </button>
//         </div> */}
//         <div className="search m-4 p-6 flex items-center">
//           <label>UserName:</label>
//           <input
//             className="border border-black p-2"
//             value={loggedInUser}
//             onChange={(e) => {
//               setUserName(e.target.value);
//             }}
//           ></input>
//         </div>
//       </div>
//       <Whatsonyourmind data={carouselData} />
//       {/* <div className="res-container">
//         {listofrestaurants.map((res) => (
//           <RestaurantCard key={res.info.id} resobj={res} />
//         ))}
//       </div> */}
//       <div className="mb-2 text-center">
//         {" "}
//         <h1 className=" text-lg sm:text-2xl font-extrabold ">
//           Restaurants with online food delievery in Banglore{" "}
//         </h1>
//         <div className="filter flex">
//         {/* this is search */}
//         <div className="search m-4 p-4">
//           <input
//             type="text"
//             className="border border-solid border-black"
//             value={searchText}
//             onChange={(e) => setSearchText(e.target.value)}
//           ></input>
//           <button
//             className="px-4 py-1 bg-green-100 m-4 rounded-lg"
//             onClick={() => {
//               // console.log(searchText);
//               const filteredRestaurant = listofrestaurants.filter((res) =>
//                 res.info.name.toLowerCase().includes(searchText.toLowerCase())
//               );
//               setfilteredRestaurant(filteredRestaurant);
//             }}
//           >
//             Search
//           </button>
//         </div>

//       </div>

//       <div className="restro-cards">
//         {listofrestaurants && listofrestaurants.length > 0 ? (
//           filteredRestaurant.map((res) => (
//             <Link to={"/restaurants/" + res.info.id}>
//               <RestaurantCard key={res.info.id} resobj={res} />
//             </Link>
//           ))
//         ) : (
//           <p>No restaurants available</p>
//         )}
//       </div>
//     </div>
//   );
// };
// export default Body;
import RestaurantCard from "./RestaurantCard.js";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer.js";
import { SWIGGY_URL } from "../utils/constants.js";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus.js";
import Usercontext from "../utils/Usercontext.js";
import Whatsonyourmind from "./whatsonyourmind.js";

const Body = () => {
  const [listofrestaurants, setListofrestaurants] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [carouselData, setCarouselData] = useState(null);
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(SWIGGY_URL);
    const json = await data.json();

    setListofrestaurants(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json.data.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setCarouselData(
      json?.data?.cards[0]?.card?.card?.gridElements?.infoWithStyle?.info
    );
  };

  const onlinestatus = useOnlineStatus();
  if (!onlinestatus) {
    return (
      <h1>
        Looks like you are Offline! Please check your internet connection.
      </h1>
    );
  }

  const { loggedInUser, setUserName } = useContext(Usercontext);

  return listofrestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search m-4 p-6 flex items-center">
        <label>UserName:</label>
        <input
          className="border border-black p-2 ml-2"
          value={loggedInUser}
          onChange={(e) => {
            setUserName(e.target.value);
          }}
        />
      </div> */}

      <Whatsonyourmind data={carouselData} />

      <div className="mb-2 text-center">
        <h1 className="text-lg sm:text-2xl font-extrabold">
          Restaurants with online food delivery in Bangalore
        </h1>
        <div className="filter flex justify-center">
          <div className="search m-4 p-4">
            <input
              type="text"
              className="w-full sm:w-64 px-4 py-2 border border-gray-300 rounded-full shadow-sm focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 placeholder-gray-500 transition duration-300 ease-in-out"
              placeholder="Search for restaurants..."
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
            />
            <button
              className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300 ease-in-out"
              onClick={() => {
                const filteredList = listofrestaurants.filter((res) =>
                  res.info.name.toLowerCase().includes(searchText.toLowerCase())
                );
                setfilteredRestaurant(filteredList);
              }}
            >
              Search
            </button>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              Above 4.2
            </button>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              Low Price
            </button>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              Medium Price
            </button>
            <button className="px-4 py-2 border border-orange-500 text-orange-500 font-semibold rounded-full hover:bg-orange-500 hover:text-white transition duration-300">
              High Price
            </button>
          </div>
        </div>
      </div>

      <div className="restro-cards grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredRestaurant.length > 0 ? (
          filteredRestaurant.map((res) => (
            <Link to={"/restaurants/" + res.info.id} key={res.info.id}>
              <RestaurantCard resobj={res} />
            </Link>
          ))
        ) : (
          <p>No restaurants available</p>
        )}
      </div>
    </div>
  );
};

export default Body;
