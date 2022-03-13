declare class YoutubeController {
    private player;
    private readonly videoId;
    private readonly target;
    private readonly playerVars;
    constructor(_videoId: string, _el: HTMLElement, playerVars: Record<string, any>);
    onYouTubeIframeAPIReady: () => void;
    stopVideo: () => void;
    changeVideo: (option: string | Record<string, string | number>) => void;
    setMute: () => void;
    static initYoutubeApi: () => void;
}
export default YoutubeController;
//# sourceMappingURL=index.d.ts.map