// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import crypto from "crypto";
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
};

const handler = async (req: NextApiRequest, res: NextApiResponse<Data>) => {
  const password = req.body.password as string;

  if (!password) {
    return res.status(400).json({ message: "No password" });
  }

  const hashToCompare: string = process.env.ADMIN_PASSWORD_HASH as string;
  const hash = crypto.createHash("sha256").update(password).digest("hex");
  const validPassword: boolean = hash === hashToCompare;

  if (!validPassword) {
    return res.status(403).json({ message: "Unauthorized" });
  } else {
    return res.status(200).json({ message: "Authorized" });
  }
};

export default handler;
