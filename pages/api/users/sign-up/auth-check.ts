/**
 * @api {post} /users/sign-in 로그인
 *
 * @apiVersion        1.0.0
 * @apiName SignIn
 * @apiGroup Users
 *
 * @apiParam {String} email User's unique Email.
 * @apiParam {String} password User's password.
 *
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { tokenId } = req.body;
    const token = await client.token.findFirst({
      where: {
        id: tokenId,
      },
    });
    console.log(token);
    if (token) {
      const user = await client.user.update({
        where: {
          id: token.userId,
        },
        data: {
          auth: true,
        },
      });
      await client.token.deleteMany({
        where: {
          userId: token.userId,
        },
      });
      return res.status(response.HTTP_OK).end();
    } else {
      return res.status(response.HTTP_BAD_REQUEST).end();
    }
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
