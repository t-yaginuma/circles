import { uploadFile } from "@/actions/files";
import { CsButton } from "@/components/circles/CsButton";
import { CsCircleCard } from "@/components/circles/CsCircleCard";
import { CsDrawerCircle } from "@/components/circles/CsDrawerCircle";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { CsForm } from "@/components/circles/CsForm";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsInput } from "@/components/circles/CsInput";
import { CsRadioGroup } from "@/components/circles/CsRadioGroup";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRow } from "@/components/layouts/CsRow";
import { CsStack } from "@/components/layouts/CsStack";
import { Button } from "@/components/ui/button";

export default function Explore() {
  return (
    <CsMain>
      <CsHeading heading="Explore" />
      <div>
        <CsRow gap="lg">
          <CsCircleCard
            name="Open1"
            href="/open1"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="Trane"
            href="/trane"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
          <CsCircleCard
            name="vancouver"
            href="/vancouver"
            image="https://placehold.jp/150x150.png"
            description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
          />
        </CsRow>
      </div>

      <CsDrawerCircle />
    </CsMain>
  );
}
