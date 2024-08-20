x

export default function App() {

  return (
    <>
      <WavesurferPlayer
        height={100}
        waveColor="violet"
        url="/hoge.mp3"
        onReady={onReady}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      <button onClick={onPlayPause}>{isPlaying ? "Pause" : "Play"}</button>
    </>
  );
}
