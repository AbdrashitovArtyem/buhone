$(document).ready(function () {
    const pattern = /^[a-z0-9_-]+@[a-z0-9-]+\.([a-z]{1,6}\.)?[a-z]{2,6}$/i;
    $('.header__slaider-slide, .clients__slaider-slide, .reviews__slide').slick({
        dots: true,
        arrows: true
    });
    $('.navmob__menu-hide').hide();

    $('.navmob__container-left').click(function () {
        $(this).children('.hamb__active');
        $('.navmob__menu-hide').slideToggle();
        $('body').toggleClass('stop-scrolling');

        $('.hamb').toggleClass("hamb__active");
    });

    $("#header__top").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1500);
    });

    $("#phone").mask("+7 (999) 99-99-999");

    $("#form .contact__btn").click(() => {
        var data = $('#form').serializeArray();
        $.each(data, function () {
            if (this.value == '') {
                alert(`Заполните поле: ${this.name}`);
                return false;
            }
        });
        if (data[0].value.search(pattern) != 0) {
            alert("Поле Email заполнено неверно");
            $("#email").focus();
        }
        return false;
    });
});





