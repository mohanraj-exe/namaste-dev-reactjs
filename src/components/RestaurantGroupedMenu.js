import RestaurantGroupedMenuItemList from "./RestaurantGroupedMenuItemList";

const RestaurantGroupedMenu = ({ data, isActive, onShow }) => {
  // console.log(data);

  return (
    <div className="grouped-menu-card">
      <span className="accordion-span" onClick={onShow}>
        <h2 id="card-title">{data.card.card.title}</h2>
        <span>⬇️</span>
      </span>

      {isActive ? data.card.card.itemCards?.map((item) => (
        <RestaurantGroupedMenuItemList key={item.card.info.id} data={item} />
      )) : <></>}
    </div>
  );
};

export default RestaurantGroupedMenu;
