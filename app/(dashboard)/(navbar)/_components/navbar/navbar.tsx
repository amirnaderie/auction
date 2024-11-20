"use client";

import { FC, useCallback, useEffect, useState } from "react";

import { NavbarItems } from "./navbarItems";
import Image from "next/image";
import Link from "next/link";
import LogoSvg from "@/app/components/svg/logoSvg";

type Props = {
  navbarItems: NavbarItem[];
  containerClass?: string;
  containerItemsClass?: string;
  itemClass?: string;
  iconsClass?: string;
  activeItemClass?: string;
  logo?: React.ReactNode;

  selectedItem?: (item: Item) => void;
};

export const Navbar: FC<Props> = ({
  navbarItems,
  containerClass = "bg-white",
  containerItemsClass = "bg-white text-gray-500",
  itemClass = "hover:bg-orange-300 hover:text-white text-gray-500 hover:fill-white fill-gray-500",
  activeItemClass = "bg-[#E8651D] text-white",
  iconsClass = "",
  logo,
  selectedItem,
}) => {
  const [isNavClose, setIsNavClose] = useState<boolean>(true);
  const handelClick = useCallback((e: MouseEvent): void => {
    const el = (e.target as HTMLInputElement).id;
    const svgEl = ((e.target as HTMLInputElement).parentNode as SVGAElement).id;
    if (el == "navbar-item" && window.innerWidth < 640) setIsNavClose(true);
    if (el == "darkLayoutNavbar") setIsNavClose((old) => (old = !old));
    if (
      el == "openCloseNavbarFromHeader" ||
      svgEl == "openCloseNavbarFromHeader"
    )
      setIsNavClose((old) => (old = !old));
  }, []);

  useEffect(() => {
    document.addEventListener("click", handelClick);
    return () => document.removeEventListener("click", handelClick);
  }, [handelClick]);

  return (
    <>
      {!isNavClose && (
        <div
          className="fixed w-100 h-screen  min-w-full z-10 md:hidden "
          id="darkLayoutNavbar"
        ></div>
      )}
      <div
        className={`fixed top-0 z-40 h-screen md:static  border-l-2 overflow-y-auto w-[292px] transition-all ${
          isNavClose
            ? "-right-80 border-l-0 transition-all  duration-500 ease-in-out"
            : "right-0 transition-all duration-500 ease-in-out"
        } ${containerClass}`}
      >
        {/* <div
          className="text-rose-600 text-2xl text-left pl-6 pt-4 sm:hidden cursor-pointer"
          id="closeNavbarIcon"
          onClick={openCloseNav}
        >
          x
        </div> */}
        <div></div>
        {/* <div className="flex w-full justify-center items-center mt-4 "> */}
        <Link
          className="flex w-full justify-center items-center mt-4"
          href={"/dashboard"}
        >
          <LogoSvg className="w-40 h-40 2xl:w-48 2xl:h-48 mt-2 2xl:mt-7 " />
        </Link>
        <NavbarItems
          navbarItems={navbarItems}
          containerItemsClass={containerItemsClass}
          itemClass={itemClass}
          iconsClass={iconsClass}
          activeItemClass={activeItemClass}
          selectedItem={selectedItem}
        />
      </div>
    </>
  );
};
