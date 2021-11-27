import { BrowserRouter,Route,Switch } from 'react-router-dom';
import Navbar from './Pages/Shared/Header/Navbar';
import Home from './Pages/Home/Home';
import Packages from './Pages/Packages/Packages';
import Footer from './Pages/Shared/Footer/Footer';
import CustomerReview from './Pages/CustomerReview/CustomerReview';
import Login from './Pages/Login/Login/Login'
import Signup from './Pages/Login/Signup/Signup';
import AuthProvider from './contexts/AuthProvider';
import AddPackages from './Pages/AddPackages/AddPackages'
import Booking from './Pages/Booking/Booking';
import ManagePackages from './Pages/ManagePackages/ManagePackages';
import OrderedPackages from './Pages/OrderedPackages/OrderedPackages';
import MyOrders from './Pages/MyOrders/MyOrders';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import AboutUs from './Pages/AboutUS/AboutUs';
import NotFound from './Pages/NotFound/NotFound';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
        <Navbar/>
        
          <Switch>
              <Route exact path='/'>
                <Home></Home>
              </Route>
              <Route path='/home'>
                <Home></Home>
              </Route>
              <Route path='/customersReviews'>
                <CustomerReview></CustomerReview>
              </Route>

              <Route exact path='/packages'>
                <Packages></Packages>
              </Route>

              <PrivateRoute exact path='/packages/details/:packageId'>
                <Booking></Booking>
              </PrivateRoute>

              <Route path='/addpackage'>
                <AddPackages></AddPackages>
              </Route>

              <PrivateRoute path='/managepackages'>
                <ManagePackages></ManagePackages>
              </PrivateRoute>
              <PrivateRoute path='/myorder'>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute path='/allorders'>
                <OrderedPackages></OrderedPackages>
              </PrivateRoute>

              <Route path="/login">
                  <Login></Login>
              </Route>
              <Route path="/about">
                  <AboutUs></AboutUs>
              </Route>

              <Route path="/signup">
                  <Signup></Signup>
              </Route>
              <Route path="*">
                 <NotFound></NotFound>
              </Route>
          </Switch>
        
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;
