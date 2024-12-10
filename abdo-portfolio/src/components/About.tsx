import Image from "next/image";
import { Button } from "./ui/button";

const About = () => {
  return (
    <>
      <section
        className="grid md:grid-cols-2 grid-cols-1 gap-4 place-items-center"
        id="/about"
      >
        <div className=" w-full h-fit md:px-4 px-2">
          <h1 className="text-6xl pb-4 font-bold">
            Transforming Ideas into Code
          </h1>
          <p className="text-lg pb-6">
            I specialize in creating efficient backend systems that power modern
            applications.
          </p>
          <div className="space-x-7">
            <Button
              size={"lg"}
              className="bg-primary_main text-text_primary hover:bg-secondary_main hover:opacity-70 text-base py-4 px-6"
            >
              Discuss More
            </Button>
            <Button
              size={"lg"}
              variant={"secondary"}
              className="text-base py-4 px-6"
            >
              Learn More
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4 w-full">
          {/* <!-- Row 1 --> */}
          <div className="col-span-1 h-44 relative">
            <Image
              src="https://images.pexels.com/photos/3530054/pexels-photo-3530054.jpeg?auto=compress&cs=tinysrgb&w=600"
              alt="Image 1"
              className="w-full h-full rounded-md"
              fill
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-2 h-44 relative">
            <Image
              src="https://media.istockphoto.com/id/1307857825/photo/monitor-of-graph-analytic-form-low-to-high-data-for-website-online-marketing-development.jpg?s=612x612&w=0&k=20&c=OnH8g14i3Eb_AaeGCluQaRjiRdnVp1qLJ1pqsjYSY4s="
              alt="Image 2"
              className="w-full h-full rounded-md"
              fill
            />
          </div>

          {/* <!-- Row 2 --> */}
          <div className="sm:col-span-2 lg:col-span-2 h-44 relative">
            <Image
              src="https://media.istockphoto.com/id/1395329452/vector/online-marketing-concept-3d-illustration.jpg?s=612x612&w=0&k=20&c=4iImftvNydpE15bsrUVj4W5ggEAgaf8s8GtxVDcTu08="
              alt="Image 3"
              className="w-full h-auto rounded-md "
              fill
            />
          </div>
          <div className="col-span-1 h-44 relative">
            <Image
              src="https://media.istockphoto.com/id/1456566790/photo/3d-seo-optimization-web-analytics-and-seo-marketing-seo-interface-for-website-strategy-and.jpg?s=612x612&w=0&k=20&c=1dse0ug9A3bdZ1w0FN-eG_p_w4j1bA-v8qSh7ne7W3c="
              alt="Image 4"
              className="w-full h-auto rounded-md "
              fill
            />
          </div>

          {/* <!-- Row 3 --> */}
          {/* <div className="col-span-1 h-44 relative">
            <Image
              src="https://media.istockphoto.com/id/1614352010/photo/computer-screen-stock-market-candlesticks-and-money-on-podium-trading.jpg?s=612x612&w=0&k=20&c=UNhWMrc3tUae7mHZia5hhii4jCzHUS7RSrd-wwip4OQ="
              alt="Image 5"
              className="w-full h-auto rounded-md"
              fill
            />
          </div>
          <div className="sm:col-span-2 lg:col-span-2  h-44 relative">
            <Image
              src="https://media.istockphoto.com/id/1321401733/photo/3d-seo-optimization-web-analytics-and-seo-marketing-cncept-3d-render-illustration.jpg?s=612x612&w=0&k=20&c=3KJn-eXnHfoe5eqgIJhzjOt-HJKx5IIkaQ9lRo3DceI="
              alt="Image 6"
              className="w-full h-auto rounded-md"
              fill
            />
          </div> */}

          {/* <!-- Row 4 --> */}
          <div className="col-span-2 lg:col-span-3 h-44 relative">
            <Image
              src="https://media.istockphoto.com/id/1995112426/photo/3d-rendering-of-cartoon-business-elements.jpg?s=612x612&w=0&k=20&c=_SSU-E-zlyBh72EhIuRoSZFw6S5RlNtWXl4fjreZMsE="
              alt="Image 7"
              className="w-full h-auto rounded-md"
              fill
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
