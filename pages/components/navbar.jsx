import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div className="border-b-2 h-[77px] items-center border-black/10 flex flex-row py-auto px-7 tracking-wide">
      <div className="gap-7 flex text-xl font-medium flex-row justify-start flex-grow items-center">
        <Image src="/pngegg.png" width="80" height="80"></Image>
        <Link href="/">Live</Link>
        <Link href="/">Push</Link>
        <Link href="/">Note</Link>
        <Link href="/">Link</Link>
        <Link href="/">Shop</Link> <Link href="/">Packs</Link>{" "}
        <Link href="/">Help</Link>
        <Link href="/">
          <div className="text-orange-400">More +</div>
        </Link>
      </div>
      <div className="flex items-center flex-row flex-grow-0 gap-5 justify-end">
        <Link href="/">
          <div className="text-[#1a0bf4] font-bold text-lg">
            Try Live for free
          </div>
        </Link>
        <Link href="/">
          <div className="text-sm font-medium"> Log in or Register</div>{" "}
        </Link>
      </div>
    </div>
  );
}
