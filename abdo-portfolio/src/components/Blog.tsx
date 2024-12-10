import Image from "next/image";
import { fetchBlogPosts } from "@/utils/utils";
import { blogType } from "@/types/type";
import { Card, CardContent, CardDescription, CardHeader } from "./ui/card";
import Link from "next/link";

const Blog = async () => {
  const blogPosts = await fetchBlogPosts();

  return (
    <>
      <section className="md:px-14 px-2 py-20" id="/blog">
        <div className="container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <a
            rel="noopener noreferrer"
            href="#"
            className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
          >
            <div className=" w-full h-64 rounded sm:h-96 lg:col-span-7  relative">
              <Image
                src="https://media.istockphoto.com/id/1493517931/vector/innovative-3d-concept-for-a-virtual-social-networking-platform-a-hand-grasps-a-smartphone.jpg?s=612x612&w=0&k=20&c=hozC5Yzdl97tEpSOTkp1Px-jR6vaqyJZLD1sp4zW2K0="
                alt=""
                fill
                className="object-cover w-full h-full dark:bg-gray-500"
              />
            </div>
            <div className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Noster tincidunt reprimique ad pro
              </h3>
              <span className="text-xs text-text_primary">
                February 19, 2021
              </span>
              <p className="text-text_primary">
                Ei delenit sensibus liberavisse pri. Quod suscipit no nam. Est
                in graece fuisset, eos affert putent doctus id.
              </p>
            </div>
          </a>
          <div className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {blogPosts.slice(0, 6).map((post: blogType) => (
              <Card key={post.id}>
                <CardContent className="">
                  <Link
                    rel="noopener noreferrer"
                    href="#"
                    className="max-w-sm mx-auto group hover:no-underline focus:no-underline relative "
                  >
                    <CardHeader className="w-full rounded h-56 overflow-hidden relative ">
                      <Image
                        role="presentation"
                        className="object-cover"
                        src={post.thumbnail}
                        alt={post.title}
                        fill
                      />
                    </CardHeader>

                    <CardDescription className="p-6 space-y-2">
                      <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                        {post.title}
                      </h3>
                      <span className="text-xs dark:text-gray-600">
                        {post.createdAt}
                      </span>
                      <p>{post.description}</p>
                    </CardDescription>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="flex justify-center">
            <button
              type="button"
              className="px-6 py-3 text-sm rounded-md hover:underline dark:bg-gray-50 dark:text-gray-600"
            >
              Load more posts...
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
