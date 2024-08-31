import { CsMusicPlayer } from "@/components/circles/CsMusicPlayer";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { Button } from "@/components/ui/button";
import { CsForm } from "@/components/circles/CsForm";
import { CsInput } from "@/components/circles/CsInput";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsRadioGroup } from "@/components/circles/CsRadioGroup";
import { uploadFile } from "@/actions/files";
import { CsStack } from "@/components/layouts/CsStack";
import { CsMain } from "@/components/layouts/CsMain";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";
import { CsDrawerCircle } from "@/components/circles/CsDrawerCircle";
import { CsButton } from "@/components/circles/CsButton";
import { CsDrawerUploadMusic } from "@/components/circles/CsDrawerUploadMusic";

export default function Circle() {
  return (
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
  );
}
