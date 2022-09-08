"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YoutubeController {
    constructor(_videoId, _el, playerVars) {
        this.setPlayerReady = () => {
            window.YT.ready(() => {
                this.player = new window.YT.Player(this.target, {
                    videoId: this.videoId,
                    playerVars: Object.assign({}, this.playerVars)
                });
            });
        };
        this.onYouTubeIframeAPIReady = () => {
            let loadFlag = false;
            return new Promise(resolve => {
                do {
                    if (window.YT && !loadFlag) {
                        this.setPlayerReady();
                        loadFlag = true;
                    }
                } while (!window.YT);
                resolve(null);
            });
        };
        this.stopVideo = () => {
            this.player.stopVideo();
        };
        this.playVideo = () => {
            this.player.playVideo();
        };
        this.pauseVideo = () => {
            this.player.pauseVideo();
        };
        this.loadVideoById = (args) => {
            this.player.loadVideoById(args);
        };
        this.loadVideoByUrl = (args) => {
            this.player.loadVideoByUrl(args);
        };
        this.cueVideoById = (args) => {
            this.player.cueVideoById(args);
        };
        this.cueVideoByUrl = (args) => {
            this.player.cueVideoByUrl(args);
        };
        this.seekTo = (seconds, allowSeekAhead = true) => {
            this.player.seekTo(seconds, allowSeekAhead);
        };
        this.clearVideo = () => {
            this.player.clearVideo();
        };
        this.nextVideo = () => {
            this.player.nextVideo();
        };
        this.previousVideo = () => {
            this.player.previousVideo();
        };
        this.playVideoAt = (index) => {
            this.player.playVideoAt(index);
        };
        this.mute = () => {
            this.player.mute();
        };
        this.unMute = () => {
            this.player.unMute();
        };
        this.isMuted = () => {
            return this.player.isMuted();
        };
        this.setVolume = (volume) => {
            this.player.setVolume(volume);
        };
        this.getVolume = () => {
            return this.player.getVolume();
        };
        this.setSize = (size) => {
            this.player.setSize(size.width, size.height);
        };
        this.getPlaybackRate = () => {
            return this.player.getPlaybackRate();
        };
        this.setPlaybackRate = (suggestedRate) => {
            this.player.setPlaybackRate(suggestedRate);
        };
        this.getAvailablePlaybackRates = () => {
            return this.player.getAvailablePlaybackRates();
        };
        this.setLoop = (loopPlaylists) => {
            this.player.setLoop(loopPlaylists);
        };
        this.setShuffle = (shufflePlaylist) => {
            this.player.setShuffle(shufflePlaylist);
        };
        this.getVideoLoadedFraction = () => {
            return this.player.getVideoLoadedFraction();
        };
        this.getPlayerState = () => {
            return this.player.getPlayerState();
        };
        this.getCurrentTime = () => {
            return this.player.getCurrentTime();
        };
        this.getPlaybackQuality = () => {
            return this.player.getPlaybackQuality();
        };
        this.setPlaybackQuality = (suggestedQuality) => {
            this.player.setPlaybackQuality(suggestedQuality);
        };
        this.getAvailableQualityLevels = () => {
            return this.player.getAvailableQualityLevels();
        };
        this.getDuration = () => {
            return this.player.getDuration();
        };
        this.getVideoUrl = () => {
            return this.player.getVideoUrl();
        };
        this.getVideoEmbedCode = () => {
            return this.player.getVideoEmbedCode();
        };
        this.getPlaylist = () => {
            return this.player.getPlaylist();
        };
        this.getPlaylistIndex = () => {
            return this.player.getPlaylistIndex();
        };
        this.addEventListener = (event, listener) => {
            this.player.addEventListener(event, listener);
        };
        this.removeEventListener = (event, listener) => {
            this.player.removeEventListener(event, listener);
        };
        this.getIframe = () => {
            return this.player.getIframe();
        };
        this.destroy = () => {
            this.player.destroy();
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
