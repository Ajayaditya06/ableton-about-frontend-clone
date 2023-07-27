import Image from "next/image";

export default function HeroCard2() {
  return (
    <div className="w-[100%] flex justify-center items-center">
      <Image
        src="/poster-meet-the-makers.png"
        height="700"
        width="700"
        style={{ height: "90vh", width: "80vw" }}
      ></Image>
    </div>
  );
}
