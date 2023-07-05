import Image from "next/image";
import img from "../../public/hero.jpg"
export const metadata = {
  title: 'Subconsciously',
};


export default function HomePage() {
  return (
    <>
      <div className="flex relative items-center">
        {/* <div className="absolute top-0 left-0 w-full h-full">
          <div className="h-20 w-20 bg-customSecondary rounded-full"></div>
          <div className="h-10 w-10 bg-customSecondary rounded-full absolute bottom-0 left-20"></div>
          <div className="h-20 w-20 bg-customSecondary rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="h-20 w-20 bg-customSecondary rounded-full absolute bottom-0 right-0"></div>
          <div className="h-10 w-10 bg-customSecondary rounded-full absolute "></div>

        </div> */}
        {/* <div className="relative mx-auto h-[20rem] md:h-[28rem] w-80 ">
          <Image
            className="rounded-t-full opacity-80"
            src={img}
            alt="cover image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div> */}
        <div className="relative mx-auto h-[20rem] sm:h-[30rem] md:h-[40rem] w-screen ">
          <Image
            className="opacity-80"
            src={img}
            alt="cover image"
            fill
            style={{ objectFit: 'cover' }}
          />
        </div>
        <div className="absolute flex flex-col sm:left-10">
          <h1 className="text-4xl md:text-6xl">
            Subconsciously
          </h1>
          <h3 className="text-xl md:text-2xl mt-5 text-secondary">
            Exploring the depths of the mind
          </h3>
        </div>

      </div>
      <div className="relative mt-36">
        <div className="h-10 w-10 bg-customSecondary rounded-full absolute bottom-0 left-20"></div>
        {/* <div className="h-20 w-20 bg-customSecondary rounded-full absolute bottom-0 right-0"></div> */}
        <div className="h-10 w-10 bg-customSecondary rounded-full absolute bottom-20 right-20"></div>
        <h1 className="text-4xl font-semibold text-center">
          About
        </h1>
        <p className="mt-9 text-lg font-thin">
          Join us on our journey of enlightenment and exploration as we delve into health and wellness. We aim to educate everyone about health covering topics about mental and physical health, fitness. Mission is to inspire and motivate you to discover new perspectives and lead a fulfilling life. Self empowerment is the key to unlocking our full potential and to serve everyone around us.
        </p>
        <p className="mt-9 text-lg font-thin">
          Get ready to be captivated by thought-provoking content and subscribe to our channel if this truly excites you and resonates with your passion.
        </p>
      </div>

      <div className="mt-36 flex flex-wrap md:flex-nowrap gap-10 ">
        <div className="bg-customSecondary p-8 rounded-lg">
          <h1 className="text-3xl md:text-5xl my-8">
            Subconsciously
          </h1>
          <p className="text-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae possimus delectus hic quidem ad magnam quae similique commodi sed. Laudantium maxime totam, ex dolorem facere pariatur saepe beatae excepturi.

          </p>

        </div>
        <div className="flex flex-col gap-10 ">
          <div className="bg-customSecondary  p-8 text-lg rounded-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae possimus delectus hic quidem ad magnam quae similique commodi sed. Laudantium maxime totam, ex dolorem facere pariatur saepe beatae excepturi.
          </div>
          <div className="bg-customSecondary p-5 text-lg rounded-lg">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta vitae possimus delectus hic quidem ad magnam quae similique commodi sed. Laudantium maxime totam, ex dolorem facere pariatur saepe beatae excepturi.

          </div>
        </div>

      </div>

    </>
  )
}
