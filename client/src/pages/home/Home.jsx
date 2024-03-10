import Sidebar from "../../components/sidebar/Sidebar";
import "./home.scss";

const Home = (props) => {
  return (
    <div className="home">
      <Sidebar mode={props.mode}/>
      <div className="homeContainer">
        <div className="listContainer">
          <div className="listTitle">
            {/* /**
             * Renders a header based on the mode passed in as a prop.
             * @param {{string}} props.mode - The mode of the dashboard (admin, trainer, or customer).
             * @returns The appropriate header for the given mode.
             */}
            {props.mode === "admin" && <h1>Admin Dashboard</h1>}
            {props.mode === "trainer" && <h1>Trainer Dashboard</h1>}
            {props.mode === "customer" && <h1>Customer Dashboard</h1>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
