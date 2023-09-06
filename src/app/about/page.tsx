export const metadata = {
  title: 'About',
  description: 'This is about page.',
};
import Container from "@/components/container";
export default function AboutPage() {
  return (
    <Container>
      <h1 className="mt-12 text-center text-3xl font-bold">Meet Our Founders</h1>
      <div className="grid grid-cols-2 gap-10 mt-24">
        <div className="">
          <h2 className="text-2xl text-center">
            Shivam Bunge
          </h2>
        </div>
        <div className="">
          <h2 className="text-2xl text-center">
            Kishor Dhanawate
          </h2>
        </div>
      </div>
    </Container>
  )
}
