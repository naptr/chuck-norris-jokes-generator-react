import { useEffect } from "react";


export const useOutsideClicked = (ref, clickFn) => {
  useEffect(() => {
    const handleOutsideClicked = ev => {
      if (ref.current && !ref.current.contains(ev.target)) {
        clickFn(false);
      }
    }

    document.addEventListener('mousedown', handleOutsideClicked);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClicked);
    }

  }, [ref]);
}