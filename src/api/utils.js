import axios from "axios";
import useAxiosSecure from "../hooks/useAxiosSecure";

const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);

  const { data } = await axios.post(
    `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMG_API_KEY}`,
    formData
  );
  return data.data.display_url;
};

export default imageUpload;

export const saveUser = async (user) => {
  const axiosSecure = useAxiosSecure();
  console.log(user);
  const userInFo = {
    name: user?.displayName,
    image: user?.photoURL,
    email: user?.email,
  };
  await axiosSecure.post(`/users`, userInFo);
};
// if (currentUser?.email) {
//   const userInFo = {
//     name: currentUser?.displayName,
//     email: currentUser?.email,
//   };
//   await axiosPublic.post("/users", userInFo);
// }
