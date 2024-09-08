import { CsHeading } from "@/components/circles/CsHeading";
import { CsDrawerUserEdit } from "@/components/circles/CsDrawerUserEdit";
import { CsMain } from "@/components/layouts/CsMain";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Label } from "@radix-ui/react-label";
import { CsStack } from "@/components/layouts/CsStack";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { CsRow } from "@/components/layouts/CsRow";
import { US } from "country-flag-icons/react/3x2";
import Link from "next/link";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CsTextLink } from "@/components/circles/CsTextLink";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CsProfile } from "@/components/circles/CsProfile";

export default async function Profile() {
  const { isAuthenticated } = await useGetUser();

  return (
    <CsRootLayoutInternal
      isAuthenticated={isAuthenticated}
      currentPage="dashboard"
    >
      <CsMain>
        <CsProfile />

        <Tabs defaultValue="schedule" className="w-full mt-4">
          <TabsList>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="playlist">Playlist</TabsTrigger>
          </TabsList>
          <TabsContent value="schedule">
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
          <TabsContent value="music">
            <Table>
              <TableCaption>Live Schedules</TableCaption>
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
          <TabsContent value="playlist">
            <Table>
              <TableCaption>Live Schedules</TableCaption>
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
        </Tabs>
        <CsDrawerUserEdit />
      </CsMain>
    </CsRootLayoutInternal>
  );
}
