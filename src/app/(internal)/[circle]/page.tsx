import { CsMusicPlayer } from "@/components/circles/CsMusicPlayer";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { Button } from "@/components/ui/button";
import { CsForm } from "@/components/circles/CsForm";
import { CsInput } from "@/components/circles/CsInput";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsRadioGroup } from "@/components/circles/CsRadioGroup";
import { uploadFile } from "@/actions/files";
import { CsStack } from "@/components/layouts/CsStack";

export default function Circle() {
  return (
    <>
      <CsHeading heading="Trane." />
      <div>
        <div>
          <CsMusicPlayer></CsMusicPlayer>
          <CsMusicPlayer></CsMusicPlayer>
          <CsMusicPlayer></CsMusicPlayer>
        </div>
        <div>chat</div>
        <div></div>
        <CsStack gap="lg">


        </CsStack>
      </div>
    </>
  );
}
