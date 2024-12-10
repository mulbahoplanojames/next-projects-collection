import axios from "axios";

export const fetchBlogPosts = async () => {
  try {
    const res = await axios.get("https://dummyjson.com/products");
    const data = res.data.products;
    return data;
  } catch (error) {
    console.log(error);
  }
};
