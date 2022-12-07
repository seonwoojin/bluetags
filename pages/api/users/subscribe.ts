/**
 * @api {get} /users 회원정보 확인
 *
 * @apiVersion        1.0.0
 * @apiName UserCheck
 * @apiGroup Users
 *
 * @apiSuccess {User} User Information of the User.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

interface Request {
  projectId: string;
  userId: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { projectId, userId }: Request = req.body;
    const user = await client.user.findMany({});
    if (user) {
      console.log(user);
    }
    //const user = req.session.user;
    return res.status(response.HTTP_OK).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
