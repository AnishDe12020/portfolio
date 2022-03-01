/* eslint-disable comma-dangle */
/* eslint-disable indent */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import db from "$lib/deta";
import type { Request } from "@sveltejs/kit";
import axios from "axios";

export const post = async (request: Request) => {
  try {
    const body = JSON.parse(request.body as string);
    const email: string = body.email;
    const subject: string = body.subject;
    const message: string = body.message;
    const date = new Date().toString();

    const response = await db.put({ email, subject, message, date });
    const { data, error } = await axios.post(
      `https://www.notiger.xyz/api/events?streamId=${
        import.meta.env.VITE_NOTIGER_STREAM_ID
      }`,
      { email, subject, message, date },
      { headers: { "x-api-key": import.meta.env.VITE_NOTIGER_API_KEY } }
    );
    console.log(data, error);

    return { body: { response } };
  } catch (error) {
    console.error(error);
    return { body: { error } };
  }
};
