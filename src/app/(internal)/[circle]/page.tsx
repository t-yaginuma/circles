import { CsMusicPlayer } from "@/components/circles/CsMusicPlayer";
import { CsMain } from "@/components/layouts/CsMain";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CsDrawerUploadMusic } from "@/components/circles/CsDrawerUploadMusic";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";
import { CornerDownLeft, Mic, Paperclip } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CsHeadings } from "@/components/circles/CsHeadings";
import { CsStack } from "@/components/layouts/CsStack";
import { CsMessageBalloon } from "@/components/circles/CsMessageBalloon";

export default async function Circle() {
  const { loginUserId } = await useGetUser();

  return (
    <CsRootLayoutInternal loginUserId={loginUserId} currentPage="circles">
      <CsMain>
        <CsHeadings
          image="https://placehold.jp/150x150.png"
          name="Open 1"
          description="中目黒のイベントです。"
          circle={{
            authority: 0,
          }}
        />
        <Tabs defaultValue="session" className="flex flex-col w-full flex-grow">
          <div>
            <TabsList>
              <TabsTrigger value="session">Open Session</TabsTrigger>
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="store">Store</TabsTrigger>
            </TabsList>
          </div>

          <TabsContent value="session" className="w-full flex-grow mt-4">
            <ResizablePanelGroup direction="horizontal">
              <ResizablePanel defaultSize={65}>
                <div className="pr-4 py-4">
                  <CsStack gap="lg">
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                    <CsMusicPlayer></CsMusicPlayer>
                  </CsStack>
                </div>
              </ResizablePanel>
              <ResizableHandle />
              <ResizablePanel defaultSize={35}>
                <div className="h-full pl-4">
                  <div className="sticky top-0 left-0 flex min-h-[50vh] flex-col rounded-xl bg-muted/50 p-4 lg:col-span-2">
                    <CsStack gap="md">
                      <CsMessageBalloon text="dopes" />
                      <CsMessageBalloon text="Yeah" />
                      <CsMessageBalloon text="マジやばい" />
                      <CsMessageBalloon text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）" />
                      <CsMessageBalloon text="マジやばい" isMe />
                      <CsMessageBalloon text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）" />
                      <CsMessageBalloon
                        text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）"
                        isMe
                      />
                      <CsMessageBalloon text="マジやばい" />
                      <CsMessageBalloon text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）" />
                      <CsMessageBalloon text="マジやばい" isMe />
                      <CsMessageBalloon text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）" />
                      <CsMessageBalloon
                        text="つれづれなるまゝに、日暮らし、硯にむかひて、心にうつりゆくよしなし事を、そこはかとなく書きつくれば、あやしうこそものぐるほしけれ。（Wikipediaより）"
                        isMe
                      />
                    </CsStack>

                    <form
                      className="relative overflow-hidden rounded-lg border bg-background focus-within:ring-1 focus-within:ring-ring mt-8"
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
