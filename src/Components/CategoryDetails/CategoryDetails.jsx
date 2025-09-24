import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import Loading from "../Loading/Loading";

export default function CategoryDetails() {
  const { id } = useParams();

  // Fetch single category details
  function getCategoryDetails() {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${id}`);
  }

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ["categoryDetails", id],
    queryFn: getCategoryDetails,
    enabled: !!id, // only fetch if id exists
  });

  if (isLoading) return <Loading />;

  if (isError)
    return (
      <div className="text-red-600 text-center">
        Error: {error.message}
      </div>
    );

  const category = data?.data.data;

  return (
    <div className="container mx-auto p-6">
      <div className="max-w-lg mx-auto bg-white shadow-lg rounded-lg p-6">
        <img
          src={category.image}
          alt={category.name}
          className="w-full h-[300px] object-cover rounded-md mb-4"
        />
        <h2 className="text-3xl font-bold text-center text-main mb-4">
          {category.name}
        </h2>
        <p className="text-gray-600 text-center">
          Category ID: {category._id}
        </p>
      </div>
    </div>
  );
}
