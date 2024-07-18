import "./etalase.scss";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import Tabelbaru from "../../components/tabelbaru/Tabelbaru";
import Widget from "../../components/widget/Widget";

const Etalase = () => {
  return (
    <div className="etalase">
      <Sidebar />
      <div className="listContainer">
        <Navbar />
        <div className="widgets">
          <Widget type="user"/>
          <Widget type="order"/>
          <Widget type="earning"/>
          <Widget type="balance"/>
        </div>
        <Tabelbaru/>
      </div>
    </div>
  );
};

export default Etalase;