/**
 * @api {post} /users/sign-up 회원가입
 *
 * @apiVersion        1.0.0
 * @apiName SignUp
 * @apiGroup Users
 *
 * @apiParam {String} email User's unique Email.
 * @apiParam {String} password User's password.
 * @apiParam {String} confirm_password User's confirm password.
 *
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import bcrypt from "bcrypt";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email, password, confirm_password } = req.body;

    const emailExists = await client.user.findUnique({
      where: {
        email,
      },
    });

    if (emailExists) {
      return res.status(response.HTTP_UNAUTHORIZED).json({
        error: { email: "Email already in use." },
      });
    }

    if (password != confirm_password) {
      return res.status(response.HTTP_UNAUTHORIZED).json({
        error: { confirm_password: "Password confirmation does not match." },
      });
    }

    const user = await client.user.create({
      data: {
        email,
        password: await bcrypt.hash(password, 5),
        readBlueCard: [],
        subscribe: [],
      },
    });

    const token = await client.token.create({
      data: {
        user: {
          connect: {
            email: user.email,
          },
        },
      },
    });

    return res.status(response.HTTP_OK).json({ user });
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withHandler({ methods: ["POST"], handler, isPrivate: false });
