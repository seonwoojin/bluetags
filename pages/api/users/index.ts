import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!req.session.user?.id) {
      return res.status(response.HTTP_OK).json(null);
    }
    const user = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    return res.status(response.HTTP_OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST);
  }
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);