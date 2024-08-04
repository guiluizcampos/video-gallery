import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { formatDuration } from "../utils/formatDuration";

type VideoGridItemProps = {
  id: string
  title: string
  channel: {
    id: string,
    name: string,
    profileImg: string
  }
  views: number
  postedAt: Date
  duration: number
  thumbnailImg: string
  videoUrl: string
}

const VIEWS_FORMATTER = new Intl.NumberFormat("en-GB", { notation: "compact" });

export function VideoGridItem({ id, title, channel, views, postedAt, duration, thumbnailImg, videoUrl }: VideoGridItemProps) {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  
  useEffect(() => {
    const video = videoRef.current;
    if (video == null) return;
    
    if (isVideoPlaying) {
      video.currentTime = 0;
      video.play();
    } else {
      video.pause();
    }
  }, [isVideoPlaying]);

  return (
    <div 
      className="flex flex-col gap-2" 
      onMouseEnter={() => setIsVideoPlaying(true)} 
      onMouseLeave={() => setIsVideoPlaying(false)}
    >
      <Link to={`/watch/${id}`} className="relative aspect-video">
        <img 
          src={thumbnailImg} 
          className={`block w-full h-full object-cover transition-[border-radius] duration-300 
            ${isVideoPlaying ? "rounded-none" : "rounded-xl"}`} 
        />
        <span className="absolute bottom-1 right-1 bg-secondary-dark text-secondary text-sm px-0.5 rounded">
          {formatDuration(duration)}
        </span>
        <video 
          ref={videoRef} 
          muted 
          playsInline 
          src={videoUrl} 
          className={`block h-full object-cover absolute inset-0 transition-all duration-300 
            ${isVideoPlaying ? "opacity-100 delay-300" : "opacity-0"}`} 
        />
      </Link>
      <div className="flex gap-2">
        <Link to={`/@${channel.id}`} className="flex-shrink-0">
          <img src={channel.profileImg} className="w-12 h-12 rounded-full" />
        </Link>
        <div className="flex flex-col">
          <Link to={`/watch/${id}`} className="font-bold">
            {title}
          </Link>
          <Link to={`/@${channel.id}`} className="text-secondary-text text-sm">
            {channel.name}
          </Link>
          <span className="text-secondary-text text-sm">
            {VIEWS_FORMATTER.format(views)} Views • {postedAt.toLocaleDateString()}
          </span>
        </div>
      </div>
    </div>
  );
}
