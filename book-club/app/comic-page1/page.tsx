import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return <div className="flex justify-center bg-yellow-50 items-center">
    <Image
                  src={"/art1.jpg"}
                  alt={"comic page 1"}
                  width={900}
                  height={900}
                  />
      <Link href="/bookstore"><button className={"bg-stone-500 -translate-x-50 p-4 mt-200 border-black"}>Retry!</button></Link>
  </div>;
}