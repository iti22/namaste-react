const GOOGLE_API_KEY = "AIzaSyDImqCXyJvsYxilEsMvlOb-KyWL3wT1sUQ";

export const YOUTUBE_VIDEO_URL =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=US&key=" +
  GOOGLE_API_KEY;
// function solve(n) {
//   for (let i = 1; i < n + 1; i++) {
//     let s = "";
//     let temp = i;
//     for (let j = 1; j < i + 1; j++) {
//       s += j;
//     }
//     if (temp > 1) {
//       for (let j = temp - 1; j < 1; j--) {
//         s += j;
//         console.log("value", s);
//       }
//     }
//     console.log(s);
//   }
// }
