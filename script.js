$(function () {


//slide
const sliderElems = document.getElementsByClassName('swiper');


//取得した要素が1以上であればそれぞれの要素に対して以下を実行
if(sliderElems && sliderElems.length > 0) {
  for ( let element of sliderElems ) {
    let elementSpeed = element.getAttribute('data-speed'),
        elementDirection = element.getAttribute('data-direction'),
        elementAutoPlay = element.getAttribute('data-autoplay'),
        elementLoop = element.getAttribute('data-loop'),
        elementEffect = element.getAttribute('data-effect'),
        elementSlidesPerView = element.getAttribute('data-slides-per-view'),
        elementSlidesPerGroup = element.getAttribute('data-slides-per-group'),
        elementSpaceBetween = element.getAttribute('data-space-between'), 
        elementCenteredSlides = element.getAttribute('data-centered-slides');
 
    //data 属性が設定されていない場合は初期値（デフォルト）を設定及び型を変換
    if (!elementSpeed) {
      elementSpeed = 300;
    }
    if (!elementDirection) {
      elementDirection = 'horizontal';
    }
    //data-autoplay が設定されていれば値を数値に変換し、設定されていなければ大きな値を設定
    if (elementAutoPlay) {
      elementAutoPlay = parseInt(elementAutoPlay);
    } else {
      elementAutoPlay = 2500;
    }
    //真偽値の場合は文字列から真偽値に変換
    if (elementLoop == 'true') {
      elementLoop = true;
    } else {
      elementLoop = false;
    }
    if (!elementEffect) {
      elementEffect = 'slide';
    }
    if (!elementSlidesPerView) {
      elementSlidesPerView = 1;
    }
    if (elementCenteredSlides == 'true') {
      elementCenteredSlides = true;
    } else {
      elementCenteredSlides = false;
    }
    if (!elementSlidesPerGroup) {
      elementSlidesPerGroup = 1;
    }
    if (!elementSpaceBetween) {
      elementSpaceBetween = 0;
    }
 
    //上記パラメータを使って Swiper を初期化
    let swiperSlider = new Swiper(element, {
      direction: elementDirection,
      speed: parseInt(elementSpeed),
      autoplay: {
        delay: elementAutoPlay
      },
      loop: elementLoop,
      effect: elementEffect,
      slidesPerView: parseFloat(elementSlidesPerView),
      centeredSlides: elementCenteredSlides,
      slidesPerGroup: parseInt(elementSlidesPerGroup),
      spaceBetween: parseInt(elementSpaceBetween),
 
      pagination: {
        el: '.swiper-pagination', //ページネーションの要素
        type: 'bullets', //ページネーションの種類
        clickable: true, //クリックに反応させる
      },
      
    });
  }
}












    //model
    //pic1
    $('.aminme_btn1').on('click',function(){
        $('.anime1').addClass('hide');
        $('.anime1').removeClass('hide');
    })
    $('.model_btn1').on('click',function(){
        $('.model1').addClass('hide');
        $('.model1').removeClass('hide');
    })
    //pic2
    $('.aminme_btn2').on('click',function(){
        $('.anime2').addClass('hide');
        $('.anime2').removeClass('hide');
    })
    $('.model_btn2').on('click',function(){
        $('.model2').addClass('hide');
        $('.model2').removeClass('hide');
    })
    //pic3
    $('.aminme_btn3').on('click',function(){
        $('.anime3').addClass('hide');
        $('.anime3').removeClass('hide');
    })
    $('.model_btn3').on('click',function(){
        $('.model3').addClass('hide');
        $('.model3').removeClass('hide');
    })
    //pic4
    $('.aminme_btn4').on('click',function(){
        $('.anime4').addClass('hide');
        $('.anime4').removeClass('hide');
    })
    $('.model_btn4').on('click',function(){
        $('.model4').addClass('hide');
        $('.model4').removeClass('hide');
    })


















    


    // ここから上に書く
})