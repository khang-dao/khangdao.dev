import { useEffect } from "react";

function useScrollDisable(isLocked) {
  useEffect(() => {
    document.body.style.overflow = isLocked ? "hidden" : "";
    return () => document.body.style.overflow = "";
  }, [isLocked]);
}

export default useScrollDisable;
