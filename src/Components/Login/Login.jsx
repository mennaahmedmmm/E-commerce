import { useState, useContext } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

export default function Login() {
  const [apiError, setApiError] = useState(null);
  const [loading, setLoading] = useState(false);
  let { setUserToken } = useContext(UserContext);
  let navigate = useNavigate();

  // 🔑 login function
  async function login(values) {
    try {
      setLoading(true);

      // ✅ only send email + password
      let { data } = await axios.post(
        "https://ecommerce.routemisr.com/api/v1/auth/signin",
        {
          email: values.email,
          password: values.password,
        }
      );

      console.log("Login success:", data);

      localStorage.setItem("userToken", data.token);
      setUserToken(data.token);
      navigate("/home");
    } catch (err) {
      console.error("Login error:", err.response?.data?.message || err.message);
      setApiError(err.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  }

  // ✅ Yup validation
  let validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("Email is required")
      .email("Enter a valid email"),
    password: Yup.string()
      .required("Password is required")
      // you can relax this regex if needed
      .matches(/^[A-Z]\w{4,10}$/, "Invalid password. Ex: Ahmed123"),
  });

  // ✅ Formik setup
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: login,
  });

  return (
    <form
      onSubmit={formik.handleSubmit}
      className="sm:w-1/2 pt-5 mt-10 mx-auto"
    >
      {/* Email */}
      <div className="relative z-0 w-full mb-5 group px-4">
        <input
          type="email"
          name="email"
          id="email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="email"
          className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Enter Your Email
        </label>
      </div>
      {formik.errors.email && formik.touched.email && (
        <div className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50">
          {formik.errors.email}
        </div>
      )}

      {/* Password */}
      <div className="relative z-0 w-full mb-5 group px-4">
        <input
          type="password"
          name="password"
          id="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          className="block py-5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
          placeholder=" "
        />
        <label
          htmlFor="password"
          className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >
          Enter Your Password
        </label>
      </div>
      {formik.errors.password && formik.touched.password && (
        <div className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50">
          {formik.errors.password}
        </div>
      )}

      {/* API error */}
      {apiError && (
        <div className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50">
          {apiError}
        </div>
      )}

      {/* Submit */}
      {loading ? (
        <button
          type="submit"
          disabled
          className="w-36 ml-4 text-white bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          <i className="fas fa-spinner fa-spin"></i>
        </button>
      ) : (
        <button
          type="submit"
          className="w-36 ml-4 text-white bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        >
          Submit
        </button>
      )}
    </form>
  );
}
