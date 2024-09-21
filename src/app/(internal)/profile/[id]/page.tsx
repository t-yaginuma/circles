import { CsMain } from "@/components/layouts/CsMain";
import { CsRootLayoutInternal } from "@/components/layouts/CsRootLayoutInternal";
import useGetUser from "@/hooks/use-get-user";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CsDrawerProfileUpdate } from "@/components/circles/CsDrawerProfileUpdate";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { CsHeadings } from "@/components/circles/CsHeadings";
import { getProfile } from "@/actions/profile";

type Props = {
  params: {
    id: string;
  };
};
export default async function Profile(props: Props) {
  const { params } = props;
  const { loginUserId } = await useGetUser();
  console.log("page-----");
  console.log(params.id);
  const data = await getProfile(params.id);
  console.log(data?.email);
  return (
    <CsRootLayoutInternal loginUserId={loginUserId} currentPage="dashboard">
      <CsMain>
        <CsHeadings
          image={data?.image}
          name={data?.name}
          description={data?.description}
          city={data?.city}
          countryCode={data?.countryCode}
          user={{
            isMe: loginUserId === params.id,
          }}
        />

        <Tabs defaultValue="schedule" className="w-full mt-4">
          <TabsList>
            <TabsTrigger value="schedule">Schedule</TabsTrigger>
            <TabsTrigger value="music">Music</TabsTrigger>
            <TabsTrigger value="playlist">Playlist</TabsTrigger>
          </TabsList>
          <TabsContent value="schedule">
            Coming soon.
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>date</TableHead>
                  <TableHead>event</TableHead>
                  <TableHead>venue</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">11Dec. 2024</TableCell>
                  <TableCell>Special Event</TableCell>
                  <TableCell>@AmazingVenue</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TabsContent>
          <TabsContent value="music">
            Coming soon.
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
          <TabsContent value="playlist">
            Coming soon.
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
        </Tabs>
      </CsMain>

      <CsDrawerProfileUpdate />
    </CsRootLayoutInternal>
  );
}
