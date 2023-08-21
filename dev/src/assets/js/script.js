// Front Page Swiper

const swiper = new Swiper(".swiper", {
    loop: true,

    // If we need pagination
    pagination: {
        el: ".swiper-pagination",
    },

    // Navigation arrows
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});
// ハンバーガーメニュー実装

jQuery(".js-openbtn").click(function () {
    jQuery(this).toggleClass("active"); // ボタン自身にactiveクラスを付与
    jQuery("#js-g-nav").toggleClass("panelactive"); //ナビゲーションにpanelactiveクラスを付与
});

jQuery("#js-g-nav a").click(function () {
    jQuery(".js-openbtn").removeClass("active"); //ボタンのactiveクラスを削除
    jQuery("#js-g-nav").removeClass("panelactive"); //ナビゲーションのpanelactiveクラスを削除
});

jQuery("#js-g-nav").click(function () {
    // 背面をクリックしたら解除する処置
    jQuery(".js-openbtn").removeClass("active");
    jQuery("#js-g-nav").removeClass("panelactive");
});
