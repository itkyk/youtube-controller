/// <reference types="youtube" />
declare class YoutubeController {
    private player;
    private readonly videoId;
    private readonly target;
    private readonly options;
    constructor(_videoId: string, _el: HTMLElement | Element, options: YT.PlayerOptions);
    private ytSetting;
    private onReady;
    private setPlayerReady;
    onYouTubeIframeAPIReady: () => Promise<unknown>;
    playVideo: () => void;
    stopVideo: () => void;
    pauseVideo: () => void;
    loadVideoById: (args: {
        videoId: string;
        startSeconds?: number;
        suggestedQuality?: YT.SuggestedVideoQuality;
    }) => void;
    loadVideoByUrl: (args: {
        mediaContentUrl: string;
        startSeconds?: number;
        suggestedQuality?: YT.SuggestedVideoQuality;
    }) => void;
    cueVideoById: (args: {
        videoId: string;
        startSeconds?: number;
        suggestedQuality?: YT.SuggestedVideoQuality;
    }) => void;
    cueVideoByUrl: (args: {
        mediaContentUrl: string;
        startSeconds?: number;
        suggestedQuality?: YT.SuggestedVideoQuality;
    }) => void;
    seekTo: (seconds: number, allowSeekAhead: boolean) => void;
    nextVideo: () => void;
    previousVideo: () => void;
    playVideoAt: (index: number) => void;
    mute: () => void;
    unMute: () => void;
    isMuted: () => boolean;
    setVolume: (volume: number) => void;
    getVolume: () => number;
    setSize: (size: {
        width: number;
        height: number;
    }) => void;
    getPlaybackRate: () => number;
    setPlaybackRate: (suggestedRate: number) => void;
    getAvailablePlaybackRates: () => number[];
    setLoop: (loopPlaylists: boolean) => void;
    setShuffle: (shufflePlaylist: boolean) => void;
    getVideoLoadedFraction: () => number;
    getPlayerState: () => YT.PlayerState;
    getCurrentTime: () => number;
    getPlaybackQuality: () => YT.SuggestedVideoQuality;
    setPlaybackQuality: (suggestedQuality: YT.SuggestedVideoQuality) => void;
    getAvailableQualityLevels: () => YT.SuggestedVideoQuality[];
    getDuration: () => number;
    getVideoUrl: () => string;
    getVideoEmbedCode: () => string;
    getPlaylist: () => string[];
    getPlaylistIndex: () => number;
    addEventListener: <TEvent extends YT.PlayerEvent>(event: keyof YT.Events, listener: (event: TEvent) => void) => void;
    removeEventListener: <TEvent extends YT.PlayerEvent>(event: keyof YT.Events, listener: (event: TEvent) => void) => void;
    getIframe: () => HTMLIFrameElement;
    destroy: () => void;
    getPlayer: () => YT.Player | undefined;
    private initYoutubeApi;
}
export default YoutubeController;
