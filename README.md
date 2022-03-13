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
player.onYouTubeIframeAPIReady();


// change Video
player.changeVideo("videoid");

// player mute
player.setMute()

// stop vide
player.stopVideo();
```