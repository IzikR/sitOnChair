document.addEventListener('DOMContentLoaded', function (){
    var buttonL = document.querySelector('.main-slider-button-L');
    var buttonR = document.querySelector('.main-slider-button-R');
    var sliderContent = document.querySelectorAll('.main-slider-content');
    var sliderContent1 = document.querySelector('.main-slider-content-1');
    var sliderContent2 = document.querySelector('.main-slider-content-2');
    var sliderContentId = 0;
    // // console.log(buttonL, buttonR, slider1, slider2);
    //
    buttonL.addEventListener('click', function(){
        if (sliderContent1.style.display == 'block'){
            sliderContent1.style.display = 'none';
            sliderContent2.style.display = 'block';
        }
        else{
            sliderContent1.style.display = 'block';
            sliderContent2.style.display = 'none'
        }
    });

    buttonR.addEventListener('click', function(){
        if (sliderContent1.style.display == 'block'){
            sliderContent1.style.display = 'none';
            sliderContent2.style.display = 'block';
        }
        else{
            sliderContent1.style.display = 'block';
            sliderContent2.style.display = 'none'
        }

    });
});
