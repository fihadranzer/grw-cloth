import { Fragment } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../asset/crown.svg";
import "../navigation/navigation.style.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <Crownlogo className="logo" />
        </Link>

        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/hooks">
            Hooks
          </Link>
          <Link className="nav-link" to="/auth">
            Sign In
          </Link>
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
