import { Outlet, useNavigate } from "react-router-dom";
import { useAuthFirebase } from "../context/AuthContext";
import { useEffect } from "react";

export default function AuthRoute() {
  const { user } = useAuthFirebase();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) navigate(-1);
  }, []);

  return <Outlet />;
}
