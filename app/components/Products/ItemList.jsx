import { useProductContext } from "@/app/context/Product/ProductContext";
import ItemCard from "./ItemCard";
import Pagination from "./Pagination";
const ItemList = ({ handleAddToCart, items }) => {
  const {
    // Pagination
    itemsPerPage,
    paginatedItems,
    handlePageChange,
    currentPage,
  } = useProductContext();

  return (
    <>
      <section className="mt-12  items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map((item) => (
            <ItemCard
              key={item.id}
              name={item.name}
              description={item.description}
              price={item.price}
              handleAddToCart={() => handleAddToCart(item)}
            />
          ))}
        </div>

        {/* <Pagination
          itemsPerPage={itemsPerPage}
          totalItems={items.length}
          handlePageChange={handlePageChange}
          currentPage={currentPage}
        /> */}
      </section>
    </>
  );
};

export default ItemList;
