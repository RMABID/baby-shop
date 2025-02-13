import bear from "../../assets/image/cate doll.png";

const NewCollection = () => {
  return (
    <div>
      <div>
        <h2 className="text-4xl text-center">NEW COLLECTION</h2>
        <p className="text-center md:w-3/6 mx-auto my-4 px-4 lg:w-4/12">
          Discover our carefully curated new collection of baby products,
          designed to provide comfort, safety, and style for your little one.
        </p>
      </div>
      <div className="grid md:grid-cols-3 border-[#F7F3F0] justify-center items-center my-12 border-t border-b">
        <div
          className="flex flex-col px-10 lg:px-16
             overflow-hidden  group cursor-pointer py-14 w-full items-start gap-4"
        >
          <img
            className="w-full group-hover:rounded-full p-4  transition-all bg-[#F7F3F0]  rounded-md"
            src={bear}
            alt=""
          />
          <div className="flex relative flex-col items-start leading-4 space-y-2">
            <p className="text-lg uppercase">other</p>
            <h3 className="text-xl font-medium">Baby Grey Bear</h3>

            <p className="absolute -translate-y-1  group-hover:translate-y-28 mt-20 duration-500 transition-all text-[#E38443] uppercase">
              $30.00
            </p>
            <p className="absolute translate-y-28  group-hover:-translate-y-1 mt-20 duration-500 transition-all text-[#E38443] uppercase">
              Add to Card
            </p>
          </div>
        </div>
        <div
          className="flex flex-col px-10 lg:px-16
             overflow-hidden md:border-x border-[#F7F3F0]  group cursor-pointer py-14 w-full items-start gap-4"
        >
          <img
            className="w-full group-hover:rounded-full p-4  transition-all bg-[#F7F3F0]  rounded-md"
            src={bear}
            alt=""
          />
          <div className="flex relative flex-col items-start leading-4 space-y-2">
            <p className="text-lg uppercase">other</p>
            <h3 className="text-xl font-medium">Baby Grey Bear</h3>

            <p className="absolute -translate-y-1  group-hover:translate-y-28 mt-20 duration-500 transition-all text-[#E38443] uppercase">
              $30.00
            </p>
            <p className="absolute translate-y-28  group-hover:-translate-y-1 mt-20 duration-500 transition-all text-[#E38443] uppercase">
              Add to Card
            </p>
          </div>
        </div>
        <div
          className="flex flex-col px-10 lg:px-16
             overflow-hidden  group cursor-pointer py-14 w-full items-start gap-4"
        >
          <img
            className="w-full group-hover:rounded-full p-4  transition-all bg-[#F7F3F0]  rounded-md"
            src={bear}
            alt=""
          />
          <div className="flex relative flex-col items-start leading-4 space-y-2">
            <p className="text-lg uppercase">other</p>
            <h3 className="text-xl font-medium">Baby Grey Bear</h3>

            <p className="absolute -translate-y-1  group-hover:translate-y-28 mt-20 duration-500 transition-all text-[#E38443] uppercase">
              $30.00
            </p>
            <p className="absolute translate-y-28  group-hover:-translate-y-1 mt-20 duration-500 transition-all text-[#E38443] uppercase">
              Add to Card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCollection;
