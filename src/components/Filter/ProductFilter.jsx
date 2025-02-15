const ProductFilter = ({ setFilter }) => {
  return (
    <div>
      <select
        onChange={(e) => setFilter(e.target.value)}
        defaultValue="default"
        className="p-5 w-62"
      >
        <option className="" disabled={true} value={"default"}>
          Default sorting
        </option>
        <option value={"desc"}>Sort by price: low to high</option>
        <option value={"asc"}>Sort by price: high to low</option>
      </select>
    </div>
  );
};

export default ProductFilter;
