import { CsCircleCard } from "@/components/circles/CsCircleCard";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRow } from "@/components/layouts/CsRow";
import { Suspense } from "react";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";

export default async function Playlists() {
  const { loginUserId } = await useGetUser();

  return (
    <CsRootLayoutInternal loginUserId={loginUserId} currentPage="playlists">
      <CsMain>
        <CsHeading heading="Playlists" />
        <div>
          <CsRow gap="lg">
            <Suspense fallback={<div>Loading...</div>}>
              <CsCircleCard
                name="Open1"
                href="/playlists/1"
                image="https://placehold.jp/150x150.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <CsCircleCard
                name="Trane"
                href="/playlists/2"
                image="https://placehold.jp/150x150.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <CsCircleCard
                name="vancouver"
                href="/playlists/3"
                image="https://placehold.jp/150x150.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
              />
            </Suspense>
            <Suspense fallback={<div>Loading...</div>}>
              <CsCircleCard
                name="vancouver"
                href="/playlists/4"
                image="https://placehold.jp/150x150.png"
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit ess"
              />
            </Suspense>
          </CsRow>
        </div>
      </CsMain>
    </CsRootLayoutInternal>
  );
}
