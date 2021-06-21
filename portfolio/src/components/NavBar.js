import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

const NavBar = () => {
  return (
    <header className="bg-green-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inline-flex items-center py-6 px-3 mr-4 text-green-100 hover:text-blue-900 text-4xl font-bold font-font1 tracking-widest"
          >
            Tommy
          </NavLink>
          <NavLink
            to="/aboutme"
            exact
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-blue-900"
            activeClassName="text-green-100 bg-green-700"
          >
            About Me
          </NavLink>
          <NavLink
            to="/portfolio"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-blue-900"
            activeClassName="text-green-100 bg-green-700"
          >
            Portfolio
          </NavLink>
          <NavLink
            to="/contactme"
            className="inline-flex items-center py-3 px-3 my-6 rounded text-green-200 hover:text-blue-900"
            activeClassName="text-green-100 bg-green-700"
          >
            Contact Me
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://github.com/TommyWillen"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com/in/tommy-willen-12867b1b3/"
            className="mr-4"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
};

export default NavBar;
