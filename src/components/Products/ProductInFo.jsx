import { NavLink } from "react-router-dom";

const ProductInFo = ({ id }) => {
  return (
    <div className="flex items-center gap-8 text-lg font-medium">
      <NavLink to={`/shop/${id}`}>Description</NavLink>
      <NavLink to={`/shop/${id}/additional-info`}>
        Additional information
      </NavLink>
      <NavLink to={`/shop/${id}/reviews`}>Reviews (1)</NavLink>
    </div>
  );
};

export default ProductInFo;
