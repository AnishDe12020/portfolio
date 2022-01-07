import LogSnag from "logsnag";

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const logsnag = new LogSnag(import.meta.env.VITE_LOGSNAG_TOKEN);

export default logsnag;
