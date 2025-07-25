import { Images, navLists } from '../constants';

const Navbar = () => {
  return (
    <header className="w-full p-5 flex justify-center items-center">
      <nav className=" flex w-full mx-auto relative max-w-[1120px]">
        <img src={Images.appleImg} alt="Apple Logo" width={18} height={18} />

        <div className="flex flex-1 justify-center max-sm:hidden ">
          {navLists.map((item) => {
            return (
              <div
                key={item}
                className="px-5 text-sm cursor-pointer  hover:text-white text-gray-400 transition-all"
              >
                <p>{item}</p>
              </div>
            );
          })}
        </div>
      </nav>
      <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
        <img src={Images.searchImg} alt="search logo" width={18} height={18} />
        <img src={Images.bagImg} alt="bag logo" width={18} height={18} />
      </div>
    </header>
  );
};

export default Navbar;
