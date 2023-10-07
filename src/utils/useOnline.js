import { useEffect, useState } from "react";

const useOnline = () => {
  const [isonline, setIsonline] = useState(true);

  const handleonline = () => setIsonline(true);
  const handleoffline = () => setIsonline(false);

  useEffect(() => {
    window.addEventListener("online", handleonline);
    window.addEventListener("offline", handleoffline);
    return () => {
      console.log("Unmount in useeffect");
      window.removeEventListener("online", handleonline);
      window.removeEventListener("offline", handleoffline);
    };
  }, []);

  return isonline;
};

export default useOnline;
