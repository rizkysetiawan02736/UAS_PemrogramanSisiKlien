import "./list.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Datatable from "../../components/datatable/Datatable";
import Widget from "../../components/widget/Widget";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";

const List = ({columns}) => {
  const [userCount, setUserCount] = useState(0);
  const [productCount, setProductCount] = useState(0);
  const [categoryCount, setCategoryCount] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const userSnapshot = await getDocs(collection(db, "users"));
        const productSnapshot = await getDocs(collection(db, "products"));
        const categorySnapshot = await getDocs(collection(db, "categories"));

        setUserCount(userSnapshot.size);
        setProductCount(productSnapshot.size);
        setCategoryCount(categorySnapshot.size);
      } catch (error) {
        console.log("Error getting documents:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="list">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user" amount={userCount} diff={20} />
          <Widget type="product" amount={productCount} diff={10} />
          <Widget type="category" amount={categoryCount} diff={5} />
        </div>
        <Datatable columns={columns} />   
      </div>
    </div>
  );
};

export default List;
