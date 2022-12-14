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
import bcrypt from "bcrypt";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password } = req.body;
    const user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (!user) {
      return res.status(response.HTTP_UNAUTHORIZED).json({
        error: "An account with this email does not exitst",
      });
    }

    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(response.HTTP_UNAUTHORIZED).json({
        error: "Wrong password.",
      });
    }

    if (!user.auth) {
      return res.status(response.HTTP_OK).json({ auth: false });
    }

    req.session.user = {
      id: user.id,
    };
    await req.session.save();
    return res.status(response.HTTP_OK).json(user);
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
