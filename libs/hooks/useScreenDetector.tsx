import { useEffect, useState } from "react";

export const useScreenDetector = () => {
  const [width, setWidth] = useState<number | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleWindowSizeChange = () => {
        setWidth(window.innerWidth);
      };

      handleWindowSizeChange();

      window.addEventListener("resize", handleWindowSizeChange);

      return () => {
        window.removeEventListener("resize", handleWindowSizeChange);
      };
    }
  }, []);

  const isMobileSize = width! <= 768;
  const isTabletSize = width! <= 1024;
  const isDesktopSize = width! > 1024;

  return { isMobileSize, isTabletSize, isDesktopSize };
};
