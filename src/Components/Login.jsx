import { useFormik } from "formik";
import * as Yup from "yup";
import api from "../Service/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useLogin } from "../Context/CartContext";
import heroPattern from "../img/bgCover.jpeg";

const Login = () => {
  const [loading, setLoding] = useState(false);
  const { login, setLogin } = useLogin();
  const formik = useFormik({
    initialValues: {
      username: "", //emilys
      password: "", //emilyspass
    },
    validationSchema: Yup.object({
      username: Yup.string()
        .min(6, "username in vaild")
        .required("Email is required"),
      password: Yup.string()
        .min(6, "Password must be at least 6 characters")
        .required("Password is required"),
    }),
    onSubmit: async () => {
      try {
        setLoding(true);
        const { data } = await api.post("/auth/login", formik.values);
        console.log(data.accessToken);
        localStorage.setItem("token", data.accessToken);
        setLogin(true);
      } catch (error) {
        console.log(error);
        alert("invaild user");
      }
      setLoding(false);
    },
  });
  const navgaite = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      navgaite("/");
    }
  }, [login]);
  return (
    <>
      <div
        className=" fixed inset-0  bg-cover bg-center w-full h-screen"
        style={{
          backgroundImage: `url(${heroPattern})`,
        }}
      >
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-black/50">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="bg-main_color text-white rounded-xl shadow-lg mt-10 text-center text-2xl/9 font-bold tracking-tight">
              Sign in <br /> to your account
            </h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm shadow-lg p-6 bg-white/90 rounded-md">
            <form
              action="#"
              method="POST"
              className="space-y-6"
              onSubmit={formik.handleSubmit}
            >
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm/6 font-medium text-gray-900"
                >
                  User Name
                </label>
                <div className="mt-2">
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    required
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a8f3] sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label
                    htmlFor="password"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <div className="text-sm">
                    <a
                      href="#"
                      className="font-semibold text-[#00a8f3] hover:text-blue-500"
                    >
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    required
                    autoComplete="current-password"
                    className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-[#00a8f3] sm:text-sm/6"
                  />
                </div>
              </div>

              <div>
                <button
                  type="submit"
                  disabled={loading}
                  onSubmit={formik.handleSubmit}
                  className="flex w-full justify-center rounded-md bg-[#00a8f3] px-3 py-1.5 text-sm/6 font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00a8f3]"
                >
                  Sign in
                </button>
              </div>
            </form>

            <p className="mt-10 text-center text-sm/6 text-gray-500">
              Not have a account?{" "}
              <a
                href="#"
                className="font-semibold text-[#00a8f3] hover:text-blue-500"
              >
                Sign up
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
