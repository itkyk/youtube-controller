interface Window {
  YT: any;
  ytController: {
    init: boolean;
    ready: boolean;
  };
  onYouTubeIframeAPIReady: (init?:string) => void;
}
declare var window: Window

type numFromZeroToHundred = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 57 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68  | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99| 100;

type speedRateType = 0.25 | 0.5 | 1 | 1.5 | 2;

type playerStateType = -1 | 0 | 1 | 2 | 3 | 5;

type qualityType = "highres" | "hd1080" | "hd720" | "large" | "medium" | "small" ;

let ytPlayerIsReady = false;



class YoutubeController {
  private player: null | any;
  private readonly videoId: string;
  private readonly target: HTMLElement | Element;
  private readonly playerVars: Record<string, any>;
  private lastYT: any;
  private isReady: boolean;
  constructor(_videoId: string, _el: HTMLElement | Element, playerVars: Record<string, any>) {
    this.ytSetting();
    this.isReady = false;
    this.initYoutubeApi();
    this.player = null;
    this.videoId = _videoId
    this.target = _el
    this.playerVars = playerVars;
    this.lastYT = null;
  }

  private ytSetting = () => {
    if ("ytController" in window === false) {
      window.ytController = {
        init: false,
        ready: false
      };
    }

    if ("onYouTubeIframeAPIReady" in window === false) {
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
    this.player = new window.YT.Player(this.target, {
      videoId: this.videoId,
      playerVars: {
        ...this.playerVars
      },
      events: {
        onReady: this.onReady
      }
    });
  }

  getPlayer = () => this.player

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

  stopVideo = () => {
    this.player.stopVideo();
  }

  playVideo = () => {
    this.player.playVideo();
  }

  pauseVideo = () => {
    this.player.pauseVideo();
  }

  loadVideoById = (args: {videoId:string, startSeconds?:number, suggestedQuality?:string}) => {
    this.player.loadVideoById(args)
  }

  loadVideoByUrl = (args: {mediaContentUrl:string, startSeconds?:number, endSeconds?:number, suggestedQuality?:string}) => {
    this.player.loadVideoByUrl(args)
  }

  cueVideoById = (args: {videoId: string, startSeconds?:number, endSeconds?:number, suggestedQuality?:string}) => {
    this.player.cueVideoById(args);
  }

  cueVideoByUrl = (args:{mediaContentUrl:string, startSeconds?:number, endSeconds?:number, suggestedQuality?:string}) => {
    this.player.cueVideoByUrl(args)
  }

  seekTo = (seconds:number, allowSeekAhead:boolean = true) => {
    this.player.seekTo(seconds, allowSeekAhead);
  }

  clearVideo = () => {
    this.player.clearVideo();
  }

  nextVideo = () => {
    this.player.nextVideo();
  }

  previousVideo = () => {
    this.player.previousVideo();
  }

  playVideoAt = (index: number) => {
    this.player.playVideoAt(index);
  }

  mute = () => {
    this.player.mute();
  }

  unMute = () => {
    this.player.unMute();
  }

  isMuted = (): boolean => {
    return this.player.isMuted();
  }

  setVolume = (volume: numFromZeroToHundred) => {
    this.player.setVolume(volume);
  }

  getVolume = (): numFromZeroToHundred => {
    return this.player.getVolume();
  }

  setSize = (size: {width: number, height: number}) => {
    this.player.setSize(size.width, size.height);
  }

  getPlaybackRate = ():speedRateType => {
    return this.player.getPlaybackRate()
  }

  setPlaybackRate = (suggestedRate:number) => {
    this.player.setPlaybackRate(suggestedRate);
  }

  getAvailablePlaybackRates = (): Array<number> => {
    return this.player.getAvailablePlaybackRates();
  }

  setLoop = (loopPlaylists:boolean) => {
    this.player.setLoop(loopPlaylists);
  }

  setShuffle = (shufflePlaylist:boolean) => {
    this.player.setShuffle(shufflePlaylist);
  }

  getVideoLoadedFraction = ():number => {
    return this.player.getVideoLoadedFraction();
  }

  getPlayerState = ():playerStateType => {
    return this.player.getPlayerState();
  }

  getCurrentTime = ():number => {
    return this.player.getCurrentTime();
  }

  getPlaybackQuality = ():qualityType | undefined => {
    return this.player.getPlaybackQuality();
  }

  setPlaybackQuality = (suggestedQuality: qualityType | "default") => {
    this.player.setPlaybackQuality(suggestedQuality)
  }

  getAvailableQualityLevels = ():Array<qualityType> => {
    return this.player.getAvailableQualityLevels();
  }

  getDuration = ():number => {
    return this.player.getDuration();
  }

  getVideoUrl = ():string => {
    return this.player.getVideoUrl();
  }

  getVideoEmbedCode = ():string => {
    return this.player.getVideoEmbedCode();
  }

  getPlaylist = ():Array<string> => {
    return this.player.getPlaylist();
  }

  getPlaylistIndex = ():number => {
    return this.player.getPlaylistIndex();
  }

  addEventListener = (event:string, listener:(event: any)=>void) => {
    this.player.addEventListener(event, listener);
  }

  removeEventListener = (event: string, listener:()=>void) => {
    this.player.removeEventListener(event, listener);
  }

  getIframe = ():HTMLIFrameElement => {
    return this.player.getIframe();
  }

  destroy = () => {
    this.player.destroy();
  }

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