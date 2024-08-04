import { Link, useParams } from "react-router-dom";
import { Sidebar } from "../layouts/Sidebar";
import { PageHeader } from "../layouts/PageHeader";
import { useState } from "react";
import { videos } from "../data/home";

export function WatchVideo() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const params = useParams();
  const { videoId } = params;
  const video = videos.find(video => video.id === videoId);

  if (!video) return;

  const SUBSCRIBERS_FORMATTER = new Intl.NumberFormat("en-GB", { notation: "compact" });

  return (
    <div className="max-h-screen flex flex-col">
      <PageHeader isSidebarOpen={isSidebarOpen} toggleSidebar={setIsSidebarOpen} />
      <div className="grid grid-cols-[auto,1fr] overflow-auto">
        <Sidebar isSidebarOpen={isSidebarOpen} />
        <div className="px-5 pb-4 w-fill flex flex-col gap-3">
          <div className="h-6/6 bg-black flex justify-center">
            <video autoPlay controls src={video.videoUrl} className="h-full justify-self-center" />
          </div>
          <div className="px-8 flex flex-col gap-3">
            <h1 className="font-bold text-xl">{video.title}</h1>
            <div className="flex gap-2">
              <Link to={`/@${video.channel.id}`}>
                <img src={video.channel.profileImg} className="w-12 h-12 rounded-full flex-shrink-0" />
              </Link>
              <div className="flex flex-col gap-0.5">
                <Link to={`/@${video.channel.id}`} className="font-bold">
                  {video.channel.name}
                </Link>
                <span className="text-secondary-text text-sm">
                  {SUBSCRIBERS_FORMATTER.format(video.channel.subscribers)} Subscribers
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}