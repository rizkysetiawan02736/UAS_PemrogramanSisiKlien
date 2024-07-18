import "./single.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Chart from "../../components/chart/Chart";
import Datatable from "../../components/datatable/Datatable";
import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const Single = ({ columns }) => {
  const location = useLocation();
  const id = location.pathname.split('/')[2];
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const docRef = doc(db, "users", id); // Asumsi koleksi bernama "users"
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        } else {
          console.log("No such document!");
        }
      } catch (error) {
        console.log("Error getting document:", error);
      }
    };

    fetchData();
  }, [id]);

  return (
    <div className="single">
      <Sidebar />
      <div className="singleContainer">
        <Navbar />
        <div className="top">
          <div className="left">
            <div className="editButton">Edit</div>
            <h1 className="title">Information</h1>
            <div className="item">
              <img
                src={userData?.imgUrl || "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"}
                alt=""
                className="itemImg"
              />
              <div className="details">
                <h1 className="itemTitle">{userData?.name || "Jane Doe"}</h1>
                <div className="detailItem">
                  <span className="itemKey">ID:</span>
                  <span className="itemValue">{id}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Phone:</span>
                  <span className="itemValue">{userData?.phone || "+1 2345 67 89"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Address:</span>
                  <span className="itemValue">{userData?.address || "Elton St. 234 Garden Yd. NewYork"}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">{userData?.country || "USA"}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="right">
            <Chart aspect={3 / 1} type="order" />
          </div>
        </div>
        <div className="bottom">
          <h1 className="title">Last Transactions</h1>
          <Datatable columns={columns} />
        </div>
      </div>
    </div>
  );
};

export default Single;
