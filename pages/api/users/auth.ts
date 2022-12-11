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
import nodemailer from "nodemailer";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = req.body;
    const trasnproter = nodemailer.createTransport({
      host: "stmp.gmail.com",
      service: "gmail",
      auth: {
        user: "wlstjsdn12@gmail.com",
        pass: "ylwhsvyoisdjnizu",
      },
    });

    const info = await trasnproter.sendMail({
      from: "wlstjsdn12@gmail.com",
      to: email,
      subject: "[Bluetags] Confirm Your Email",
      html: '<p>Click <a href="http://localhost:3000/signup/auth/validate">here</a> to reset your password</p>',
    });
    return res.status(response.HTTP_OK).end();
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
