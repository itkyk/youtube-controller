import YoutubeController from "../../src/index";
YoutubeController.initYoutubeApi();
document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
 <div id="youtube"></div>
`
const init = async () => {
  const youtube = document.querySelector("#youtube")!;
  const player = new YoutubeController("M7lc1UVf-VE", youtube, {
    loop: 1,
  })
  await player.onYouTubeIframeAPIReady()
  console.log("mute and play")
  player.mute();
  player.playVideo();
}

init().then();