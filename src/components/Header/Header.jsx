const Header = () => {
  let Links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT US",
      link: "/about",
    },
  ];

  return (
    <div className="flex w-full fixed top-0 bg-white border-b-2 border-base-gray h-10">
      <div className="fixed left-0 right-0 p-2">
        <span> Logo</span>
      </div>
      <div className="fixed right-0 p-2">
        <ul className="flex ">
          {Links.map((Link) => {
            return (
              <li className="ml-2" key={Link.name}>
                <a href={Link.link}>{Link.name}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;
