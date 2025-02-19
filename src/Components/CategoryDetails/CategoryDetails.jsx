import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { useEffect } from "react";

export default function CategoryDetails() {
  function getSpecificCategory(CategoryId) {
    return axios.get(`https://ecommerce.routemisr.com/api/v1/categories/${CategoryId}
`);
  }

  let { data } = useQuery({
    queryKey: ["getSpecificCategory"],
    queryFn: getSpecificCategory,
  });
  console.log(data);
useEffect(() => {
    getSpecificCategory()
}, [])

  return <></>;
}
