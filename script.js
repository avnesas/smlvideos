// script.js

// Array of video objects, each containing a title and URL
const videos = [
    {
        title: "SML Movie: Jeffy's Homework!",
        url: "https://file.garden/Zxdp1wpMpVUTaKKV/SML%20Movie_%20Jeffy's%20Homework!.mp4"
    },
    {
        title: "SML Movie: Jeffy Ball Z",
        url: "https://file.garden/Zxdp1wpMpVUTaKKV/SML%20Movie_%20Jeffy%20Ball%20Z.mp4"
    }
    // Add more videos here as needed
];

// Function to play the selected video
function playVideo(videoUrl) {
    const mainVideo = document.getElementById("main-video");
    mainVideo.src = videoUrl;
    mainVideo.play();
}

// Function to populate the video list based on the array
function loadVideoList() {
    const videoMenu = document.getElementById("video-menu");

    // Clear any existing content in the video menu
    videoMenu.innerHTML = '';

    videos.forEach((video) => {
        const videoItem = document.createElement("li");
        videoItem.textContent = video.title;
        videoItem.onclick = () => playVideo(video.url);
        videoMenu.appendChild(videoItem);
    });
}

// Load the video list on page load
window.onload = loadVideoList;
