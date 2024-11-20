"use client";

import BarSvg from "@/app/components/svg/barSvg";
import React, { FC } from "react";

export const Header: FC = () => {
  return (
    <>
      <div
        id="openCloseNavbarFromHeader"
        className={`w-full bg-white text-black  h-12  cursor-pointer flex items-center justify-center relative md:hidden `}
      >
        <div className={`absolute right-2 md:hidden px-4`}>
          <BarSvg id="openCloseNavbarFromHeader" width={30} height={30} />
        </div>
      </div>
    </>
  );
};
