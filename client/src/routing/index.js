import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { ROUTE_PATH } from "../constant/urlConstant";
import Header from "../common/Header";
import Footer from "../common/Footer";
import LoginScreen from "../containers/loginScreen";
import RegisterScreen from "../containers/registerScreen";
import HomeScreen from "../containers/homeScreen";
import { useSelector } from "react-redux";
import { USER_ROLE } from "../constant/role/index";
import CustomerScreen from "../containers/customerScreen";
import AdminScreen from "../containers/adminScreen";
import FarmersListComponent from "../components/admin/farmerList";
import CustomersListComponent from "../components/admin/customerList";

// import ErrorPage from "../common/Error";
// import AccessDeniedPage from "../common/Access";

const Routing = () => {
  const isLoggedIn = useSelector((state) => state.authReducer.isLoggedIn);
  const isVerify = useSelector((state) => state.authReducer.isVerify);
  const userRole = useSelector((state) => state.authReducer.userRole);

  if (isLoggedIn && isVerify && userRole === USER_ROLE.FARMER)
    return (
      <Routes>
        <Route path={ROUTE_PATH.BASE.HOME} element={<HomeScreen />} />
        <Route path={ROUTE_PATH.BASE.LOGIN} element={<LoginScreen />} />
        <Route path={ROUTE_PATH.BASE.REGISTER} element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to={ROUTE_PATH.BASE.HOME} />} />
      </Routes>
    );
  else if (!!isLoggedIn && !!isVerify && userRole === USER_ROLE.CUSTOMER)
    return (
      <Routes>
        <Route path={ROUTE_PATH.BASE.HOME} element={<HomeScreen />} />
        <Route path={ROUTE_PATH.BASE.LOGIN} element={<LoginScreen />} />
        <Route path={ROUTE_PATH.BASE.REGISTER} element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to={ROUTE_PATH.BASE.HOME} />} />
      </Routes>
    );
  else if (!!isLoggedIn && !!isVerify && userRole === USER_ROLE.ADMIN)
    return (
      <Routes>
        <Route path={ROUTE_PATH.BASE.HOME} element={<HomeScreen />} />
        <Route path={ROUTE_PATH.BASE.LOGIN} element={<LoginScreen />} />
        <Route path={ROUTE_PATH.BASE.REGISTER} element={<RegisterScreen />} />
        <Route path="*" element={<Navigate to={ROUTE_PATH.BASE.HOME} />} />
      </Routes>
    );
  else {
    return (
      <React.Fragment>
        <header>
          <Header userRole={userRole} />
        </header>
        <main>
          <Routes>
            <Route path={ROUTE_PATH.BASE.HOME} element={<HomeScreen />} />
            <Route path={ROUTE_PATH.BASE.LOGIN} element={<LoginScreen />} />
            <Route
              path={ROUTE_PATH.BASE.REGISTER}
              element={<RegisterScreen />}
            />
            <Route path={ROUTE_PATH.CUSTOMER.HOME} element={<CustomerScreen />} />
            <Route path={ROUTE_PATH.ADMIN.HOME} element={<AdminScreen />} />
            <Route path={ROUTE_PATH.FARMERS_LIST.HOME} element={<FarmersListComponent />} />
            <Route path={ROUTE_PATH.CUSTOMER_LIST.HOME} element={<CustomersListComponent />} />

            <Route path="*" element={<Navigate to={ROUTE_PATH.BASE.LOGIN} />} />
          </Routes>
        </main>
        <footer>
          <Footer />
        </footer>
      </React.Fragment>
    );
  }
};

export default Routing;
