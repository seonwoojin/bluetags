import Header from "./layout/Header";
import SideBar from "./layout/SideBar";
import { useRouter } from "next/router";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const router = useRouter();
  return (
    <>
      {[
        "/service",
        "/news",
        "/watchlist",
        "/calendar",
        "/subscribe",
        "/docs",
      ].includes(router.pathname) ? (
        <>
          <Header />
          <SideBar />
        </>
      ) : null}
      <main>{children}</main>
    </>
  );
}
