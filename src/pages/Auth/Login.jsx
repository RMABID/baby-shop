import { IoLogoGithub, IoLogoGoogle } from "react-icons/io";
import { FaFacebookF } from "react-icons/fa";
import { TbFidgetSpinner } from "react-icons/tb";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import login_img from "../../assets/image/cate doll.png";
import bg from "../../assets/image/banner 1.jpg";
import useAuth from "../../hooks/useAuth";
import { saveUser } from "../../api/utils";
// import { saveUser } from "../../api/utils";

const Login = () => {
  const { loading, signIn, loginGoogle } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location?.state?.from?.pathname || "/";

  // if (loading) return <LoadingSpinier />;

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;

    try {
      await signIn(email, password);
      navigate(from, { replace: true });
      toast.success("SuccessFully Login");
    } catch (error) {
      toast.error(error);
    }
  };
  const handleGoogleLogin = async () => {
    try {
      const data = await loginGoogle();
      await saveUser(data?.user);
      toast.success("SuccessFully Login");
      navigate(from, { replace: true });
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${bg})` }}
      className="bg-center bg-cover bg-no-repeat "
    >
      <div className="py-10 px-4">
        <div className="md:flex bg-white md:w-[960px] rounded-xl py-8 mx-auto justify-evenly shrink-0 shadow-2xl">
          <div className="text-center  lg:text-left">
            <img className=" w-full max-w-sm" src={login_img} alt="" />
            <Link
              to={"/"}
              className="text-center flex mt-10 justify-center btn w-40 mx-auto"
            >
              Back to Home
            </Link>
          </div>
          <div className=" w-full max-w-sm">
            <form onSubmit={handleLogin} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">Email</span>
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Type here"
                  className="input rounded-md input-bordered"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg font-medium">
                    Password
                  </span>
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  className="input rounded-md input-bordered"
                  required
                />
                <label className="label">
                  <Link href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </Link>
                </label>
              </div>

              <div className="form-control mt-6">
                <button className="btn w-full bg-[#c42fc9b3] text-white text-lg font-medium rounded-md">
                  {/* {loading ? (
                    <TbFidgetSpinner className="animate-spin m-auto" />
                  ) : (
                    "Login"
                  )} */}
                  Login
                </button>
              </div>
            </form>
            <p className="text-center text-[#D1A054] text-md font-medium">
              New here?{" "}
              <Link className="text-red-500" to={"/register"}>
                Create a New Account
              </Link>
            </p>
            <p className="text-center text-black my-2">Or sign in with</p>
            <div
              className="flex justify-center items-center gap-4 py-2
            "
            >
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <FaFacebookF />
              </p>
              <p
                onClick={handleGoogleLogin}
                className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm "
              >
                <IoLogoGoogle />
              </p>
              <p className="border hover:bg-[#D1A054] hover:scale-150 transition-all duration-500 ease-in-out hover:border-purple-500 hover:text-white cursor-pointer p-1 rounded-full border-black text-sm ">
                <IoLogoGithub />
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
