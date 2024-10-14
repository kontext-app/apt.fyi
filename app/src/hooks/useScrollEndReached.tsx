import { useEffect, useState } from 'react';

const useScrollEndReached = () => {
  //   const [scrollPosition, setScrollPosition] = useState(0);
  const [scrollEndReached, setScrollEndReached] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      const rounded = Math.floor(window.pageYOffset / 10) * 10;
      //   setScrollPosition(rounded);

      const isBottom =
        window.innerHeight + rounded >= document.body.offsetHeight - 10;
      setScrollEndReached(isBottom);
    };
    window.addEventListener('scroll', updatePosition);
    updatePosition();
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  //   useEffect(() => {

  //   }, [scrollPosition]);

  return scrollEndReached;
};

export default useScrollEndReached;
