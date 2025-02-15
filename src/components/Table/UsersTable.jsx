import toast from "react-hot-toast";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const UsersTable = ({ item, refetch }) => {
  console.log(item);
  const axiosSecure = useAxiosSecure();
  const { name, email, role, image } = item;

  const handelRole = async (value) => {
    if (value === role) {
      return toast.error(`Already Added ${role}`);
    }
    try {
      await axiosSecure.patch(`/user/${email}`, { role: value });
      refetch();
      toast.success("Role Updated Successfully");
    } catch (error) {
      toast.error(error.message);
    }
  };
  return (
    <tr>
      <td>
        <div className="avatar ">
          <div className="mask mask-hexagon  w-12">
            <img src={image} alt={name} />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{role}</td>

      <th>
        <select
          onChange={(e) => handelRole(e.target.value)}
          defaultValue={"default"}
          className="select   w-full max-w-40"
        >
          <option disabled value={"default"}>
            Add role
          </option>
          <option>Moderator</option>
          <option>Admin</option>
        </select>
      </th>
    </tr>
  );
};

export default UsersTable;
