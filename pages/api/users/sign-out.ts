/**
 * @api {post} /users/sign-out 로그아웃
 *
 * @apiVersion        1.0.0
 * @apiName SignOut
 * @apiGroup Users
 *
 *
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import { withApiSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    await req.session.destroy();
    return res.status(response.HTTP_OK).end();
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST);
  }
}

export default withApiSession(withHandler({ methods: ["POST"], handler }));
