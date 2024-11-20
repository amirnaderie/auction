"use client";

import Link from "next/link";
import { FC, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import {
  BaseCollapser,
  BaseCollapserHeader,
  BaseCollapserContent,
} from "../collapser/collapser";
import Cookies from "js-cookie";
import { ArrowUpIcon } from "@/app/components/svg/ArrowUpIcon";

type Props = {
  navbarItems: NavbarItem[];
  containerItemsClass?: string;
  itemClass?: string;
  iconsClass?: string;
  activeItemClass?: string;

  selectedItem?: (item: Item) => void;
};
export const NavbarItems: FC<Props> = (props) => {
  const {
    navbarItems,
    containerItemsClass,
    itemClass,
    activeItemClass,
    iconsClass,
    selectedItem,
  } = props;
  const patthname = usePathname();
  const router = useRouter();
  const [items, setItems] = useState<NavbarItem[]>(navbarItems);

  const clickOnHeader = (i: number): void => {
    items[i].isOpen = !items[i].isOpen;

    setItems([...items]);
  };

  const handelSelectedItem = async (item: Item) => {
    try {
      if (selectedItem) selectedItem(item);
      // router.push(item.key);
    } catch (error) {
      signOut();
    }
  };

  const signOut = async () => {
    // const res = await fetch(`/api/auth`, {
    //   method: "GET",
    //   headers: {
    //     "Content-Type": "application/json",
    //   },
    //   credentials: "include", 
    // });
    //Cookies.remove("accessToken");
    //Cookies.remove("refreshToken");
    router.push(`/login`);
  };
  return (
    <div className={`m-auto py-3 my-2 sm:my-5 w-11/12 ${containerItemsClass}`}>
      {items.map((item: NavbarItem, index: number) => {
        const isActive = patthname === item.key;
        if (item.children) {
          return (
            <BaseCollapser key={index}>
              <BaseCollapserHeader
                id={index}
                isOpen={item.isOpen}
                clickOnHeader={(e) => clickOnHeader(e)}
              >
                <div
                  className={`flex items-center justify-between rounded-lg px-4 text-sm  cursor-pointer py-3 ${itemClass}`}
                >
                  <span className="flex items-center">
                    {item.iconComponent}
                    {item.label}
                  </span>

                  <ArrowUpIcon
                    style={
                      item.isOpen
                        ? {
                            transform: `rotateX(180deg)`,
                            transition: `transform 1000ms`,
                          }
                        : {
                            transform: `rotateX(0)`,
                            transition: `transform 1000ms`,
                          }
                    }
                    className={`${iconsClass} ${item.isOpen ? "" : ""} `}
                  />
                </div>
              </BaseCollapserHeader>
              <BaseCollapserContent id={index}>
                <div className="px-4 text-sm rounded-lg my-2">
                  {item.children &&
                    item.children.map((navbarItem: NavbarItem, idx: number) => {
                      const x = patthname === navbarItem.key;
                      return (
                        <Link
                          key={`BaseCollapserContent-${idx}`}
                          className={`transition-colors rounded-lg px-4 w-full cursor-pointer text-sm block mb-2 py-3 ${itemClass} ${
                            x && `text-sm ${activeItemClass}`
                          }`}
                          href={`${navbarItem.key}`}
                          onClick={() => handelSelectedItem(navbarItem)}
                          id="navbar-item"
                        >
                          {navbarItem.label}
                        </Link>
                      );
                    })}
                </div>
              </BaseCollapserContent>
            </BaseCollapser>
          );
        } else {
          return (
            <div className="w-full" key={`navigation-${item.key}`}>
              <Link
                className={`transition-colors rounded-lg px-4 w-full cursor-pointer text-sm block py-3.5 my-1 ${
                  isActive && `${activeItemClass} text-sm `
                } ${itemClass} `}
                href={`${item.key}`}
                onClick={(e) => {
                  handelSelectedItem(item);
                }}
                id="navbar-item"
              >
                {item.label}
              </Link>
            </div>
          );
        }
      })}
      <Link
        className={`transition-colors rounded-lg px-4 w-full cursor-pointer text-sm block py-3.5 mb-1 ${itemClass} `}
        href="/login"
        onClick={signOut}
        id="navbar-item"
      >
        خروج
      </Link>
    </div>
  );
};
