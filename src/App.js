import { createContext, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AboutUs from "./Components/About/AboutUs";
import AddCourses from "./Components/Admin/AddCourses";
import AddTrainerEmail from "./Components/Admin/AddTrainerEmail";
import AddTrainers from "./Components/Admin/AddTrainers";
import ManageService from "./Components/Admin/ManageService";
import OrderList from "./Components/Admin/OrderList";
import CourseReview from "./Components/CourseReview/CourseReview";
import About from "./Components/Home/About/About";
import Blog from "./Components/Home/Blog/Blog";
import Courses from "./Components/Home/Courses/Courses";
import Footer from "./Components/Home/Footer/Footer";
import Header from "./Components/Home/Header/Header";
import Home from "./Components/Home/Home/Home";
import Trainee from "./Components/Home/Trainee/Trainee";
import InDetails from "./Components/InDetails/InDetails";
import InterestedCourse from "./Components/InterestedCourseList/InterestedCourse";
import Login from "./Components/Login/Login";
import Orders from "./Components/Orders/Orders";
import ProceedPayment from "./Components/Payment/ProceedPayment";
import PrivateRoute from "./Components/PrivateRoute/PrivateRoute";

export const CartContext = createContext();
export const UserContext = createContext();
export const CourseContext = createContext();
export const TrainerContext = createContext();
export const OldUserContext = createContext();

function App() {
  const [cart, setCart] = useState([]);
  const [loggedInUser, setLoggedInUser] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isTrainer, setIsTrainer] = useState(false);
  const [user, setUser] = useState({
    isSignedIn: false,
    name: "",
    email: "",
    photo: "",
    error: "",
    success: false,
    phone: "",
  });

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <OldUserContext.Provider value={[user, setUser]}>
        <CartContext.Provider value={[cart, setCart]}>
          <CourseContext.Provider value={[courses, setCourses]}>
            <TrainerContext.Provider value={[isTrainer, setIsTrainer]}>
              <Router>
                <Switch>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="/home">
                    <Home />
                  </Route>
                  <Route path="/about">
                    <AboutUs />
                  </Route>

                  <Route path="/login">
                    <Login />
                  </Route>
                  <Route path="/blog">
                    <Header></Header>
                    <Blog></Blog>
                    <Footer></Footer>
                  </Route>
                  <Route path="/courses">
                    <Header></Header>
                    <Courses></Courses>
                    <Trainee></Trainee>
                    <Footer></Footer>
                  </Route>
                  <PrivateRoute path="/reviews">
                    <CourseReview />
                  </PrivateRoute>
                  <Route path="/details/:_id">
                    <InDetails />
                  </Route>
                  {isTrainer ? (
                    <PrivateRoute path="/dashboard">
                      <AddCourses />
                    </PrivateRoute>
                  ) : (
                    <PrivateRoute path="/dashboard">
                      <Orders />
                    </PrivateRoute>
                  )}
                  <PrivateRoute path="/addCourse">
                    <AddCourses />
                  </PrivateRoute>
                  <Route path="/courselist">
                    <InterestedCourse />
                  </Route>
                  <PrivateRoute path="/addTrainers">
                    <AddTrainers />
                  </PrivateRoute>
                  <PrivateRoute path="/trainer">
                    <AddTrainerEmail />
                  </PrivateRoute>
                  <PrivateRoute path="/manage">
                    <ManageService />
                  </PrivateRoute>
                  <PrivateRoute path="/orderList">
                    <OrderList />
                  </PrivateRoute>
                  <PrivateRoute path="/admit/payment/:_id">
                    <ProceedPayment />
                  </PrivateRoute>
                  <PrivateRoute path="/orders">
                    <Orders />
                  </PrivateRoute>
                </Switch>
              </Router>
            </TrainerContext.Provider>
          </CourseContext.Provider>
        </CartContext.Provider>
      </OldUserContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
