import { withIronSessionApiRoute, withIronSessionSsr } from "iron-session/next";

declare module "iron-session" {
  interface IronSessionData {
    user?: {
      id: string;
    };
  }
}

const cookieOptions = {
  cookieName: "bluetags",
  password: process.env.COOKIE_PASSWORD!,
  ttl: 60 * 60 * 6,
};

/**req.body 안에 있는 token 을 가져와서 디코딩 해줌 */
export function withApiSession(handler: any) {
  return withIronSessionApiRoute(handler, cookieOptions);
}

export function withSsrSession(handler: any) {
  return withIronSessionSsr(handler, cookieOptions);
}
