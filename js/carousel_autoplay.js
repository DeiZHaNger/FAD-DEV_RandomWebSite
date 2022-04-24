window.addEventListener('load', function () {
    const carousel = document.querySelectorAll('.carousel input');
    const imageBlocks = document.querySelectorAll('.carousel img, .carousel h3');

    // start carousel autoplay
    const autoplay = setInterval(function () {
            let activeBlock = Array.from(carousel).find(element => element.checked == true);
            let nextBlock = activeBlock.nextElementSibling.nextElementSibling;
            if (!nextBlock) {nextBlock = document.querySelector('#pic_block1')};
            nextBlock.checked = true;
        }, 5000);

    function stopPlay() {
        clearInterval(autoplay);
        console.log('Autoplay stopped. Reload to restart it.');
    };
    
    // stop carousel autoplay when clicking on current image or its title
    imageBlocks.forEach(element => element.addEventListener('click', stopPlay));
});