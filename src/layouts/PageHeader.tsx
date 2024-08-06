import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import logo from "../assets/logo.png";

type PageHeaderProps = {
  isSidebarOpen: boolean
  toggleSidebar: (state: boolean) => void
}

export function PageHeader({ isSidebarOpen, toggleSidebar }: PageHeaderProps) {
  const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);

  return (
    <div className="flex gap-10 lg:gap-20 justify-between pt-2 mb-2 mx-2">
      {!showFullWidthSearch && (
        <div className="flex gap-4 items-center flex-shrink-0">
          <Button 
            onClick={() => toggleSidebar(!isSidebarOpen)} 
            style="ghost" 
            size="icon" 
            className="max-lg:hidden"
          >
            <Menu />
          </Button>
          <Link to="/" className="max-lg:ml-5">
            <img src={logo} className="h-10" alt="Youtube Logo" />
          </Link>
        </div>
      )}
      <div className={`gap-4 flex-grow justify-center ${showFullWidthSearch ? "flex" : "hidden sm:flex"}`}>
        {showFullWidthSearch && (
          <Button 
            onClick={() => setShowFullWidthSearch(false)} 
            type="button" 
            size="icon" 
            style="ghost" 
            className="flex-shrink-0"
          >
            <ArrowLeft />
          </Button>
        )}
        <div className="flex flex-grow max-w-[600px]">
          <input 
            type="search" 
            placeholder="Search" 
            className="rounded-l-full border border-secondary-border shadow-inner 
              shadow-secondary py-1 px-4 text-lg w-full focus:border-blue-500 outline-none" 
          />
          <Button className="py-2 px-4 rounded-r-full flex-shrink-0 
              border border-secondary-border border-l-0">
            <Search />
          </Button>
        </div>
        <Button type="button" size="icon" className="flex-shrink-0">
          <Mic />
        </Button>
      </div>
      {!showFullWidthSearch && (
        <div className="flex flex-shrink-0 md:gap-2">
          <Button 
            onClick={() => setShowFullWidthSearch(true)} 
            size="icon" 
            style="ghost" 
            className="sm:hidden"
          >
            <Search />
          </Button>
          <Button size="icon" style="ghost" className="sm:hidden">
            <Mic />
          </Button>
          <Button size="icon" style="ghost">
            <Upload />
          </Button>
          <Button size="icon" style="ghost">
            <Bell />
          </Button>
          <Button size="icon" style="ghost">
            <User />
          </Button>
        </div>
      )}
    </div>
  );
}
