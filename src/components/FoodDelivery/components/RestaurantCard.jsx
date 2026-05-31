export const RestaurantCard = ({ data }) => {
  const { cuisines, name, avgRatingString, costForTwo, cloudinaryImageId } =
    data;

  const cf_endpoint =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

  return (
    <div className="restaurant-card">
      <img
        className="restaurant-image"
        alt={`thumbnail-${name}`}
        src={cf_endpoint + cloudinaryImageId}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwo}</h4>
      <h4>{avgRatingString} Stars</h4>
    </div>
  );
};
