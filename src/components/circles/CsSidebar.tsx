import { Home, Search } from "lucide-react";
import { CsSidebarItem } from "@/components/circles/CsSidebarItem";

type Props = {
  currentPage: CurrentPage;
};

const CsSidebar = (props: Props) => {
  const { currentPage } = props;
  return (
    <div className="sticky top-14 min-h-screen border-r bg-muted/40 md:block p-4 flex h-full max-h-screen flex-col gap-2">
      <div className="flex-1">
        <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
          <CsSidebarItem
            href="/dashboard"
            text="Dashboard"
            isCurrent={currentPage === "dashboard"}
            icon={<Home className="h-4 w-4" />}
          />

          <CsSidebarItem
            href="/explore"
            text="Explore"
            isCurrent={currentPage === "explore"}
            icon={<Search className="h-4 w-4" />}
          />

          <p>version 0.0.0</p>
        </nav>
      </div>
    </div>
  );
};

export { CsSidebar };
