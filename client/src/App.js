import Dashboard from "./components/pages/dashboard/Dashboard";
import Payment from "./components/pages/payment/Payment";
import Upload from "./components/pages/upload/Upload";
import Login from "./components/pages/login/Login";
import Register from "./components/pages/register/Register";
import Settings from "./components/pages/settings/Settings";
import Profile from "./components/pages/profile/Profile";
import Home from "./components/pages/home/Home";
import CoverPicture from "./components/pages/coverPicture/CoverPicture";
import EditProfile from "./components/pages/edit-profile/Edit-profile";
import Withdraw from "./components/pages/withdraw/Withdraw";
import ErrorPage from "./ErrorPage";
import { useContext } from "react";
import { Context } from "./context/Context";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";

function App() {
  const { user } = useContext(Context);

  const ProtectedRoute = ({ children }) => {
    if (!user) {
      return <Navigate to="/login" />;
    }

    return children;
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "dashboard",
      element: (
        <ProtectedRoute>
          <Dashboard />
        </ProtectedRoute>
      ),
    },
    {
      path: "payment",
      element: (
        <ProtectedRoute>
          <Payment />
        </ProtectedRoute>
      ),
    },
    {
      path: "upload",
      element: (
        <ProtectedRoute>
          <Upload />
        </ProtectedRoute>
      ),
    },
    {
      path: "settings",
      element: (
        <ProtectedRoute>
          <Settings />
        </ProtectedRoute>
      ),
    },
    {
      path: "profile",
      element: (
        <ProtectedRoute>
          <Profile />
        </ProtectedRoute>
      ),
    },
    {
      path: "cover-picture",
      element: (
        <ProtectedRoute>
          <CoverPicture />
        </ProtectedRoute>
      ),
    },
    {
      path: "edit-profile",
      element: (
        <ProtectedRoute>
          <EditProfile />
        </ProtectedRoute>
      ),
    },
    {
      path: "withdraw",
      element: (
        <ProtectedRoute>
          <Withdraw />
        </ProtectedRoute>
      ),
    },
    {
      path: "login",
      element: !user ? <Login /> : <Navigate to="/dashboard" />,
    },
    {
      path: "register",
      element: !user ? <Register /> : <Navigate to="/dashboard" />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
