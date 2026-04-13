import RestaurantGroupedMenuItemList from "./RestaurantGroupedMenuItemList";

const RestaurantGroupedMenu = ({ data, isActive, onShow }) => {
  // console.log(data);

  return (
    <div className="grouped-menu-card">
      <span className="accordion-span" onClick={onShow}>
        <h2 id="card-title">{`${data?.title} (${data?.itemCards.length})`}</h2>
        <span>⬇️</span>
      </span>

      {isActive ? (
        data?.itemCards?.map((item) => (
          <RestaurantGroupedMenuItemList key={item.card.info.id} data={item} />
        ))
      ) : (
        <></>
      )}
    </div>
  );
};

export default RestaurantGroupedMenu;
