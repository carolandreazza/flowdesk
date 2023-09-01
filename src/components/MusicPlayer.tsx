import React from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css'; // Import the styles

interface MusicPlayerProps {
    src: string;
}

const MusicPlayer = ({ src }: MusicPlayerProps) => {
  return (
    <AudioPlayer
      autoPlay
      src={src}
      onPlay={(e) => console.log("onPlay")}
    />
  );
};

export default MusicPlayer;
