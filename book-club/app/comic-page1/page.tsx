import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return <div className="flex justify-center items-center">
    <Image
                  src={"/art1.jpg"}
                  alt={"comic page 1"}
                  width={900}
                  height={900}
                  />
      <Link href="/bookstore"><button className={"bg-orange-300 z-40 p-4 mt-10 border-black"}>Continue!</button></Link>
  </div>;
}