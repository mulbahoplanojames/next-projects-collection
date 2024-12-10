import Image from "next/image";
import { blogType } from "@/types/type";
import axios from "axios";
import Link from "next/link";
import { ArrowLeftCircle } from "lucide-react";

export const generateStaticParams = async () => {
  const res = await axios.get(`https://dummyjson.com/products`);

  const data = await res.data;

  return data.products.map((blog: blogType) => ({
    id: blog.id.toString(),
  }));
};

const handleUpcomingMovieFetch = async (id: string) => {
  const res = await axios.get(`https://dummyjson.com/products/${id}`);

  const data = await res.data;
  return data;
};

const BlogPost = async ({ params }: { params: { id: string } }) => {
  const result = await handleUpcomingMovieFetch(params.id);

  return (
    <>
      <section className="md:px-20 px-4 py-12">
        <Link href="/">
          <ArrowLeftCircle
            size={40}
            className="absolute md:top-4 top-1 left-4"
          />
        </Link>
        <div className="w-full h-[300px] rounded-lg object-cover relative bg-red-400">
          <Image
            src={result.thumbnail}
            alt={result.title}
            fill
            className="w-full h-full absolute top-0 right-0 left-0 bottom-0 "
          />
        </div>
        <p className="text-2xl font-semibold py-4">{result.title}</p>
        <p className="text-text_primary pb-4">{result.description}</p>
        <p className="text-text_primary">{result.price}</p>
      </section>
    </>
  );
};

export default BlogPost;
