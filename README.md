# @itkyk/youtube-controller  

## Install
```shell
$ npm i @itkyk/youtube-controller
```

## Use this module

```typescript
import YoutubeController from "@itkyk/youtube-controller";

// set YT scriopt
YoutubeController.initYoutubeApi()

// start Youtube
const target = document.querySelector("target"); /* <- insert player in this selector*/
const playerVars = {} /* setting playerVars */
const player = new YoutubeController("videoId", target, playerVars);
player.onYouTubeIframeAPIReady().then(() => {
  // any video action
});
```

## Initial Methods
1. onYouTubeIframeAPIReady
   - This function is Promise.
   - when this function return `Promise`, it mean is `onReady` too.

## Methods that Player has
1. playVideo
   - Arguments: none.
   - Return: none;
2. stopVideo
    - Arguments: none.
    - Return: none;
3. pauseVideo
    - Arguments: none.
    - Return: none;
4. loadVideoById
    - Arguments: 
      - Object
        - videoId:string
        - startSeconds?:number
        - suggestedQuality?:string
    - Return: none;
5. loadVideoByUrl
    - Arguments: 
      - Object
        - mediaContentUrl:string
        - startSeconds?:number
        - endSeconds?:number
        - suggestedQuality?:string
    - Return: none;
6. cueVideoById
    - Arguments: 
      - Object
        - videoId: string
        - startSeconds?:number
        - endSeconds?:number
        - suggestedQuality?:string
    - Return: none;
7. cueVideoByUrl
    - Arguments: 
      - Object
        - mediaContentUrl:string
        - startSeconds?:number
        - endSeconds?:number
        - suggestedQuality?:string
    - Return: none;
8. seekTo
   - Arguments:
     - seconds: number,
     - allowSeekAhead:boolean -> default: true
   - Return: none
9. clearVideo
   - Arguments: none
   - Return none
10. nextVideo
    - Arguments: none
    - Return none
11. previousVideo
    - Arguments: none
    - Return: none
12. playVideoAt
    - Arguments:
      - index: number
    - Return none
13. mute
    - Arguments: none
    - Return: none
14. unMute
    - Arguments: none
    - Return: none
15. isMuted
    - Arguments: none
    - Return: boolean
16. setVolume
    - Arguments: 
      - volume: [numFromZeroToHundred](#numFromZeroToHundred)
    - Return: none
17. getVolume
    - Arguments: none
    - Return: 0 ~ 100
18. setSize
    - Arguments:
      - Object
        - width: number
        - height: number
    - Return: none
19. getPlaybackRate
    - Arguments: none
    - Return [speedRateType](#speedRateType)
20. setPlaybackRate
    - Arguments:
      - suggestedRate: number
    - Return: none
21. getAvailablePlaybackRates
    - Arguments: none
    - Return: Array<number>
22. setLoop
    - Arguments:
      - loopPlaylists: boolean
    - Return: none
23. setShuffle
    - Arguments:
      - shufflePlaylist: boolean
    - Return: none
24. getVideoLoadedFraction
    - Arguments: none
    - Return: number
25. getPlayerState
    - Arguments: none
    - Return: [playerStateType](#playerStateType)
26. getCurrentTime
    - Arguments: none
    - Return: number
27. getPlaybackQuality
    - Arguments: none
    - Return: [qualityType](#qualityType) | undefined
28. setPlaybackQuality
    - Arguments: 
      - suggestedQuality: [qualityType](#qualityType) | "default"
    - Return: none
29. getAvailableQualityLevels
    - Arguments: none
    - Return: Array<[qualityType](#qualityType)>
30. getDuration
    - Arguments: none
    - Return: number
31. getVideoUrl
    - Arguments: none
    - Return: string
32. getVideoEmbedCode
    - Arguments: none
    - Return: string
33. getPlaylist
    - Arguments: none
    - Return: Array<string>
34. getPlaylistIndex
    - Arguments: none
    - Return: number
35. addEventListener
    - Arguments: 
      - event: string
      - listener: function
    - Return: none
36. removeEventListener
    - Arguments:
        - event: string
        - listener: function
    - Return: none
37. getIframe
    - Arguments: none
    - Return: HTMLIFrameElement
38. destroy
    - Arguments: none
    - Return: none
39. getPlayer
    - Argument: none
    - Return: Native player Object

## Types
- <h3 id="speedRateType">speedRateType</h3>
  - 0.25 | 0.5 | 1 | 1.5 | 2
- <h3 id="numFromZeroToHundred">numFromZeroToHundred</h3>
  - Integer from 1~100
- <h3 id="playerStateType">playerStateType</h3>
  - -1 | 0 | 1 | 2 | 3 | 5
- <h3 id="qualityType">qualityType</h3>
  - "highres" | "hd1080" | "hd720" | "large" | "medium" | "small" 