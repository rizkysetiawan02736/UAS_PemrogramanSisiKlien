import "./sidebar.scss";
import { Link, useNavigate } from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import PersonIcon from '@mui/icons-material/Person';
import AllInboxIcon from '@mui/icons-material/AllInbox';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import FaceIcon from '@mui/icons-material/Face';
import MeetingRoomIcon from '@mui/icons-material/MeetingRoom';
import CategoryIcon from '@mui/icons-material/Category';
import { signOut } from "firebase/auth";
import { auth } from "../../firebase";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Sidebar = () => {

  const {dispatch: authDispatch}= useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    signOut(auth).then(() => { authDispatch({type:"LOGOUT"});
    navigate("/login");
      // Sign-out successful.
    }).catch((error) => { console.error("Logout error: ", error);
      // An error happened.
    });
  }
  return (
    <div className="sidebar">
  <div className="top">
    <Link to="/">
      <span className="logo">Store</span>
    </Link>
  </div>
  <hr />
  <div className="center">
    <ul>
      <p className="title">MAIN</p>
      <Link to="/">
      <li>
        <HomeIcon className="icon"/>
        <span>Dashboard</span>
      </li>
      </Link>
      
      <p className="title">LIST</p>
      <Link to="/users">
        <li>
        <PersonIcon className="icon"/>
          <span>Users</span>
        </li>
      </Link>
      <Link to="/products">
        <li>
          <AllInboxIcon className="icon"/>  
          <span>Products</span>
        </li>
      </Link>
      <Link to="/products">
      <li>
        <BorderColorIcon className="icon" />
        <span>Orders</span>
      </li>
      </Link>
      <Link to="/categories">
      <li>
        <CategoryIcon className="icon" />
        <span>Categories</span>
      </li>
      </Link>
      <p className="title">USER</p>
      <li>
        <FaceIcon className="icon"/>
        <span>Profile</span>
      </li>
      <li onClick={handleLogout}>
        < MeetingRoomIcon className="icon"/>
        <span>Logout</span>
      </li>
    </ul>
  </div>
  <div className="bottom">
    <div className="colorOption"></div>
    <div className="colorOption"></div>
  </div>
</div>
  );
};

export default Sidebar;