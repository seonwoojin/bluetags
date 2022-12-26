/**
 * @api {get} /users/check 로그인 되어있는지 확인
 *
 * @apiVersion        1.0.0
 * @apiName User Login Check
 * @apiGroup Users
 *
 * @apiSuccess {User} User Information of the User.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";
import getUser from "@libs/server/getUser";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!req.session.user?.id) {
      return res.status(response.HTTP_OK).json(null);
    }
    const user = await getUser(req.session.user.id);
    return res.status(response.HTTP_OK).json(user);
  } catch (error) {
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
