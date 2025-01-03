"use client";
import { useEffect, useState } from "react";
import HomeProductTabar from "./HomeProductTabar";
import { productTabData } from "@/data/productTabData";
import { client } from "@/sanity/lib/client";
import { Products } from "../../sanity.types";
import ProductCard from "./ProductCard";
import NoProductAvailable from "./NoProductAvailable";

const ProductGrid = () => {
  const [selectedTab, setSelectedTab] = useState(productTabData[0].label || "");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const query = `*[_type == "products" && variant == $variant] | order(name asc) `;
  const params = { variant: selectedTab.toLocaleLowerCase() };

  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      try {
        const response = await client.fetch(query, params);
        setProducts(await response);
        console.log(await response);

        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, [selectedTab]);
  return (
    <>
      <section className="mt-10 flex flex-col items-center md:px-20 px-4 md:pb-24 pt-6 py-8">
        <HomeProductTabar
          selectedTab={selectedTab}
          onSelectedTab={setSelectedTab}
        />
        {loading ? (
          <div className="py-12 text-xl">Product Loading...</div>
        ) : (
          <>
            {products.length ? (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12 w-full">
                {products.map((product: Products) => (
                  <div key={product._id}>
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <NoProductAvailable selectedTab={selectedTab} />
            )}
          </>
        )}
      </section>
    </>
  );
};

export default ProductGrid;
