import { Clapperboard, Home, Library, History, PlaySquare, Clock, ListVideo } from "lucide-react";
import { SmallSidebarItem } from "../components/SmallSidebarItem";
import { LargeSidebarSection } from "../components/LargeSidebarSection";
import { LargeSidebarItem } from "../components/LargeSidebarItem";
import { playlists, subscriptions } from "../data/sidebar";

type SidebarProps = {
  isSidebarOpen: boolean
}

export function Sidebar({ isSidebarOpen }: SidebarProps) {
  return (
    <>
      <nav className={`sticky top-0 pb-4 flex flex-col w-[75px] ${isSidebarOpen && "lg:hidden" }`}>
        <SmallSidebarItem Icon={Home} title="Home" url="/" />
        <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions" />
        <SmallSidebarItem Icon={Library} title="Library" url="/library" />
      </nav>
      <nav className={`w-56 sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 hidden ${isSidebarOpen && "lg:flex"}`}>
        <LargeSidebarSection >
          <LargeSidebarItem IconOrImgUrl={Home} title="Home" url="/" />
          <LargeSidebarItem IconOrImgUrl={Clapperboard} title="Subscriptions" url="/subscriptions" />
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection visibleItemCount={5}>
          <LargeSidebarItem
            IconOrImgUrl={Library}
            title="Library"
            url="/library"
          />
          <LargeSidebarItem
            IconOrImgUrl={History}
            title="History"
            url="/history"
          />
          <LargeSidebarItem
            IconOrImgUrl={PlaySquare}
            title="Your Videos"
            url="/your-videos"
          />
          <LargeSidebarItem
            IconOrImgUrl={Clock}
            title="Watch Later"
            url="/playlist?list=WL"
          />
          {playlists.map(playlist => (
            <LargeSidebarItem
              key={playlist.id}
              IconOrImgUrl={ListVideo}
              title={playlist.name}
              url={`/playlist?list=${playlist.id}`}
            />
          ))}
        </LargeSidebarSection>
        <hr />
        <LargeSidebarSection title="Subscriptions">
          {subscriptions.map(subscription => (
            <LargeSidebarItem
              key={subscription.id}
              IconOrImgUrl={subscription.imgUrl}
              title={subscription.channelName}
              url={`/@${subscription.id}`}
            />
          ))}
        </LargeSidebarSection>
      </nav>
    </>
  );
}
