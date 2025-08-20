import { useEffect, useState } from "react";

const useDocumentHeight = () => {
  const [documentHeight, setDocumentHeight] = useState<{
    width: number;
    bodyHeight: number;
  }>({ width: 0, bodyHeight: 0 });

  useEffect(() => {
    const updateHeight = () => {
      setDocumentHeight({
        width: document.body.clientWidth,
        bodyHeight: document.body.offsetHeight,
      });
    };
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return documentHeight;
};

export default useDocumentHeight;
