import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const AllReviews = ({ id }) => {
  const { setReviews } = useAuth();
  const axiosPublic = useAxiosPublic();
  const { data: reviews = [], isLoading } = useQuery({
    queryKey: ["all-reviews"],
    queryFn: async () => {
      const { data } = await axiosPublic(`/all-reviews/${id}`);

      setReviews(data);
      return data;
    },
  });

  return (
    <div className="md:grid grid-cols-2 gap-4">
      {reviews?.map((item, index) => (
        <div
          key={index}
          className="relative rounded-2xl bg-[#F7F3F0] p-4 shadow my-4 "
        >
          <div className="relative">
            <p className="text-lg tracking-tight text-slate-900">
              {item?.review}
            </p>
          </div>
          <div className="relative mt-6 flex items-center justify-between border-t border-slate-100 pt-6">
            <div>
              <div className="font-display text-base text-slate-900">
                {item?.name}
              </div>
            </div>
            <div className="overflow-hidden rounded-full ">
              <img
                alt=""
                className="h-14 w-14 object-cover"
                src={item?.image}
              />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllReviews;
