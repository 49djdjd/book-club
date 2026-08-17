import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return <div className="flex justify-center bg-yellow-50 items-center">
    <Image
                  src={"/art3.jpg"}
                  alt={"comic page 1"}
                  width={900}
                  height={700}
                  />
      <Link href="/"><button className={"bg-stone-500 -translate-x-45 p-4 mt-200 border-black"}>Go back!</button></Link>
  </div>;
}