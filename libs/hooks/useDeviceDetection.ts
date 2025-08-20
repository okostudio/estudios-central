import { useState, useEffect } from "react";

const useDeviceDetection = () => {
  //   const [device, setDevice] = useState<string>("");
  const [isUserMobile, setIsUserMobile] = useState<boolean>(false);

  useEffect(() => {
    const handleDeviceDetection = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const isMobile =
        /iphone|ipad|ipod|android|blackberry|windows phone/g.test(userAgent);
      //   const isTablet =
      //     /(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(userAgent);

      if (isMobile) {
        //   setDevice("Mobile");
        setIsUserMobile(() => true);
      }
      //   else if (isTablet) {
      //     setDevice("Tablet");
      //   } else {
      //     setDevice("Desktop");
      //   }
    };

    handleDeviceDetection();
    window.addEventListener("resize", handleDeviceDetection);

    return () => {
      window.removeEventListener("resize", handleDeviceDetection);
    };
  }, []);

  return isUserMobile;
};

export default useDeviceDetection;
