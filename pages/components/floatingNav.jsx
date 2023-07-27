import Link from "next/link";
import { useEffect, useState } from "react";

export default function FloatingNav() {
  const [show, setShow] = useState(true);
  const [yPos, setYPos] = useState(0);
  useEffect(() => {
    let previousScrollPosition = 0;
    let currentScrollPosition = 0;

    window.addEventListener("scroll", function (e) {
      currentScrollPosition = window.scrollY;
      setYPos(window.scrollY);

      if (previousScrollPosition - currentScrollPosition < 0) {
        setShow(false);
      } else if (previousScrollPosition - currentScrollPosition > 0) {
        setShow(true);
      }

      previousScrollPosition = currentScrollPosition;
    });
  }, []);

  if (yPos < 70) {
    return (
      <div className="bg-white/70 flex flex-row py-6 px-9 text-lg gap-8 font-medium">
        <Link href="/">
          <div className="text-orange-400">About</div>
        </Link>
        <Link href="/">Jobs</Link>
        <Link href="/">Apprenticeships</Link>
      </div>
    );
  } else {
    if (show) {
      return (
        <div
          style={{
            zIndex: "10",
            opacity: "1",
            animation: " fadein 0.1s linear",
          }}
          className="fixed top-0 left-0 w-[100%]  bg-white/80 flex flex-row py-6 px-9 text-lg gap-8 font-medium"
        >
          <Link href="/">
            <div className="text-orange-400">About</div>
          </Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Apprenticeships</Link>
        </div>
      );
    } else {
      return (
        <div
          style={{
            zIndex: "10",
            opacity: "0",
            animation: " fadeout 0.1s linear",
          }}
          className="fixed top-0 left-0 w-[100%]  bg-white/8 0 flex flex-row py-6 px-9 text-lg gap-8 font-medium"
        >
          <Link href="/">
            <div className="text-orange-400">About</div>
          </Link>
          <Link href="/">Jobs</Link>
          <Link href="/">Apprenticeships</Link>
        </div>
      );
    }
  }
}
