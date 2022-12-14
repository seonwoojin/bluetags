import client from "@libs/server/client";

export default async function getUser(id: string) {
  const user = await client.user.findUnique({
    where: {
      id: id,
    },
  });
  const socialUser = await client.socialUser.findUnique({
    where: {
      id: id,
    },
  });

  return user || socialUser;
}
