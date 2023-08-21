import { create } from 'zustand';

//Hook para manejar un estado global
const useEventResults = create((set) => ({
  data: [],
  error: {},
  isLoading: false,
  fetchEvents: async (term) => {
    try {
      await set(() => ({ isLoading: true }));
      const events = await fetch(
        `${import.meta.env.VITE_BASE_URL}.json?apikey=${
          import.meta.env.VITE_TM_API_KEY
        }&countryCode=MX${term?.length ? term : ''}`
      );
      const data = await events.json();
      await set({ data, isLoading: false });
    } catch (error) {
      await set(() => ({ error }));
    }
  },
}));

export default useEventResults;
