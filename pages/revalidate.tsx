import axios from "axios";
import { NextPage } from "next";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

const Revalidate: NextPage = () => {
  const [authorized, setAuthorized] = useState<boolean>(false);

  const { register, handleSubmit } = useForm();

  useEffect(() => {
    if (!localStorage) {
      return;
    }

    const checkAuth = async () => {
      const password = localStorage.getItem("password");
      const res = await axios.post("/api/check-admin-access", {
        password,
      });
      if (res.status === 200 && res.data.message === "Authorized") {
        localStorage.setItem("password", password);
        setAuthorized(true);
      } else {
        setAuthorized(false);
      }
    };

    checkAuth();
  }, []);

  const onPasswordSubmit = async (data: any) => {
    const password = data.password;
    const res = await axios.post("/api/check-admin-access", {
      password,
    });
    if (res.status === 200 && res.data.message === "Authorized") {
      localStorage.setItem("password", password);
      toast.success("Authorized");
      setAuthorized(true);
    } else {
      toast.error("Wrong password");
      setAuthorized(false);
    }
  };

  return (
    <>
      <h1>Revalidate</h1>
      <div className="mt-8 flex flex-col">
        {authorized ? (
          <>
            <button>Revalidate home</button>
          </>
        ) : (
          <form
            onSubmit={handleSubmit(onPasswordSubmit)}
            className="flex space-x-2"
          >
            <input
              className="text-accent focus:outline-none focus:ring-4 focus:ring-opacity-60 rounded-md px-4 py-2 border-secondary border-4 bg-tertiary transition duration-200 focus:border-blue-500"
              placeholder="Admin Password"
              {...register("password", { required: true })}
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-4 py-2 hover:opacity-60 transition duration-200 text-primary"
            >
              Submit
            </button>
          </form>
        )}
      </div>
    </>
  );
};

export default Revalidate;
