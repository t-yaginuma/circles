import { CsMusicPlayer } from "@/components/circles/CsMusicPlayer";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsMain } from "@/components/layouts/CsMain";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CsDrawerUploadMusic } from "@/components/circles/CsDrawerUploadMusic";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";
import {
  Bird,
  Book,
  Bot,
  Code2,
  CornerDownLeft,
  LifeBuoy,
  Mic,
  Paperclip,
  Rabbit,
  Settings,
  Settings2,
  Share,
  SquareTerminal,
  SquareUser,
  Triangle,
  Turtle,
} from "lucide-react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CsProfile } from "@/components/circles/CsProfile";

export default async function Playlists() {
  const { isAuthenticated } = await useGetUser();

  return (
    <CsRootLayoutInternal
      isAuthenticated={isAuthenticated}
      currentPage="playlists"
    >
      <CsMain>
        <CsProfile />
        <Tabs defaultValue="playlist" className="w-full h-full">
          <TabsList>
            <TabsTrigger value="playlist">Playlist</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
          </TabsList>
          <TabsContent value="playlist" className="w-full h-full">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[100px]">date</TableHead>
                  <TableHead>event</TableHead>
                  <TableHead>venue</TableHead>
                  <TableHead className="text-right">link</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">11Dec. 2024</TableCell>
                  <TableCell>Special Event</TableCell>
                  <TableCell>@AmazingVenue</TableCell>
                  <TableCell className="text-right">detail</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="about" className="w-full h-full">
            <p>Organizers</p>
            <p>Users</p>
          </TabsContent>
        </Tabs>
      </CsMain>
    </CsRootLayoutInternal>
  );
}
