import { useEffect, useState } from "react";

export function useWindowHeight() {
  const [height, setHeight] = useState(0);

  useEffect(() => {
    function update() {
      setHeight(window.innerHeight);
      console.log(window.innerHeight);
    }

    update();
    window.addEventListener("resize", update);

    return () => window.removeEventListener("resize", update);
  }, []);

  return height;
}
