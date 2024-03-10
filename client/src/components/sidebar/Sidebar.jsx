// Importing styles from the sidebar.scss file
import "./sidebar.scss";

// Importing material icons from the MUI library
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import FeedbackIcon from "@mui/icons-material/Feedback";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import DynamicFormIcon from "@mui/icons-material/DynamicForm";
import ViewListIcon from "@mui/icons-material/ViewList";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SportsGymnasticsIcon from "@mui/icons-material/SportsGymnastics";

// Importing the Link and useNavigate hooks from the React Router library
import { Link, useNavigate } from "react-router-dom";

// Component that renders the sidebar with navigation options
const Sidebar = (props) => {
  // get access to the navigate method from the router to handle navigation
  const history = useNavigate();
  const navigate = useNavigate();
  
  // function to navigate back to previous page
  const Back = () => {
  navigate(-1);
  };
  
  // function to delete the user login and token from local storage and redirect to login page
  const deleteLT = (e) => {
  e.preventDefault();
  localStorage.removeItem("login_status");
  localStorage.removeItem("token_status");
  history("/");
  };

  return (
    <>

{/* This component is the sidebar that appears on the left side of the app for an admin user.
It contains links to various pages that the admin can access, including a registration form for new users,
a form for adding new classes, pages for viewing user details and class details, a page for viewing feedback details,
and a link to the user's profile page. It also contains a logout link that deletes the user's login and token status from localStorage
and navigates the user to the home page. */}

      {props.mode === "admin" && (
        <div className="sidebar1">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link
                to="/admin/registration-form"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <DynamicFormIcon className="icon" />
                  <span>User Registration</span>
                </li>
              </Link>
              <Link
                to={"/admin/addclass-form"}
                style={{ textDecoration: "none" }}
              >
                <li>
                  <DynamicFormIcon className="icon" />
                  <span>Add Classes</span>
                </li>
              </Link>
              <Link to="/admin/view-users" style={{ textDecoration: "none" }}>
                <li>
                  <ViewListIcon className="icon" />
                  <span>User Details</span>
                </li>
              </Link>
              <Link to="/admin/view-class" style={{ textDecoration: "none" }}>
                <li>
                  <ViewListIcon className="icon" />
                  <span>Class Details</span>
                </li>
              </Link>
              <Link
                to="/admin/view-feedbacks"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FeedbackIcon className="icon" />
                  <span>Feedback Details</span>
                </li>
              </Link>
              <Link to="/profile" style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

{/* This component is the sidebar that appears on the left side of the app for an trainer user.
It contains links to various pages that the trainer can access booking details and class details, a page for add feedback, and a link to the user's profile page. It also contains a logout link that deletes the user's login and token status from localStorage and navigates the user to the home page. */}

      {props.mode === "trainer" && (
        <div className="sidebar2">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link
                to="/trainer/view-booking"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <ViewListIcon className="icon" />
                  <span>Booking Details</span>
                </li>
              </Link>
              <Link
                to={"/trainer/feedback-form"}
                style={{ textDecoration: "none" }}
              >
                {" "}
                <li>
                  <DynamicFormIcon className="icon" />
                  <span>Add Feedback</span>
                </li>
              </Link>
              <Link to={"/profile"} style={{ textDecoration: "none" }}>
                {" "}
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

      {/* This component is the sidebar that appears on the left side of the app for an customer user.
It contains links to various pages that the customer can access booking details and class details,book classes, a page for add feedback, and a link to the user's profile page. It also contains a logout link that deletes the user's login and token status from localStorage and navigates the user to the home page. */}

      {props.mode === "customer" && (
        <div className="sidebar3">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link
                to="/customer/view-classes"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <ViewListIcon className="icon" />
                  <span>Classes</span>
                </li>
              </Link>
              <Link
                to="/customer/my-booking"
                style={{ textDecoration: "none" }}
              >
                <li>
                  <ViewListIcon className="icon" />
                  <span>My Booking's</span>
                </li>
              </Link>
              <Link
                to={"/customer/feedback-form"}
                style={{ textDecoration: "none" }}
              >
                <li>
                  <FeedbackIcon className="icon" />
                  <span>Add Feedback</span>
                </li>
              </Link>
              <Link to={"/profile"} style={{ textDecoration: "none" }}>
                <li>
                  <PersonOutlineIcon className="icon" />
                  <span>Profile</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}

{/* The sidebar contains a logo and two clickable items: "Go Back" and "Logout".

The Link component is used to create clickable links to navigate to different pages. The ArrowBackIcon and ExitToAppIcon components are used to display icons next to the corresponding clickable items.

The Back function is likely a callback function that is passed as a prop to the component and is executed when the "Go Back" item is clicked. The deleteLT function is likely another callback function that is executed when the "Logout" item is clicked. */}

      {props.mode === "profile" && (
        <div className="sidebar">
          <div className="top">
            <Link style={{ textDecoration: "none" }}>
              <span className="logo">
                <SportsGymnasticsIcon className="logoicon" />
                <span>GymBook</span>
              </span>
            </Link>
          </div>

          <hr />

          <div className="center">
            <ul>
              <Link onClick={Back} style={{ textDecoration: "none" }}>
                <li>
                  <ArrowBackIcon className="icon" />
                  <span>Go Back</span>
                </li>
              </Link>

              <Link onClick={deleteLT} style={{ textDecoration: "none" }}>
                <li>
                  <ExitToAppIcon className="icon" />
                  <span>Logout</span>
                </li>
              </Link>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
