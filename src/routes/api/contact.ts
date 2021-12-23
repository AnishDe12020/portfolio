/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import db from "$lib/deta";
import type { Request } from "@sveltejs/kit";

export const post = async (request: Request) => {
  console.log(request.body);
  const body = JSON.parse(request.body as string);
  const email: string = body.email;
  const subject: string = body.subject;
  const message: string = body.message;

  const response = await db.put({ email, subject, message });

  console.log(response);

  return { body: { response } };
};
