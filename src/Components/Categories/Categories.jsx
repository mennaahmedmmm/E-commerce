import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading/Loading";
import { Link } from "react-router-dom";

export default function Categories() {
  // Fetch categories
  function getCategories() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories`);
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="text-red-600 text-center">
        Error: {error.message}
      </div>
    );

  return (
    <>
      <h2 className="text-4xl font-bold text-center my-6 text-main">
        Categories
      </h2>

      <div className="flex flex-wrap justify-center gap-6 p-5 lg:p-20">
        {data?.data.data.map((category) => (
          <div key={category._id} className="w-full sm:w-1/2 md:w-1/3 p-4">
            <Link to={`/categoryDetails/${category._id}`}>
              <div className="bg-white rounded-lg overflow-hidden shadow-md 
                hover:shadow-xl transform hover:scale-105 transition duration-300 border border-gray-200">
                <img
                  className="w-full h-[350px] object-cover rounded-t-lg"
                  src={category.image}
                  alt={category.name}
                />
                <div className="p-4">
                  <p className="text-center text-2xl font-semibold text-gray-700 
                    hover:text-green-600 transition duration-300">
                    {category.name}
                  </p>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
