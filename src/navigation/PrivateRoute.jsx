import { useNavigate, Outlet } from "react-router-dom";
import { useAuthFirebase } from "../context/AuthContext";
import { useEffect } from "react";

export default function PrivateRoute() {
  const { user } = useAuthFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    console.log(user)
    if (!user) navigate("/login");
  }, [user]);

  return <Outlet />;
}
