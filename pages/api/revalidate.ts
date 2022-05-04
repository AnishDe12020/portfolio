// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const password = req.body.password as string;
  const revalidateToken = req.headers["x-webhook-secret"];

  if (!password && !revalidateToken) {
    return res.status(400).json({ message: "No password or revalidate token" });
  }

  let authorized = false;

  if (password) {
    const hashToCompare: string = process.env.ADMIN_PASSWORD_HASH;
    const hash = crypto.createHash("sha256").update(password).digest("hex");
    authorized = hashToCompare === hash;
  } else {
    const revalidateTokenToCompare: string = process.env
      .REVALIDATE_TOKEN as string;
    authorized = revalidateToken === revalidateTokenToCompare;
  }

  if (authorized) {
    return res.status(200).json({ message: "Authorized" });
  } else {
    return res.status(401).json({ message: "Unauthorized" });
  }
};

export default handler;
