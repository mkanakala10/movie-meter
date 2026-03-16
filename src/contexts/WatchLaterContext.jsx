import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

const STORAGE_KEY = 'movie-meter-watch-later';

const WatchLaterContext = createContext(null);

export function WatchLaterProvider({ children }) {
  const [watchLater, setWatchLater] = useState(() => {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(watchLater));
    } catch {
      // ignore write errors
    }
  }, [watchLater]);

  const addToWatchLater = (movie) => {
    setWatchLater((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromWatchLater = (movieId) => {
    setWatchLater((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isInWatchLater = (movieId) => watchLater.some((m) => m.id === movieId);

  const value = useMemo(
    () => ({ watchLater, addToWatchLater, removeFromWatchLater, isInWatchLater }),
    [watchLater]
  );

  return <WatchLaterContext.Provider value={value}>{children}</WatchLaterContext.Provider>;
}

export function useWatchLater() {
  const context = useContext(WatchLaterContext);
  if (!context) {
    throw new Error('useWatchLater must be used within a WatchLaterProvider');
  }
  return context;
}
