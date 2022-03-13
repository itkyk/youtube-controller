interface Window {
  YT: any;
}
declare var window: Window

class YoutubeController {
  private player: null | any;
  private readonly videoId: string;
  private readonly target: HTMLElement;
  private readonly playerVars: Record<string, any>;
  constructor(_videoId: string, _el: HTMLElement, playerVars: Record<string, any>) {
    this.player = null;
    this.videoId = _videoId
    this.target = _el
    this.playerVars = playerVars;
  }
  onYouTubeIframeAPIReady  = () => {
    window.YT.ready(() => {
      this.player = new window.YT.Player(this.target, {
        videoId: this.videoId,
        playerVars: {
          ...this.playerVars
        }
      });
    })
  }
  stopVideo = () => {
    this.player.stopVideo();
  }

  changeVideo = (option: string | Record<string, string | number>) => {
    this.player.loadVideoById(option)
  }

  setMute = () => {
    this.player.mute();
  }

  static initYoutubeApi = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
      firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
  }
}
export default YoutubeController