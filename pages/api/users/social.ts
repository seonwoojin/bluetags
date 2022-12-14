/**
 * @api {post} /users/social social 로그인 회원정보 확인
 *
 * @apiVersion        1.0.0
 * @apiName SocialUserCheck
 * @apiGroup Users
 *
 * @apiSuccess {User} User Information of the Social User.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (!req.query.emaild) {
      return res.status(response.HTTP_OK).json(null);
    }
    console.log(req.query.email);
    const user = await client.user.findUnique({
      where: { id: req.session.user?.id },
    });
    return res.status(response.HTTP_OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
