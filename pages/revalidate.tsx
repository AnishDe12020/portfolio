import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";

const Revalidate: NextPage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [authorized, setAuthorized] = useState<boolean>(false);
  const [password, setPassword] = useState<string>("");

  useEffect(() => {
    if (!localStorage) {
      return;
    } else {
      setPassword(localStorage.getItem("password"));
    }

    const checkAuth = async () => {
      const res = await axios.post("/api/check-admin-access", {
        password,
      });
      if (res.status === 200 && res.data.message === "Authorized") {
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    };

    checkAuth();
  }, [password]);

  return (
    <>
      <h1>Revalidate</h1>
      {authorized ? (
        <p>Authorized</p>
      ) : (
        <input
          className="text-accent focus:outline-none focus:ring-4 focus:ring-opacity-60 rounded-md px-4 py-2 border-secondary border-4 bg-tertiary transition duration-200 focus:border-blue-500"
          value={password}
          placeholder="Admin Password"
          onChange={e => setPassword(e.target.value)}
        />
      )}
    </>
  );
};

export default Revalidate;
