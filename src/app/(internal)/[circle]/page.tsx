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

export default function Circle() {
  return (
    <CsMain>
      <CsHeading heading="Trane." />
      <div>
        <div>
          <CsMusicPlayer></CsMusicPlayer>
          <CsMusicPlayer></CsMusicPlayer>
          <CsMusicPlayer></CsMusicPlayer>
        </div>
        <div>chat</div>
      </div>
    </CsMain>
  );
}
