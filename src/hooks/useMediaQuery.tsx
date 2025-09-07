import { useState, useEffect } from 'react';

export const  useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = (event: MediaQueryListEvent) => setMatches(event.matches);
    media.addEventListener?.('change', listener);
    // Fallback for Safari < 14
    // @ts-ignore
    media.addListener && media.addListener(listener);

    return () => {
      media.removeEventListener?.('change', listener);
      // @ts-ignore
      media.removeListener && media.removeListener(listener);
    };
  }, [matches, query]);

  return matches;
};