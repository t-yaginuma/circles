import { CsMusicPlayer } from "@/components/circles/CsMusicPlayer";
import { CsFileUploader } from "@/components/circles/CsFileUploader";
import { Button } from "@/components/ui/button";
import { CsForm } from "@/components/circles/CsForm";
import { CsInput } from "@/components/circles/CsInput";
import { CsHeading } from "@/components/circles/CsHeading";
import { CsRadioGroup } from "@/components/circles/CsRadioGroup";
import { uploadFile } from "@/actions/files";
import { CsStack } from "@/components/layouts/CsStack";

export default function App() {
  return (
    <>
      <div>
        <div>
          <CsMusicPlayer></CsMusicPlayer>
          <CsMusicPlayer></CsMusicPlayer>
          <CsMusicPlayer></CsMusicPlayer>
        </div>
        <div>chat</div>
        <div></div>
        <CsStack gap="lg">
          <CsStack gap="lg">
            <CsHeading
              heading="User Edit"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

            <CsForm action={uploadFile}>
              <CsStack gap="md">
                <CsFileUploader
                  name="Image"
                  label="Image"
                  type="image"
                ></CsFileUploader>
                <CsInput
                  name="artistName"
                  label="Artist Name"
                  type="text"
                  placeholder="Yagi"
                />
                <CsInput
                  name="songDescription"
                  label="Description"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
                />
                <CsInput
                  name="location"
                  label="Location"
                  type="text"
                  placeholder="Vancouver"
                />
                <Button className="mt-4">Update Profile</Button>
              </CsStack>
            </CsForm>
          </CsStack>
          <CsStack gap="lg">
            <CsHeading
              heading="Song put"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
            />

            <CsForm action={uploadFile}>
              <CsStack gap="md">
                <CsFileUploader
                  name="artwork"
                  label="Artwork"
                  type="image"
                ></CsFileUploader>
                <CsInput
                  name="songTitle"
                  label="Song Title"
                  type="text"
                  placeholder="Natural Mystic"
                />
                <CsInput
                  name="songDescription"
                  label="Description"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitati"
                />
                <CsFileUploader
                  name="music"
                  label="SongFile"
                  type="image"
                ></CsFileUploader>
                <Button className="mt-4">Add music</Button>
              </CsStack>
            </CsForm>
          </CsStack>
          <CsStack gap="lg">
            <CsHeading
              heading="Establish new circle!"
              description="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco l"
            />

            <CsForm action={uploadFile}>
              <CsStack gap="md">
                <CsFileUploader
                  name="artwork"
                  label="Circle Artwork"
                  type="image"
                ></CsFileUploader>
                <CsInput
                  name="name"
                  label="Circle Name"
                  type="text"
                  placeholder="Rasta foundation"
                />
                <CsInput
                  name="songDescription"
                  label="Description"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magnai"
                />
                <CsInput
                  name="tags"
                  label="tag"
                  type="text"
                  placeholder="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod t"
                />
                <CsRadioGroup name="public" label="Visibility" />
                <Button className="mt-4">Establish Your Circle</Button>
              </CsStack>
            </CsForm>
          </CsStack>
        </CsStack>
      </div>
    </>
  );
}
