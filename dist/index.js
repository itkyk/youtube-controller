"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const deepmerge_1 = __importDefault(require("deepmerge"));
const is_plain_object_1 = require("is-plain-object");
let ytPlayerIsReady = false;
class YoutubeController {
    constructor(_videoId, _el, options) {
        this.ytSetting = () => {
            if ("ytController" in window === false) {
                window.ytController = {
                    init: false,
                    ready: false
                };
                window.onYouTubeIframeAPIReady = (init) => {
                    if (init === "init")
                        return;
                    ytPlayerIsReady = true;
                };
            }
        };
        this.onReady = () => {
            window.ytController.ready = true;
        };
        this.setPlayerReady = () => {
            const opts = (0, deepmerge_1.default)({
                videoId: this.videoId,
                events: {
                    onReady: this.onReady
                }
            }, this.options, {
                isMergeableObject: is_plain_object_1.isPlainObject
            });
            this.player = new window.YT.Player(this.target, opts);
        };
        this.onYouTubeIframeAPIReady = () => {
            return new Promise(resolve => {
                const interval = setInterval(() => {
                    if (ytPlayerIsReady && !this.player) {
                        this.setPlayerReady();
                    }
                    else if (ytPlayerIsReady && window.ytController.ready) {
                        resolve(this.player);
                        clearInterval(interval);
                    }
                }, 100);
            });
        };
        this.playVideo = () => {
            this.player.playVideo();
        };
        this.stopVideo = () => {
            this.player.stopVideo();
        };
        this.pauseVideo = () => {
            this.player.pauseVideo();
        };
        this.loadVideoById = (args) => {
            this.player.loadVideoById(args.videoId, args.startSeconds, args.suggestedQuality);
        };
        this.loadVideoByUrl = (args) => {
            this.player.loadVideoByUrl(args.mediaContentUrl, args.startSeconds, args.suggestedQuality);
        };
        this.cueVideoById = (args) => {
            this.player.cueVideoById(args.videoId, args.startSeconds, args.suggestedQuality);
        };
        this.cueVideoByUrl = (args) => {
            this.player.cueVideoByUrl(args.mediaContentUrl, args.startSeconds, args.suggestedQuality);
        };
        this.seekTo = (seconds, allowSeekAhead) => {
            this.player.seekTo(seconds, allowSeekAhead);
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
        this.getPlayer = () => this.player;
        this.initYoutubeApi = () => {
            if (!window.ytController.init) {
                window.ytController.init = true;
                const tag = document.createElement('script');
                tag.src = "https://www.youtube.com/iframe_api";
                const firstScriptTag = document.getElementsByTagName('script')[0];
                if (firstScriptTag.parentNode) {
                    firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
                }
            }
        };
        this.ytSetting();
        this.initYoutubeApi();
        this.videoId = _videoId;
        this.target = _el;
        this.options = options;
    }
}
exports.default = YoutubeController;
