import ItemCard from "../ItemCard/ItemCard.jsx";
import "./ItemList.css";

const ItemList = ({ items = [] }) => {
    // 👆 items por defecto es un array, así nunca rompe el .map()

    return (
        <section className="itemList">
            {items.map((item) => (
                <ItemCard key={item.id} item={item} />
            ))}
        </section>
    );
};

export default ItemList;
