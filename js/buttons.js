document.addEventListener('DOMContentLoaded', function () {
    // const resumeButton = document.getElementById('resume-button');
    const discoverMeButton = document.getElementById('discover-me-button');
    const viewMyWorkButton = document.getElementById('view-my-work-button');
    // const watchDemoReelButton = document.getElementById('watch-demo-reel-button');
    // const watchGameplayButton = document.getElementById('watch-gameplay-button');
    // const getInTouchButton = document.getElementById('get-in-touch-button'); // TODO

    // if (resumeButton) {
    //     resumeButton.addEventListener('click', function () {
    //         window.open('./assets/Resume.pdf', '_blank');
    //     });
    // }


    if (discoverMeButton) {
        discoverMeButton.addEventListener('click', function () {
            window.scrollTo({
                top: document.getElementById('about-wrapper').offsetTop,
                behavior: 'smooth'
            });
        });
    }

    if (viewMyWorkButton) {
        viewMyWorkButton.addEventListener('click', function () {
            window.scrollTo({
                top: document.getElementById('work-wrapper').offsetTop,
                behavior: 'smooth'
            });
        });
    }

    // if (watchGameplayButton) {
    //     const video = document.getElementById('work-si-video');
    //     watchGameplayButton.addEventListener('click', function () {
    //         video.play();
    //         watchGameplayButton.classList.add('hidden');
    //     });
    //     if (video) {
    //         video.addEventListener('ended', function () {
    //             video.pause();
    //             watchGameplayButton.classList.remove('hidden');
    //         });
    //     }
    // }
    // if (watchDemoReelButton) {
    //     const video = document.getElementById('about-video');
    //     const buttonWrapper = document.getElementById('about-video-button-wrapper');
    //     const watchDisplay = document.getElementById('watch-img');
    //     watchDemoReelButton.addEventListener('click', function () {
    //         video.play();
    //         buttonWrapper.classList.add('hidden');
    //         watchDisplay.classList.add('hidden');
    //     });
    //     if (video) {
    //         video.addEventListener('ended', function () {
    //             video.pause();
    //             watchDemoReelButton.classList.remove('hidden');
    //             buttonWrapper.classList.remove('hidden');
    //             watchDisplay.classList.remove('hidden');
    //         });
    //     }
    // }
});