import Image from "next/image";

export default function Card() {
  return (
    <div className="flex flex-row bg-[#b1c5ff] w-[82vw] mx-auto h-[85vh] p-0 gap-0">
      <div className="flex basis-1/2">
        <Image
          src="/photo-8.jpg"
          width="700"
          height="700"
          style={{ width: "41vw", height: "85vh" }}
        ></Image>
      </div>
      <div className="text-2xl height-[85vh] items-start justify-center flex basis-1/2 px-28 leading-loose gap-5 flex-col">
        <div className="font-bold">
          We’re really proud of the work we’ve done so far. But there’s so much
          more to come. If you’d like to be a part of it, please join us.
        </div>
        <div className="text-[#0100ff] font-bold">
          {"See latest Jobs"} &nbsp;{" >"}
        </div>
      </div>
    </div>
  );
}
