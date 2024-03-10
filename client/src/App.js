import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// admin
import RegistrationForm from "./pages/form/registrationform/registrationForm";
import AddClassForm from "./pages/form/addclass/AddClass";
import ViewUsers from "./components/table/Admin View Users/ViewUsers";
import ViewFeedback from "./components/table/Admin View Feedbacks/viewFeedbacks";

// customer &&  trainer
import ViewBooking from "./components/table/Trainer View Booking/viewBooking";
import FeedbackFormC from "./pages/form/feedback Form customer/feedbackForm";
import FeedbackFormT from "./pages/form/feedback Form trainer/feedbackForm";
import ViewClasses from "./components/table/view Classes/viewClasses";
import MyBooking from "./components/table/customer my booking/myBooking";

import Profile from "./pages/Profile/Profile";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Login />} />
            <Route path="profile" element={<Profile />} />

            {/* /**
             * Defines the routes for the admin section of the application.
             * @returns A set of routes for the admin section of the application.
             */}
            <Route path="admin">
              <Route exact index element={<Home mode="admin" />} />
              <Route
                exact
                path="registration-form"
                element={<RegistrationForm />}
              />
              <Route exact path="addclass-form" element={<AddClassForm />} />
              <Route exact path="view-users" element={<ViewUsers />} />
              <Route
                exact
                path="view-class"
                element={<ViewClasses mode="admin" />}
              />
              <Route exact path="view-feedbacks" element={<ViewFeedback />} />
            </Route>

            {/* /**
             * Defines the routes for the trainer mode of the application.
             * @returns A JSX element that defines the routes for the trainer mode.
             */}
            <Route path="trainer">
              <Route exact index element={<Home mode="trainer" />} />
              <Route exact path="view-booking" element={<ViewBooking />} />
              <Route exact path="feedback-form" element={<FeedbackFormT />} />
            </Route>

            {/* /**
             * Defines the routes for the customer section of the application.
             * @returns A set of routes for the customer section of the application.
             */}
            <Route path="customer">
              <Route exact index element={<Home mode="customer" />} />
              <Route
                exact
                path="view-classes"
                element={<ViewClasses mode="customer" />}
              />
              <Route exact path="my-booking" element={<MyBooking />} />
              <Route exact path="feedback-form" element={<FeedbackFormC />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
