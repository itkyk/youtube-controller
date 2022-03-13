"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YoutubeController {
    constructor(_videoId, _el, playerVars) {
        this.onYouTubeIframeAPIReady = () => {
            window.YT.ready(() => {
                this.player = new window.YT.Player(this.target, {
                    videoId: this.videoId,
                    playerVars: Object.assign({}, this.playerVars)
                });
            });
        };
        this.stopVideo = () => {
            this.player.stopVideo();
        };
        this.changeVideo = (option) => {
            this.player.loadVideoById(option);
        };
        this.setMute = () => {
            this.player.mute();
        };
        this.player = null;
        this.videoId = _videoId;
        this.target = _el;
        this.playerVars = playerVars;
    }
}
YoutubeController.initYoutubeApi = () => {
    const tag = document.createElement('script');
    tag.src = "https://www.youtube.com/iframe_api";
    const firstScriptTag = document.getElementsByTagName('script')[0];
    if (firstScriptTag.parentNode) {
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
};
exports.default = YoutubeController;
