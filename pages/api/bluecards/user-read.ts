/**
 * @api {post} /bluecards/user-read 프로젝트 구독
 *
 * @apiVersion        1.0.0
 * @apiName ReadBluecards
 * @apiGroup Bluecards
 *
 * @apiParam {String} email User's unique Email.
 * @apiParam {String} bluecardId Bluecard's id.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

interface Request {
  bluecardId: string;
  email: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { bluecardId, email }: Request = req.body;
    const user = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    const bluecard = await client.blueCard.findFirst({
      where: {
        id: bluecardId,
      },
    });
    if (user && bluecard) {
      if (!user.readBlueCard.includes(bluecardId)) {
        const updateUser = await client.user.update({
          where: {
            email: email,
          },
          data: {
            readBlueCard: {
              push: bluecardId,
            },
          },
        });
        return res
          .status(response.HTTP_OK)
          .json({ subscribe: updateUser.readBlueCard });
      }
    }
    //const user = req.session.user;
    return res.status(response.HTTP_OK).end();
  } catch (error) {
    console.log(error);
    return res.status(response.HTTP_BAD_REQUEST).json({ error });
  }
}

export default withApiSession(
  withHandler({ methods: ["POST"], handler, isPrivate: false })
);
