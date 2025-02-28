import { useState } from "react";
import { CategoryPills } from "../components/CategoryPills";
import { categories, videos } from "../data/home";
import { PageHeader } from "../layouts/PageHeader";
import { VideoGridItem } from "../components/VideoGridItem";
import { Sidebar } from "../layouts/Sidebar";

export function Home() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  
  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
      <div className="grid grid-cols-[auto,1fr] overflow-auto">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="overflow-x-hidden px-5 pb-4">
          <div className="sticky top-0 bg-white z-10 pb-4">
            <CategoryPills 
              categories={categories} 
              selectedCategory={selectedCategory} 
              onSelect={setSelectedCategory} 
            />
          </div>
          <div className="grid gap-4 grid-cols-[repeat(auto-fill,minmax(300px,1fr))]">
            {videos.map(video => {
              if (!selectedCategory || video.categories.includes(selectedCategory)) 
                return <VideoGridItem key={video.id} {...video} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
