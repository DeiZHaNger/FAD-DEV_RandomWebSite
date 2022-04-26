/* jshint esversion: 6 */

window.addEventListener('load', function () {
    const carousel = document.querySelectorAll('.carousel input');
    const imageBlocks = document.querySelectorAll('.carousel img, .carousel h3');

    function setCarouselAnimation() {
        const autoplay = setInterval(function () {
                let activeBlock = Array.from(carousel).find(element => element.checked == true);
                let nextBlock = activeBlock.nextElementSibling.nextElementSibling;
                if (!nextBlock) {nextBlock = document.querySelector('#pic_block1');}
                nextBlock.checked = true;
            }, 4000);

        function stopPlay() {
            clearInterval(autoplay);
            imageBlocks.forEach(element => {element.removeEventListener('click', stopPlay);
                                            element.style.cursor = "url('./assets/play_cursor.png'), pointer";
                                            element.addEventListener('click', setCarouselAnimation);
                                        });
        }
        
        imageBlocks.forEach(element => {element.removeEventListener('click', setCarouselAnimation);
                                        element.style.cursor = "url('./assets/stop_cursor.png'), pointer";
                                        element.addEventListener('click', stopPlay);
                                    });
    }

    setCarouselAnimation();
});