/* eslint-disable new-cap */
import { Deta } from "deta";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const deta = Deta(import.meta.env.VITE_DETA_KEY);

const db = deta.Base("contact");

export default db;
