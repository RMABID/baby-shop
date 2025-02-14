import React from "react";
import AddProductForm from "../../../components/Form/AddProductForm";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const AddProduct = () => {
  const axiosSecure = useAxiosSecure();
  const handleAddProduct = async (event) => {
    event.preventDefault();
    const form = event.target;
    const product_name = form.product_name.value;
    const category = form.category.value;
    const weight = form.weight.value;
    const brand = form.brand.value;
    const price = form.price.value;
    const owner_name = form.owner_name.value;
    const owner_email = form.owner_email.value;
    const description = form.description.value;
    const image1 = form.image1.value;
    const image2 = form.image2.value;
    const image3 = form.image3.value;

    const newProduct = {
      product_name,
      category,
      brand,
      price,
      weight,
      owner_email,
      owner_name,
      description,
      image: [image1, image2, image3],
    };

    try {
      const result = await axiosSecure.post("/add-product", newProduct);
      if (result.data.insertedId) {
        toast.success("Product Successfully Add");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <AddProductForm handleAddProduct={handleAddProduct} />
    </div>
  );
};

export default AddProduct;
