type numFromZeroToHundred = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 | 27 | 28 | 29 | 30 | 31 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41 | 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 57 | 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80 | 81 | 82 | 83 | 84 | 85 | 86 | 87 | 88 | 89 | 90 | 91 | 92 | 93 | 94 | 95 | 96 | 97 | 98 | 99 | 100;
type speedRateType = 0.25 | 0.5 | 1 | 1.5 | 2;
type playerStateType = -1 | 0 | 1 | 2 | 3 | 5;
type qualityType = "highres" | "hd1080" | "hd720" | "large" | "medium" | "small";
declare class YoutubeController {
    private player;
    private readonly videoId;
    private readonly target;
    private readonly playerVars;
    private lastYT;
    private isReady;
    constructor(_videoId: string, _el: HTMLElement | Element, playerVars: Record<string, any>);
    private setPlayerReady;
    getPlayer: () => any;
    onYouTubeIframeAPIReady: () => Promise<unknown>;
    stopVideo: () => void;
    playVideo: () => void;
    pauseVideo: () => void;
    loadVideoById: (args: {
        videoId: string;
        startSeconds?: number;
        suggestedQuality?: string;
    }) => void;
    loadVideoByUrl: (args: {
        mediaContentUrl: string;
        startSeconds?: number;
        endSeconds?: number;
        suggestedQuality?: string;
    }) => void;
    cueVideoById: (args: {
        videoId: string;
        startSeconds?: number;
        endSeconds?: number;
        suggestedQuality?: string;
    }) => void;
    cueVideoByUrl: (args: {
        mediaContentUrl: string;
        startSeconds?: number;
        endSeconds?: number;
        suggestedQuality?: string;
    }) => void;
    seekTo: (seconds: number, allowSeekAhead?: boolean) => void;
    clearVideo: () => void;
    nextVideo: () => void;
    previousVideo: () => void;
    playVideoAt: (index: number) => void;
    mute: () => void;
    unMute: () => void;
    isMuted: () => boolean;
    setVolume: (volume: numFromZeroToHundred) => void;
    getVolume: () => numFromZeroToHundred;
    setSize: (size: {
        width: number;
        height: number;
    }) => void;
    getPlaybackRate: () => speedRateType;
    setPlaybackRate: (suggestedRate: number) => void;
    getAvailablePlaybackRates: () => Array<number>;
    setLoop: (loopPlaylists: boolean) => void;
    setShuffle: (shufflePlaylist: boolean) => void;
    getVideoLoadedFraction: () => number;
    getPlayerState: () => playerStateType;
    getCurrentTime: () => number;
    getPlaybackQuality: () => qualityType | undefined;
    setPlaybackQuality: (suggestedQuality: qualityType | "default") => void;
    getAvailableQualityLevels: () => Array<qualityType>;
    getDuration: () => number;
    getVideoUrl: () => string;
    getVideoEmbedCode: () => string;
    getPlaylist: () => Array<string>;
    getPlaylistIndex: () => number;
    addEventListener: (event: string, listener: (event: any) => void) => void;
    removeEventListener: (event: string, listener: () => void) => void;
    getIframe: () => HTMLIFrameElement;
    destroy: () => void;
    private initYoutubeApi;
}
export default YoutubeController;
//# sourceMappingURL=index.d.ts.map