"use client";
import WavesurferPlayer from "@wavesurfer/react";
import WaveSurfer, {
  type WaveSurferEvents,
  type WaveSurferOptions,
} from "wavesurfer.js";
import { useState } from "react";
import { CsStack } from "@/components/layouts/CsStack";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import { CsRow } from "@/components/layouts/CsRow";
import Link from "next/link";
import { Heart, Play, Pause } from "lucide-react";

type Props = {
  // isPlaying: boolean;
  // action: (formData: FormData) => Promise<void>;
};

const CsMusicPlayer = (props: Props) => {
  const {} = props;
  const [wavesurfer, setWavesurfer] = useState<WaveSurfer | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws: WaveSurfer) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <>
      <CsStack gap="sm">
        <CsRow isSpaceBetween isItemCenter>
          <CsRow gap="sm">
            <div className="flex items-center gap-4">
              <Avatar className="hidden h-9 w-9 sm:flex">
                <AvatarImage
                  src="https://dwixiyvbqbrsernfiuwj.supabase.co/storage/v1/object/public/images/profiles/9fcd1d35-1a07-4efd-9eba-56c3173de79c.jpg"
                  alt="@shadcn"
                />
                <AvatarFallback>no Image</AvatarFallback>
              </Avatar>
            </div>

            <div>
              <div>Yagi</div>
              <div>Song1</div>
            </div>
          </CsRow>

          <Heart />
        </CsRow>
        <div className="flex w-full gap-2">
          <button onClick={onPlayPause}>
            {isPlaying ? <Pause /> : <Play />}
          </button>
          <div className="flex-grow">
            <WavesurferPlayer
              waveColor={"purple"}
              height={50}
              url="/hoge.mp3"
              onReady={onReady}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
          </div>
        </div>
      </CsStack>
    </>
  );
};

export { CsMusicPlayer };
