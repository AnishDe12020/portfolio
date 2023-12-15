import { atom } from "jotai"

export const lastViewedPhotoAtom = atom<number>(0)
export const lastClickedPhotoAtom = atom<number | null>(null)
