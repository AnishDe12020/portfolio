/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import db from "$lib/deta";
import type { Request } from "@sveltejs/kit";

export const post = async (request: Request) => {
  try {
    const body = JSON.parse(request.body as string);
    const email: string = body.email;
    const subject: string = body.subject;
    const message: string = body.message;
    const date = new Date().toString();

    const response = await db.put({ email, subject, message, date });

    return { body: { response } };
  } catch (error) {
    console.error(error);
    return { body: { error } };
  }
};
