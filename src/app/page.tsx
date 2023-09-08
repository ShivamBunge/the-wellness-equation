import Image from "next/image";
import img from "../../public/nature.jpg"

import { getAllPostsFromNotion } from '@/services/posts';
import { toUniqueArray } from '@/utils/to-unique-array';
import Container from '@/components/container';


export const metadata = {
  title: 'Subconsciously',
};


export default async function HomePage() {
  const allPosts = await getAllPostsFromNotion();

  const allCategories = toUniqueArray(
    allPosts
      .filter((post) => post.published)
      .map((post) => post.categories)
      .flat()
  ).sort();

  return (
    <>
      <div className="flex relative items-center">
        <div className="relative mx-auto h-screen w-screen ">
          <Image
            className="opacity-90"
            src={img}
            alt="cover image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>

        <div className="absolute flex flex-col mx-10">
          <h1 className="text-4xl md:text-6xl">
            Subconsciously
          </h1>
          <h3 className="text-xl md:text-2xl mt-5 text-black">
            Exploring the depths of the mind
          </h3>
        </div>
      </div>

      <Container>
        <div className="mt-36">
          <h2 className="text-4xl font-semibold text-center">
            About
          </h2>
          <p className="mt-9 text-lg font-thin">
            Join us on our journey of enlightenment and exploration as we delve into health and wellness. We aim to educate everyone about health covering topics about mental and physical health, fitness. Mission is to inspire and motivate you to discover new perspectives and lead a fulfilling life. Self empowerment is the key to unlocking our full potential and to serve everyone around us.
          </p>
          <p className="mt-9 text-lg font-thin">
            Get ready to be captivated by thought-provoking content and subscribe to our channel if this truly excites you and resonates with your passion.
          </p>
        </div>

        <div className="mt-36">
          <h2 className="text-4xl font-semibold text-center">
            Blogs
          </h2>
          {/* adding recent blogs here -> redirect to blogs page */}
        </div>

        <div className="mt-36 flex flex-wrap md:flex-nowrap gap-10 ">
          <div className="bg-customGray-base p-8 rounded-lg">
            <h2 className="text-3xl md:text-5xl my-8">
              Subconsciously
            </h2>
            <p className="text-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae possimus delectus hic quidem ad magnam quae similique commodi sed. Laudantium maxime totam, ex dolorem facere pariatur saepe beatae excepturi.

            </p>

          </div>
          <div className="flex flex-col gap-10 ">
            <div className="bg-customGray-base  p-8 text-lg rounded-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae possimus delectus hic quidem ad magnam quae similique commodi sed. Laudantium maxime totam, ex dolorem facere pariatur saepe beatae excepturi.
            </div>
            <div className="bg-customGreen-base p-5 text-lg rounded-lg">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae possimus delectus hic quidem ad magnam quae similique commodi sed. Laudantium maxime totam, ex dolorem facere pariatur saepe beatae excepturi.

            </div>
          </div>

        </div>
      </Container>
    </>
  )
}
