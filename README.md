# @itkyk/youtube-controller  

## Install
```shell
$ npm i @itkyk/youtube-controller
```

## Use this module

```typescript
import YoutubeController from "@itkyk/youtube-controller";

const initi = async() => {
// start Youtube
  const target = document.querySelector("target"); /* <- insert player in this selector*/
  const options = {
      playerVars: {}
  } /* setting YT.Options */
  const player = new YoutubeController("videoId", target, options);
  await player.onYouTubeIframeAPIReady();
  /* ↓ Can use player ↓ */
  player.cueVideoById({
    videoId: "foobar"
  })
  player.playVideo();
}
```

## Initial Methods
1. onYouTubeIframeAPIReady
   - This function is Promise.
   - when this function return `Promise`, it mean is `onReady` too.

## Methods that Player has
1. playVideo
   - Arguments: none.
   - Return: void;
1. stopVideo
    - Arguments: none.
    - Return: void;
1. pauseVideo
    - Arguments: none.
    - Return: void;
1. loadVideoById
    - Arguments: 
      - Object
        - videoId:string
        - startSeconds?:number
        - suggestedQuality?:`YT.SuggestedVideoQuality`
    - Return: void;
1. loadVideoByUrl
    - Arguments: 
      - Object
        - mediaContentUrl:string
        - startSeconds?:number
        - endSeconds?:number
        - suggestedQuality?:`YT.SuggestedVideoQuality`
    - Return: void;
1. cueVideoById
    - Arguments: 
      - Object
        - videoId: string
        - startSeconds?:number
        - endSeconds?:number
        - suggestedQuality?:`YT.SuggestedVideoQuality`
    - Return: void;
1. cueVideoByUrl
    - Arguments: 
      - Object
        - mediaContentUrl:string
        - startSeconds?:number
        - endSeconds?:number
        - suggestedQuality?:`YT.SuggestedVideoQuality`
    - Return: void;
1. seekTo
   - Arguments:
     - seconds: number,
     - allowSeekAhead:boolean
   - Return: void
1. nextVideo
    - Arguments: none
    - Return none
1. previousVideo
    - Arguments: none
    - Return: void
playVideoAt
    - Arguments:
      - index: number
    - Return none
1. mute
    - Arguments: none
    - Return: void
1. unMute
    - Arguments: none
    - Return: void
1. isMuted
    - Arguments: none
    - Return: boolean
1. setVolume
    - Arguments: 
      - volume: number
    - Return: void
1. getVolume
    - Arguments: none
    - Return: number
1. setSize
    - Arguments:
      - Object
        - width: number
        - height: number
    - Return: void
1. getPlaybackRate
    - Arguments: none
    - Return number
1. setPlaybackRate
    - Arguments:
      - suggestedRate: number
    - Return: void
1. getAvailablePlaybackRates
    - Arguments: none
    - Return: Array<number>
1. setLoop
    - Arguments:
      - loopPlaylists: boolean
    - Return: void
1. setShuffle
    - Arguments:
      - shufflePlaylist: boolean
    - Return: void
1. getVideoLoadedFraction
    - Arguments: none
    - Return: number
1. getPlayerState
    - Arguments: none
    - Return: `YT.PlayerState`
1. getCurrentTime
    - Arguments: none
    - Return: number
1. getPlaybackQuality
    - Arguments: none
    - Return: `YT.SuggestedVideoQuality`
1. setPlaybackQuality
    - Arguments: 
      - suggestedQuality:`YT.SuggestedVideoQuality`
    - Return: void
1. getAvailableQualityLevels
    - Arguments: none
    - Return: Array<`YT.SuggestedVideoQuality`>
1. getDuration
    - Arguments: none
    - Return: number
1. getVideoUrl
    - Arguments: none
    - Return: string
1. getVideoEmbedCode
    - Arguments: none
    - Return: string
1. getPlaylist
    - Arguments: none
    - Return: Array<string>
1. getPlaylistIndex
    - Arguments: none
    - Return: number
1. addEventListener
    - Arguments: 
      - event: keyof `YT.PlayerEvent`
      - listener: (event: `YT.PlayerEvent`)=>void
    - Return: void
1. removeEventListener
    - Arguments:
        - event: keyof `YT.PlayerEvent`
        - listener: (event: `YT.PlayerEvent`)=>void
    - Return: void
1. getIframe
    - Arguments: none
    - Return: HTMLIFrameElement
1. destroy
    - Arguments: none
    - Return: void
1. getPlayer
    - Argument: none
    - Return: `YT.Player`

## Change Log
- ### update v2.1.1
  - Change Types to `@types/youtube`
  - Change option from `playerVars` to `YT.Options`
- ### update v2.0.7
  - Fixed overwrite condition of `onYouTubeIframeAPIReady`
- ### update v2.0.6
  - Fixed a bug in React that prevented it from working.
- ### update v2.0.5
  - Simplified initial setup.  
    Also, the `onYouTubeIframeAPIReady` method has been modified to run correctly.
