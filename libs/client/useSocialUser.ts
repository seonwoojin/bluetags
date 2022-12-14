import { User } from "@prisma/client";
import useSWR from "swr";
import { useSession } from "next-auth/react";
import useMutation from "./useMutation";

interface UserResponse {
  data: User;
}

export default function useSocialUser() {
  const { data: session } = useSession();
  console.log(session);
  const { data, error } = useSWR<UserResponse>(
    `/api/users/social?email=${session?.user?.email}`
  );
  if (session?.user?.email) {
  }
  return {};
}
