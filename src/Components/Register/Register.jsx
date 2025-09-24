import { useState, useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'

export default function Register() {
  const [apiError, setApiError] = useState(null)
  const [loading, setLoading] = useState(false)
  let { setUserToken } = useContext(UserContext)
  let navigate = useNavigate()

  async function register(values) {
    try {
      setLoading(true)
      let { data } = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      )
      console.log(data)
      setLoading(false)
      localStorage.setItem('userToken', data.token)
      setUserToken(data.token)
      navigate('/home') // ✅ use /home (absolute path)
    } catch (err) {
      console.log(err.response?.data?.message)
      setApiError(err.response?.data?.message)
      setLoading(false)
    }
  }

  let validationSchema = Yup.object().shape({
    name: Yup.string()
      .required('name is Required')
      .min(3, 'min 3 letters')
      .max(15, 'max 15 letters'),
    email: Yup.string()
      .required('email is Required')
      .email('email invalid'),
    phone: Yup.string()
      .required('phone is Required')
      .matches(/^01[0125][0-9]{8}$/, 'Enter Egyptian Phone Number'),
    password: Yup.string()
      .required('password is Required')
      .matches(/^[A-Z]\w{4,10}$/, 'invalid password... Ex Ahmed123'),
    rePassword: Yup.string()
      .required('rePassword is Required')
      .oneOf([Yup.ref('password')], 'password and rePassword dont match'),
  })

  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      rePassword: '',
      phone: '',
    },
    validationSchema,
    onSubmit: register,
  })

  return (
    <>
      <form
        onSubmit={formik.handleSubmit}
        className="sm:w-1/2 pt-5 mt-10 mx-auto"
      >
        {/* Name */}
        <div className="relative z-0 w-full mb-5 group px-4 ">
          <input
            type="text"
            name="name"
            id="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="name"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your Name
          </label>
        </div>
        {formik.errors.name && formik.touched.name && (
          <div
            className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {formik.errors.name}
          </div>
        )}

        {/* Email */}
        <div className="relative z-0 w-full mb-5 group px-4 ">
          <input
            type="email"
            name="email"
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
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
          <div
            className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {formik.errors.email}
          </div>
        )}

        {/* Phone */}
        <div className="relative z-0 w-full mb-5 group px-4 ">
          <input
            type="text"
            name="phone"
            id="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="phone"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Enter Your Phone
          </label>
        </div>
        {formik.errors.phone && formik.touched.phone && (
          <div
            className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {formik.errors.phone}
          </div>
        )}

        {/* Password */}
        <div className="relative z-0 w-full mb-5 group px-4 ">
          <input
            type="password"
            name="password"
            id="password"
            value={formik.values.password}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
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
          <div
            className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {formik.errors.password}
          </div>
        )}

        {/* RePassword */}
        <div className="relative z-0 w-full mb-5 group px-4 ">
          <input
            type="password"
            name="rePassword"
            id="rePassword"
            value={formik.values.rePassword}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="block py-5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-main-600 peer"
            placeholder=" "
          />
          <label
            htmlFor="rePassword"
            className="peer-focus:font-medium absolute text-sm text-gray-700 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
          >
            Re-enter Password
          </label>
        </div>
        {formik.errors.rePassword && formik.touched.rePassword && (
          <div
            className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {formik.errors.rePassword}
          </div>
        )}

        {/* API Error */}
        {apiError && (
          <div
            className="px-4 py-2 mb-5 text-sm text-red-800 rounded-lg bg-red-50"
            role="alert"
          >
            {apiError}
          </div>
        )}

        {/* Submit Button */}
        {loading ? (
          <button
            type="submit"
            className="w-36 ml-4 text-black bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            <i className="fas fa-spinner fa-spin"></i>
          </button>
        ) : (
          <button
            type="submit"
            className="w-36 ml-4 text-black bg-main-700 hover:bg-main-800 focus:ring-4 focus:outline-none focus:ring-green-light font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
          >
            Submit
          </button>
        )}
      </form>
    </>
  )
}
