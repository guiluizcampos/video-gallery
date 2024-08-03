import { ElementType } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { buttonStyles } from "./Button";

type SmallSidebarItemProps = {
  Icon: ElementType
  title: string
  url: string
}

export function SmallSidebarItem({ Icon, title, url }: SmallSidebarItemProps) {
  const location = useLocation();
  const isActive = url === location.pathname;
  
  return (
    <NavLink 
      to={url}
      className={twMerge(
        buttonStyles({ style: "ghost" }),
        "flex flex-col items-center py-4 px-1 rounded-xl gap-2 ml-1"
      )}
    >
      <Icon 
        color={isActive ? "#111" : "gray"} 
        strokeWidth={isActive ? 2 : 1.5} 
        className="w-6 h-6" 
      />
      <p className="text-2xs overflow-hidden text-ellipsis text-center w-[69px]">
        {title}
      </p>
    </NavLink>
  );
}