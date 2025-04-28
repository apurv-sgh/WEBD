import Image from "next/image";

export default function Home() {
  return (
   <div className="container my-5 size-250 bg-amber-300 relative ">
    I am Home
    <Image className="mx-auto object-cover" fill={true} src="https://images-cdn.ubuy.co.in/666aca45a476dc2a4d39129c-cute-car-decoration-lovely-couple-car.jpg"  alt=" " />
   </div>
  );
}
