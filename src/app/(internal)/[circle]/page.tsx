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

export default async function Circle() {
  const { isAuthenticated } = await useGetUser();
  return (
    <CsRootLayoutInternal
      isAuthenticated={isAuthenticated}
      currentPage="circles"
    >
      <CsMain>
        <CsHeading heading="Trane." />
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
            <div>chat</div>
          </ResizablePanel>
        </ResizablePanelGroup>
      </CsMain>
    </CsRootLayoutInternal>
  );
}
