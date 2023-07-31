import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import LogoutIcon from "@mui/icons-material/Logout";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { Login } from "./Login";
import { AddComment } from "./AddComment";
import { AllComments } from "./AllComments";

import { useCookies } from "react-cookie";
import { useGetUserID } from "../../hooks/useGetUserID";

import axios from "axios";
import { useGetBaseURL } from "../../hooks/useGetBaseURL";

export const Navbar = () => {
  const [cookies, setCookies, removeCookie] = useCookies(["access_token"]);
  const [notifications, setNotifications] = useState([]);
  const userID = useGetUserID();
  const baseUrl = useGetBaseURL();

  useEffect(() => {
    if (userID) {
      const GetNotifications = async () => {
        try {
          const response = await axios.get(
            `${baseUrl}/comment/get-notifications`
          );
          setNotifications(response.data);
        } catch (error) {
          console.error("Error fetching notifications:", error);
        }
      };
      GetNotifications();
    }
  }, [userID]);

  const handleLogout = () => {
    setCookies("access_token", "");
    window.sessionStorage.removeItem("userID");
    window.sessionStorage.removeItem("userName");
    removeCookie("access_token");
    toast.success("😁LogOut Successfully !..", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  return (
    <div className="navbar">
      <Link to="/" style={{ textDecoration: "none" }}>
        <HomeIcon style={{ fontSize: "50px", color: "#862B0D" }} />
      </Link>

      <span id="myName">Akhil's PortFolio</span>

      {userID && (
        <>
          <Link style={{ textDecoration: "none" }}>
            <div className="topbar-allcomments">
              <AllComments />
              {notifications.length > 0 && (
                <div className="counter">{notifications.length}</div>
              )}
            </div>
          </Link>
          
          <Link to="/" style={{ textDecoration: "none" }}>
            <LogoutIcon
              style={{ fontSize: "50px", color: "blue" }}
              onClick={handleLogout}
            />
          </Link>
        </>
      )}

      {!userID && (
        <>
          <Link style={{ textDecoration: "none" }}>
            <AddComment />
          </Link>

          <Link style={{ textDecoration: "none" }}>
            <div className="topbar-allcomments">
              <AllComments />
              {notifications.length > 0 && (
                <div className="counter">{notifications.length}</div>
              )}
            </div>
          </Link>

          <Link style={{ textDecoration: "none" }}>
            <Login />
          </Link>
        </>
      )}
      <ToastContainer />
    </div>
  );
};
