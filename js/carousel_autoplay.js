window.addEventListener('load', function () {
    const carousel = document.querySelectorAll('.carousel input');
    const imageBlocks = document.querySelectorAll('.carousel img, .carousel h3');

    const autoplay = setInterval(function () {
            let activeBlock = Array.from(carousel).find(element => element.checked == true);
            let nextBlock = activeBlock.nextElementSibling.nextElementSibling;
            if (!nextBlock) {nextBlock = document.querySelector('#pic_block1')};
            nextBlock.checked = true;
        }, 6000);

    function stopPlay() {
        clearInterval(autoplay);
        console.log('Autoplay stopped. Reload to restart it.');
    };
    
    imageBlocks.forEach(element => element.addEventListener('click', stopPlay));
});