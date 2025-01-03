import React from "react";
import { Products } from "../../sanity.types";
import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import PriceView from "./PriceView";

const ProductCard = ({ product }: { product: Products }) => {
  return (
    <>
      <section className="md:pt-10 pt-8">
        <Card className="">
          <CardContent className="">
            <CardHeader>
              {product?.images && (
                <Link href={`/product/${product._id}`}>
                  <div className="relative h-60 w-full overflow-hidden rounded-xl">
                    <Image
                      src={urlFor(product.images[0]).url()}
                      alt="Product Image"
                      fill
                    />
                  </div>
                </Link>
              )}
            </CardHeader>
            <CardDescription>
              <p>{product?.name}</p>
              <p>{product?.intro}</p>
              <PriceView
                className="text-lg"
                price={product?.price}
                discount={product?.discount}
              />
            </CardDescription>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default ProductCard;
