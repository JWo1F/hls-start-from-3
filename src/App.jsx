import {useEffect, useRef} from 'react'
import HLS from 'hls.js/dist/hls.min.js';
import './App.css'

function App() {
  const ref = useRef(null);

  useEffect(() => {
    const videoSrc = '/main.m3u8';
    const video = ref.current;
    const hlsPlayer = new HLS({
      enableWorker: true,
      debug: true,
    });

    hlsPlayer.attachMedia(video);

    hlsPlayer.on(HLS.Events.MEDIA_ATTACHED, () => {
      hlsPlayer.loadSource(videoSrc);
    });

    return () => {
      hlsPlayer.destroy();
    };
  }, []);

  return (
    <>
      <video ref={ref} controls style={{ width: 800, height: 600 }} />
    </>
  )
}

export default App
