import { useParams } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";

const Reviews = () => {
  const { user } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { id } = useParams();
  const [rating, setRating] = useState(1);

  const { data: product, isLoading } = useQuery({
    queryKey: ["product", id],
    queryFn: async () => {
      const { data } = await axiosPublic(`/product/${id}`);
      return data;
    },
  });

  if (isLoading) return <p>Loading product details...</p>;

  if (!product) return <p>Product not found.</p>;

  const { product_name } = product;

  const handleReviews = async (event) => {
    event.preventDefault();

    const review = event.target.review.value;
    const reviewPost = {
      name: user?.displayName,
      email: user?.email,
      review,
      rating,
      product_id: id,
    };
    try {
      const { data } = await axiosPublic.post(`/review`, reviewPost);
      if (data.insertedId) {
        toast.success("Review Submit");
      }
      console.log(data.insertedId);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-semibold uppercase">
        Review for {product_name}
      </h1>
      <div className="h-40 border my-4 flex items-center justify-center text-gray-500">
        Coming soon...
      </div>
      <div className="flex flex-col gap-8">
        <div>
          <h2 className="text-2xl font-semibold">Add A Review</h2>
          <p>
            Your email address will not be published. Required fields are marked
            *
          </p>
        </div>
        <div>
          <p className="text-xl">Your Rating *</p>
          <div className="rating my-3">
            {[1, 2, 3, 4, 5]?.map((star) => (
              <input
                key={star}
                type="radio"
                name="rating"
                className="mask mask-star-2 bg-orange-400"
                aria-label={`${star} star`}
                value={star}
                onChange={(e) => setRating(Number(e.target.value))}
              />
            ))}
          </div>

          <form
            onSubmit={handleReviews}
            className="flex flex-col justify-between gap-8 mt-12"
          >
            <textarea
              name="review"
              rows={6}
              required
              className="textarea w-full textarea-bordered"
              placeholder="Your Review *"
            ></textarea>

            <div className="md:flex items-center space-y-4 md:space-y-0 gap-8">
              <input
                type="text"
                name="name"
                required
                readOnly
                placeholder="Your Name *"
                id=""
                defaultValue={user?.displayName}
                className="w-full input h-14 p-4"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email *"
                id=""
                defaultValue={user?.email}
                readOnly
                required
                className="w-full input h-14 p-4"
              />
            </div>
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                className="checkbox checkbox-sm"
                required
              />
              <label>
                Save my name, email, and website in this browser for the next
                time I comment.
              </label>
            </div>
            <button className="btn mt-5 bg-[#E38443] text-white" type="submit">
              Review
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
