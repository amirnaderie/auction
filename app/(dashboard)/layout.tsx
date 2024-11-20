import { cookies, headers } from "next/headers";
import { redirect } from "next/navigation";
import { Header } from "./(navbar)/_components/header";
import menus from "@/app/(dashboard)/(navbar)/_components/navbar/menus.json";
import { Navbar } from "./(navbar)/_components/navbar";
import LogoSvg from "../components/svg/logoSvg";

async function getUser() {
  //const headersList = headers();
  const nextCookies = cookies(); // Get cookies object
  const userCookie = (nextCookies as any).get("accessToken"); // Find cookie
  const res = await fetch(`${process.env.BACK_URL}/users/me`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Cookie: userCookie.value, // Send cookies with the request
    },
    credentials: "include", // This is the key part
  });
  if (!res.ok) redirect("/login");
}
export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  // const user = await getUser();

  return (
    <div className="h-screen font-iranSans flex max-md:flex-col max-md:justify-start">
      <Header />
      <Navbar
        navbarItems={menus}
        logo={<LogoSvg className="w-36 h-28 2xl:w-44 2xl:h-44 mt-1 " />}
      />
      <div className="flex flex-grow items-center max-md:h-[calc(100%-5rem)] justify-center md:w-full bg-slate-100 ">
        <main className="h-full w-full">{children}</main>
      </div>
    </div>
  );
}
