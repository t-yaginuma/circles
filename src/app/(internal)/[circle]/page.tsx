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

export default async function Circle() {
  const { isAuthenticated } = await useGetUser();
  return (
    <CsRootLayoutInternal
      isAuthenticated={isAuthenticated}
      currentPage="circles"
    >
      <CsMain>
        <CsProfile />
        <Tabs defaultValue="session" className="w-full h-full">
          <TabsList>
            <TabsTrigger value="session">Session</TabsTrigger>
            <TabsTrigger value="about">About</TabsTrigger>
            <TabsTrigger value="store">Store</TabsTrigger>
          </TabsList>
          <TabsContent value="session" className="w-full h-full">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel>
                <div>
                  <div>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                  </div>
                  <CsDrawerUploadMusic />
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel>
                <div className="relative flex h-full min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                  <Badge variant="outline" className="absolute right-3 top-3">
                    Output
                  </Badge>
                  <div className="flex-1" />
                  <form
                    className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring"
                    x-chunk="dashboard-03-chunk-1"
                  >
                    <Label htmlFor="message" className="sr-only">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-12 resize-none border-0 p-3 shadow-none focus-visible:ring-0"
                    />
                    <div className="flex items-center p-3 pt-0">
                      <TooltipProvider>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Paperclip className="size-4" />
                              <span className="sr-only">Attach file</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            Attach File
                          </TooltipContent>
                        </Tooltip>
                        <Tooltip>
                          <TooltipTrigger asChild>
                            <Button variant="ghost" size="icon">
                              <Mic className="size-4" />
                              <span className="sr-only">Use Microphone</span>
                            </Button>
                          </TooltipTrigger>
                          <TooltipContent side="top">
                            Use Microphone
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                      <Button
                        type="submit"
                        size="sm"
                        className="ml-auto gap-1.5"
                      >
                        Send Message
                        <CornerDownLeft className="size-3.5" />
                      </Button>
                    </div>
                  </form>
                </div>
              </ResizablePanel>
            </ResizablePanelGroup>
          </TabsContent>
          <TabsContent value="about" className="w-full h-full">
            <p>Organizers</p>
            <p>Users</p>
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
          <TabsContent value="store" className="w-full h-full">
            <p>Beautiful Marchandises</p>
          </TabsContent>
        </Tabs>
      </CsMain>
    </CsRootLayoutInternal>
  );
}
