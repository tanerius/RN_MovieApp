import React from 'react';
import VideoPlayer from 'react-native-video-controls';

{
  /* Video also available at http://samples.tanerius.com/videos/sample.mp4 with VPN */
}

const Video = ({onBackHandler}) => {
  return (
    <VideoPlayer
      source={{uri: 'https://vjs.zencdn.net/v/oceans.mp4'}}
      fullscreenOrientation="all"
      onBack={() => {
        onBackHandler();
      }}
      onEnd={() => {
        onBackHandler();
      }}
    />
  );
};

export default Video;
