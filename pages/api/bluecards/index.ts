/**
 * @api {get} /bluecards 모든 Bluecard 가져오기
 *
 * @apiVersion        1.0.0
 * @apiName GetAllBluecard
 * @apiGroup Bluecards
 *
 *
 * @apiSuccess {BlueCard} BlueCard Information of the BlueCard.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import { client } from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const bluecards = await client.blueCard.findMany({
      include: {
        project: {
          select: {
            title: true,
            chain: true,
          },
        },
      },
    });
    return res.status(response.HTTP_OK).json({ ok: "bnmbn" });
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["GET"], handler, isPrivate: false })
);
