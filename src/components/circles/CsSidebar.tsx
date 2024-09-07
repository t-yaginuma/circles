import { Home, Search } from "lucide-react";
import { CsSidebarItem } from "@/components/circles/CsSidebarItem";

type Props = {
  currentPage?: CurrentPage;
  isAuthenticated?: boolean;
};

const CsSidebar = (props: Props) => {
  const { currentPage, isAuthenticated } = props;

  return (
    <div className="min-h-screen border-r bg-muted/40 md:block p-4 flex h-full max-h-screen flex-col gap-2">
      <div className="sticky top-20 flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-0">
          {isAuthenticated && (
            <CsSidebarItem
              href="/dashboard"
              text="Dashboard"
              isCurrent={currentPage === "dashboard"}
              icon={<Home className="h-4 w-4" />}
            />
          )}

          <CsSidebarItem
            href="/circles"
            text="Circles"
            isCurrent={currentPage === "circles"}
            icon={<Search className="h-4 w-4" />}
          />
          <CsSidebarItem
            href="/playlists"
            text="Playlists"
            isCurrent={currentPage === "playlists"}
            icon={<Search className="h-4 w-4" />}
          />
        </nav>
      </div>
    </div>
  );
};

export { CsSidebar };
