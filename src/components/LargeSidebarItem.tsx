import { ElementType } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type LargeSidebarItemProps = {
  IconOrImgUrl: ElementType | string
  title: string
  url: string
}

export function LargeSidebarItem({ IconOrImgUrl, title, url }: LargeSidebarItemProps) {
  const location = useLocation();
  const isActive = url === location.pathname;

  return (
    <NavLink 
      to={url}
      className={twMerge(
        buttonStyles({ style: "ghost" }),
        `flex items-center rounded-lg gap-4 p-3 
        ${isActive && "bg-neutral-100 hover:bg-secondary"}`
      )}
    >
      {typeof IconOrImgUrl === "string" 
        ? <img src={IconOrImgUrl} className="w-6 h-6 rounded-full" />
        : <IconOrImgUrl color={isActive ? "#111" : "gray"} className="min-w-6 min-h-6" />
      }
      <p className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</p>
    </NavLink>
  );
}
