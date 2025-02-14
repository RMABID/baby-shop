import { MdOutlineNoteAdd } from "react-icons/md";
import MenuItem from "../MenuItem/MenuItem";
import { FaUsersCog } from "react-icons/fa";

const AdminMenu = () => {
  return (
    <div>
      <MenuItem
        text={"Add Product"}
        address={"/dashboard"}
        icon={MdOutlineNoteAdd}
      />
      <MenuItem text={"User"} address={"users"} icon={FaUsersCog} />
    </div>
  );
};

export default AdminMenu;
