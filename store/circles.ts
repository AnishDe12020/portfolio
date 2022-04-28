import create from "zustand";
import type CirclesState from "types/circles";

const useCircles = create<CirclesState>(set => ({
  isEnabled: true,
  toggleCircles: () => set(state => ({ isEnabled: !state.isEnabled })),
}));

export default useCircles;
