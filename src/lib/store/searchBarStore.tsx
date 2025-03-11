import { create } from "zustand";
import dayjs from "dayjs";

interface SearchBarState {
  mode: string;
  setMode: (value: string) => void;

  departDate: dayjs.Dayjs;
  setDepartDate: (value: dayjs.Dayjs) => void;

  returnDate: dayjs.Dayjs;
  setReturnDate: (value: dayjs.Dayjs) => void;
}

export const useSearchBarStore = create<SearchBarState>((set) => ({
  mode: "oneway",
  setMode: (value) => set({ mode: value }),

  departDate: dayjs(),
  setDepartDate: (value) => set({ departDate: value }),

  returnDate: dayjs(),
  setReturnDate: (value) => set({ returnDate: value }),
}));
