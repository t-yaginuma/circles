"use client";
import WavesurferPlayer from "@wavesurfer/react";
import { useState } from "react";

type Props = {
  // isPlaying: boolean;
  // action: (formData: FormData) => Promise<void>;
};

const CsMusicPlayer = (props: Props) => {
  const {} = props;
  const [wavesurfer, setWavesurfer] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const onReady = (ws) => {
    setWavesurfer(ws);
    setIsPlaying(false);
  };

  const onPlayPause = () => {
    wavesurfer && wavesurfer.playPause();
  };

  return (
    <>
      <div>
        <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
        <WavesurferPlayer
          height={100}
          waveColor="violet"
          url="/hoge.mp3"
          onReady={onReady}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />
      </div>
    </>
  );
};

export { CsMusicPlayer };
