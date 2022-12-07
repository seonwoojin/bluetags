/**
 * @api {post} /users/subscribe 프로젝트 구독
 *
 * @apiVersion        1.0.0
 * @apiName SubscribeProject
 * @apiGroup Users
 *
 * @apiSuccess {String[]} User.subscribe Information of the User.subscribe.
 */

import { NextApiRequest, NextApiResponse } from "next";
import { response } from "constants/response";
import withHandler from "@libs/server/withHandler";
import client from "@libs/server/client";
import { withApiSession } from "@libs/server/withSession";

interface Request {
  projectId: string;
  email: string;
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { projectId, email }: Request = req.body;
    const user = await client.user.findUnique({
      where: {
        email: email,
      },
    });
    const project = await client.project.findFirst({
      where: {
        id: projectId,
      },
    });
    if (user && project) {
      if (user.subscribe.includes(projectId)) {
        const preArray: string[] = [];
        user.subscribe.map((project) => {
          if (project !== projectId) preArray.push(project);
        });
        const updateUser = await client.user.update({
          where: {
            email: email,
          },
          data: {
            subscribe: preArray,
          },
        });
        return res
          .status(response.HTTP_OK)
          .json({ subscribe: updateUser.subscribe });
      } else {
        const updateUser = await client.user.update({
          where: {
            email: email,
          },
          data: {
            subscribe: {
              push: projectId,
            },
          },
        });
        return res
          .status(response.HTTP_OK)
          .json({ subscribe: updateUser.subscribe });
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
