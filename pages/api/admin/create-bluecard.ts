/**
 * @api {post} /admin/create-bluecard Bluecard 생성
 *
 * @apiVersion        1.0.0
 * @apiName CreateBluecard
 * @apiGroup Admin
 *
 * @apiParam {String} thumbnail Bluecard's thumbnail.
 * @apiParam {String} summary Bluecard's summary.
 * @apiParam {String} description Bluecard's description.
 * @apiParam {String} bluetags Bluecard's bluetags.
 * @apiParam {String} sns Bluecard's sns.
 * @apiParam {String} [deadline] Bluecard's deadline.
 * @apiParam {String} project Bluecard's project.
 *
 * @apiSuccess {BlueCard} BlueCard Information of the BlueCard.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import { client } from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

interface Request {
  title: string;
  thumbnail: string;
  summary: string;
  description: string;
  bluetags: string;
  sns: string;
  deadline: Date;
  project: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const {
      title,
      thumbnail,
      summary,
      description,
      bluetags,
      sns,
      deadline,
      project,
    }: Request = req.body;
    const bluetagsArray = bluetags.replaceAll(" ", "").split(",");
    const bluecard = await client.blueCard.create({
      data: {
        title,
        thumbnail,
        summary,
        description,
        bluetags: bluetagsArray,
        sns,
        deadline: deadline ? deadline : new Date(),
        project: {
          connect: {
            key: project,
          },
        },
      },
    });
    return res.status(response.HTTP_OK).json({ bluecard });
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
