/**
 * @api {get} /bluecards/:project 특정 project Bluecard 가져오기
 *
 * @apiVersion        1.0.0
 * @apiName GetProjectBluecard
 * @apiGroup Bluecards
 *
 *
 * @apiSuccess {BlueCard} BlueCard Information of the project's BlueCard.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const project = req.query.project as string;
    const exist = await client.project.findFirst({
      where: {
        key: project,
      },
    });
    if (exist) {
      const bluecards = await client.blueCard.findMany({
        where: {
          projectId: exist.id,
        },
        include: {
          project: {
            select: {
              title: true,
              chain: true,
            },
          },
        },
      });
      return res.status(response.HTTP_OK).json({ bluecards });
    }
    return res.status(response.HTTP_OK).json({ error: "project error" });
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
