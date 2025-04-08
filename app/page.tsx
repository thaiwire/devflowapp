import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
   <div>
      <h1 className="h1-bold text-primary-500">Welcome To My Course </h1>
      <h1 className="h2-bold text-primary-500">Welcome To My Course </h1>
      <h1 className="h2-semibold text-primary-500">Welcome To My Course </h1>
      <h1 className="h3-bold text-primary-500">Welcome To My Course </h1>
      
      
      
      <Link href='/about'>
      <h1 className="h2-bold">About </h1>
      </Link>
      <Link href='/about/ariyan'>
      <h1 className="h2-bold">About Ariyan </h1>
      </Link>
      <Link href='/contact'>
      <h1 className="h2-bold">Contact </h1>
      </Link>
     
   </div>
  );
}
