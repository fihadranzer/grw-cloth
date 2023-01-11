import { Fragment, useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { ReactComponent as Crownlogo } from "../../asset/crown.svg";
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import "../navigation/navigation.style.scss";

const Navigation = () => {
  const { currentUser , setCurrentUser} = useContext(UserContext);
  const signOutHandler = async()=>{
    await signOutUser();
    setCurrentUser(null)

  }
  console.log(currentUser);
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

          {currentUser ? (
            <span className="nav-link" onClick={signOutHandler}>
              SIGN OUT
            </span>
          ) : (
            <Link className="nav-link" to="/auth">
              Sign In
            </Link>
          )}
        </div>
      </div>

      <Outlet />
    </Fragment>
  );
};

export default Navigation;
