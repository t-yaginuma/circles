import { Home, Search } from "lucide-react";
import { CsSidebarItem } from "@/components/circles/CsSidebarItem";

type Props = {
  currentPage: CurrentPage;
};

const CsSidebar = (props: Props) => {
  const { currentPage } = props;
  return (
    <>
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
      </nav>
    </>
  );
};

export { CsSidebar };
