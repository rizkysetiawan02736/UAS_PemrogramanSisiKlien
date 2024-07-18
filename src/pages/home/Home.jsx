import "./home.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Widget from "../../components/widget/Widget";
import Chart from "../../components/chart/Chart";
import { useState, useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";


const Home = () => {
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
    <div className="home">
      <Sidebar/>
      <div className="homeContainer">
        <Navbar/>  
        <div className="widgets">
          <Widget type="user" amount={userCount} diff={20} />
          <Widget type="product" amount={productCount} diff={10} />
          <Widget type="category" amount={categoryCount} diff={5} />
        </div>
        <div className="charts">
          <Chart type="order" aspect={2 / 1}/>
          <Chart type="earning" aspect={2 / 1}/>
        </div>
      </div>
    </div>
  );
};


export default Home;