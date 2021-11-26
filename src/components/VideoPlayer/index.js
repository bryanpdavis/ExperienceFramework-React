import YouTube from 'react-youtube';

const VideoPlayer = (props) => (
    // https://www.npmjs.com/package/react-youtube
    // https://developers.google.com/youtube/iframe_api_reference
    <YouTube videoId={props.videoid} opts={props.opts} />
);

export default VideoPlayer;