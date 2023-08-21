import { useState } from 'react';

const LIKED_ENVETS_STORAGE_KEY = 'likedEvents';

const getLikedEvents = () => {
  return JSON.parse(localStorage.getItem(LIKED_ENVETS_STORAGE_KEY));
};

const checkIsLiked = (eventId) => {
  const likedEvents = getLikedEvents() || [];
  return likedEvents.includes(eventId);
};

export default function useLikedEvents(eventId) {
  const [isLiked, setIsLiked] = useState(checkIsLiked(eventId));

  const toggleLiked = () => {
    const likedEvents = getLikedEvents() || [];
    console.log('toggle');
    const likedIndex = likedEvents.indexOf(eventId);
    if (likedIndex === -1) {
      likedEvents.push(eventId);
    } else {
      likedEvents.splice(likedIndex, 1);
    }
    setIsLiked(!isLiked);
    localStorage.setItem(LIKED_ENVETS_STORAGE_KEY, JSON.stringify(likedEvents));
  };

  return { isLiked, toggleLiked };
}
