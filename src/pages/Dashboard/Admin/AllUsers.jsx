import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import useAuth from "../../../hooks/useAuth";
import UsersTable from "../../../components/Table/UsersTable";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { user } = useAuth();

  const {
    data: users = [],
    refetch,
    isLoading,
  } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const { data } = await axiosSecure(`/all-users`);
      return data;
    },
  });

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table border border-lime-500">
          {/* head */}
          <thead className="h-16 bg-lime-300 text-[15px] text-center">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody className="text-center ">
            {users?.map((item, index) => (
              <UsersTable refetch={refetch} key={index} item={item} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AllUsers;
