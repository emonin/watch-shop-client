import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import PrivateRoute from './components/PrivateRoute/PrivateRoute';
import Home from './Pages/Home/Home/Home';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Purchase from './Pages/Purchase/Purchase';
import AllWatches from './Pages/AllWatches/AllWatches/AllWatches';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import NotFound from './Pages/NotFound/NotFound';
import MyOrders from './Pages/MyOrders/MyOrders';
import Review from './Pages/Review/Review';
import Payment from './Pages/Payment/Payment';
import MakeAdmin from './Pages/MakeAdmin/MakeAdmin';
import AdminRoute from './components/AdminRoute/AdminRoute'
import ManageAllOrders from './Pages/ManageAllOrders/ManageAllOrders';

function App() {
  return (
    <div className="main-bg">
      <AuthProvider>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/allwatches">
              <AllWatches />
            </Route>
            <PrivateRoute path="/myorders">
              <MyOrders />
            </PrivateRoute>
            <PrivateRoute path="/payment">
              <Payment />
            </PrivateRoute>
            <PrivateRoute path="/review">
              <Review />
            </PrivateRoute>
            <AdminRoute path="/manage-orders">
              <ManageAllOrders />
            </AdminRoute>
            <AdminRoute path="/make-admin">
              <MakeAdmin />
            </AdminRoute>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <PrivateRoute path="/watches/:id">
              <Purchase />
            </PrivateRoute>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
          <Footer />
        </Router>
      </AuthProvider>
    </div >
  );
}

export default App;
