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
          className="text-primary"
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
      )}
    </>
  );
};

export default Revalidate;
