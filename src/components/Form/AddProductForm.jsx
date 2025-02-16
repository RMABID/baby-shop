import useAuth from "../../hooks/useAuth";

const AddProductForm = ({ handleAddProduct }) => {
  const { user } = useAuth();

  return (
    <div className="">
      <form
        onSubmit={handleAddProduct}
        className="grid grid-cols-1 font-Garamond md:grid-cols-2 font-raleway-font px-4 md:px-36 mt-8  gap-6"
      >
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Name :
          </label>
          <input
            required
            type="text"
            name="product_name"
            placeholder="Enter your product name"
            className="input input-bordered w-full"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">Category :</label>
          <select
            defaultValue="default"
            className="select w-full"
            name="category"
          >
            <option disabled={true} value={"default"}>
              Select Category
            </option>
            <option>Doll</option>
            <option>Bead</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Brand :</label>
          <select defaultValue="default" className="select w-full" name="brand">
            <option disabled={true} value={"default"}>
              Select Brand
            </option>
            <option>Top</option>
            <option>Medium</option>
            <option>Other</option>
          </select>
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Weight :</label>
          <input
            required
            type="number"
            name="weight"
            placeholder="Enter Product Price "
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Price :</label>
          <input
            required
            type="number"
            name="price"
            placeholder="Enter Product Price "
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Quantity (ps) :</label>
          <input
            required
            type="number"
            name="quantity"
            placeholder="Enter Product Price "
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">Owner Name :</label>
          <input
            required
            type="text"
            name="owner_name"
            defaultValue={user?.displayName}
            readOnly
            placeholder="Enter "
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Owner Email :
          </label>
          <input
            required
            type="email"
            defaultValue={user?.email}
            readOnly
            name="owner_email"
            placeholder="Enter Your Email"
            className="input input-bordered w-full"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-lg font-medium text-gray-700">
            Description :
          </label>
          <textarea
            rows={4}
            required
            placeholder="please add Description"
            name="description"
            className="w-full  mt-1 p-2 border rounded-md focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label className="block text-lg font-medium mb-2">
            Product Image :
          </label>

          <input type="file" className="file-input" required name="image1" />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Image :
          </label>

          <input type="file" className="file-input" required name="image2" />
        </div>
        <div>
          <label className="block text-lg font-medium mb-2">
            Product Image :
          </label>

          <input type="file" className="file-input" required name="image3" />
        </div>
        <div className="md:col-span-2 text-xl font-rancho-font 2 text-center">
          <button
            type="submit"
            className="btn  bg-lime-500 text-white font-agu font-light text-xl hover:bg-secondary_primary hover:text-primary w-full "
          >
            Add Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductForm;
