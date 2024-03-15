import deepmerge from "deepmerge";
import {isPlainObject} from "is-plain-object";

interface Window {
  YT: any;
  ytController: {
    init: boolean;
    ready: boolean;
  };
  onYouTubeIframeAPIReady: (init?:string) => void;
}
declare var window: Window

let ytPlayerIsReady = false;



class YoutubeController {
  private player: YT.Player | undefined;
  private readonly videoId: string;
  private readonly target: HTMLElement | Element;
  private readonly options: Omit<YT.PlayerOptions, "videoId">;
  constructor(_videoId: string, _el: HTMLElement | Element, options: Omit<YT.PlayerOptions, "videoId">) {
    this.ytSetting();
    this.initYoutubeApi();
    this.videoId = _videoId
    this.target = _el
    this.options = options;
  }

  private ytSetting = () => {
    if ("ytController" in window === false) {
      window.ytController = {
        init: false,
        ready: false
      };
      window.onYouTubeIframeAPIReady = (init?: string) => {
        if (init === "init") return;
        ytPlayerIsReady = true;
      }
    }
  }

  private onReady = () => {
    window.ytController.ready = true;
  }

  private setPlayerReady = () => {
    const opts = deepmerge({
        videoId: this.videoId,
        events: {
          onReady: this.onReady
        }
      },
      this.options,
      {
          isMergeableObject: isPlainObject
        }
    );
    this.player = new window.YT.Player(this.target, opts);
  }


  onYouTubeIframeAPIReady  = () => {
    return new Promise(resolve => {
      const interval = setInterval(() => {
        if (ytPlayerIsReady && !this.player) {
          this.setPlayerReady();
        } else if (ytPlayerIsReady && window.ytController.ready) {
          resolve(this.player);
          clearInterval(interval);
        }
      }, 100);
    })
  }


  playVideo = () => {
    this.player!.playVideo();
  }

  stopVideo = () => {
    this.player!.stopVideo();
  }

  pauseVideo = () => {
    this.player!.pauseVideo();
  }

  loadVideoById = (args: {videoId:string, startSeconds?:number, suggestedQuality?: YT.SuggestedVideoQuality}) => {
    this.player!.loadVideoById(args.videoId, args.startSeconds, args.suggestedQuality);
  }

  loadVideoByUrl = (args: {mediaContentUrl: string, startSeconds?: number, suggestedQuality?: YT.SuggestedVideoQuality}) => {
    this.player!.loadVideoByUrl(args.mediaContentUrl, args.startSeconds, args.suggestedQuality)
  }

  cueVideoById = (args: {videoId: string, startSeconds?: number, suggestedQuality?: YT.SuggestedVideoQuality}) => {
    this.player!.cueVideoById(args.videoId, args.startSeconds, args.suggestedQuality);
  }

  cueVideoByUrl = (args:{mediaContentUrl: string, startSeconds?: number, suggestedQuality?: YT.SuggestedVideoQuality}) => {
    this.player!.cueVideoByUrl(args.mediaContentUrl, args.startSeconds, args.suggestedQuality);
  }

  seekTo = (seconds: number, allowSeekAhead: boolean) => {
    this.player!.seekTo(seconds, allowSeekAhead);
  }

  nextVideo = () => {
    this.player!.nextVideo();
  }

  previousVideo = () => {
    this.player!.previousVideo();
  }

  playVideoAt = (index: number) => {
    this.player!.playVideoAt(index);
  }

  mute = () => {
    this.player!.mute();
  }

  unMute = () => {
    this.player!.unMute();
  }

  isMuted = () => {
    return this.player!.isMuted();
  }

  setVolume = (volume: number) => {
    this.player!.setVolume(volume);
  }

  getVolume = () => {
    return this.player!.getVolume();
  }

  setSize = (size: {width: number, height: number}) => {
    this.player!.setSize(size.width, size.height);
  }

  getPlaybackRate = () => {
    return this.player!.getPlaybackRate()
  }

  setPlaybackRate = (suggestedRate:number) => {
    this.player!.setPlaybackRate(suggestedRate);
  }

  getAvailablePlaybackRates = () => {
    return this.player!.getAvailablePlaybackRates();
  }

  setLoop = (loopPlaylists:boolean) => {
    this.player!.setLoop(loopPlaylists);
  }

  setShuffle = (shufflePlaylist:boolean) => {
    this.player!.setShuffle(shufflePlaylist);
  }

  getVideoLoadedFraction = () => {
    return this.player!.getVideoLoadedFraction();
  }

  getPlayerState = () => {
    return this.player!.getPlayerState();
  }

  getCurrentTime = () => {
    return this.player!.getCurrentTime();
  }

  getPlaybackQuality = () => {
    return this.player!.getPlaybackQuality();
  }

  setPlaybackQuality = (suggestedQuality: YT.SuggestedVideoQuality) => {
    this.player!.setPlaybackQuality(suggestedQuality)
  }

  getAvailableQualityLevels = () => {
    return this.player!.getAvailableQualityLevels();
  }

  getDuration = () => {
    return this.player!.getDuration();
  }

  getVideoUrl = () => {
    return this.player!.getVideoUrl();
  }

  getVideoEmbedCode = () => {
    return this.player!.getVideoEmbedCode();
  }

  getPlaylist = () => {
    return this.player!.getPlaylist();
  }

  getPlaylistIndex = () => {
    return this.player!.getPlaylistIndex();
  }

  addEventListener = <TEvent extends YT.PlayerEvent>(event:keyof YT.Events, listener:(event: TEvent)=>void) => {
    this.player!.addEventListener(event, listener);
  }

  removeEventListener = <TEvent extends YT.PlayerEvent>(event: keyof YT.Events, listener:(event: TEvent)=>void) => {
    this.player!.removeEventListener(event, listener);
  }

  getIframe = () => {
    return this.player!.getIframe();
  }

  destroy = () => {
    this.player!.destroy();
  }

  getPlayer = () => this.player

  private initYoutubeApi = () => {
    if (!window.ytController.init) {
      window.ytController.init = true;
      const tag = document.createElement('script');
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName('script')[0];
      if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
      }
    }
  }
}
export default YoutubeController