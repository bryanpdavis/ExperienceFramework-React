import YouTube from 'react-youtube';

const VideoPlayer = (config) => (
    // https://www.npmjs.com/package/react-youtube
    // https://developers.google.com/youtube/iframe_api_reference
    <YouTube videoId={config.props.videoid} opts={config.props.opts} />
);

export default VideoPlayer;