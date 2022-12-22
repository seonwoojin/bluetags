/**
 * @api {post} /users/sign-in/social/google 구글 로그인
 *
 * @apiVersion        1.0.0
 * @apiName SignIn with Google
 * @apiGroup Users
 *
 * @apiParam {String} email User's unique Email.
 * @apiParam {String} name User's name.
 * @apiParam {String} image User's image URL.
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
    const { name, email, image } = req.body;
    const user = await client.socialUser.findUnique({
      where: {
        email: email,
      },
    });
    if (!user) {
      const newUser = await client.socialUser.create({
        data: {
          email: email,
          name: name,
          profile: image,
          readBlueCard: [],
          subscribe: [],
        },
      });
      req.session.user = {
        id: newUser.id,
      };
      await req.session.save();
      return res.status(response.HTTP_OK).redirect("/").json(newUser);
    } else if (user) {
      req.session.user = {
        id: user.id,
      };
      await req.session.save();
      return res.status(response.HTTP_OK).json(user);
    }
    return res.status(response.HTTP_OK).end();
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
