
$(document).ready(function() {
    $(".js-rating").each(function() {
        let el = $(this),
            rating = parseFloat(el.attr('rating'));

        if (rating) {
            el.find(".js-rating__gr").css({ height: 13/100*rating + 'rem' })
        }
    })

    const voteRender = function() {
        $(".vote").each(function() {
            let el = $(this),
                all = parseInt(el.find('.vote__results').attr('total-count')),
                els = [];
            el.find('.vote__item').each(function() {
                let th = $(this);
                els.push(parseInt(th.attr('count')));
            })
            els.forEach(function(item, index) {
                el.find('.vote__item').eq(index).find('.vote__line').css({ width: item/all*100 + '%'})
            })
        })
    }

    voteRender();

    $(".vote .btn").click(function() {
        let el = $(this), item, curCount, all, results;
        if (!el.hasClass('active')) {
            el.addClass('active').siblings().removeClass('active');
            el.parent().addClass('active');
            results = $(".vote .vote__results");
            all = parseInt(results.attr('total-count')) + 1;
            results.attr('total-count', all);
            item = $(".vote .vote__item").eq(el.index()).addClass('active');
            curCount = parseInt(item.attr('count')) + 1;
            item.attr('count', curCount);
            voteRender();
        }
    })

    let masks = [];
    $(".search-filter input[type=text]").each(function() {
        let el = this;
        masks.push(IMask(
            el,
            {
                mask: Number,
                min: 0,
                thousandsSeparator: ' '
            }));
    })

    $(".faq-list__title").click(function() {
        $(this).toggleClass('active').next().slideToggle();
    })

    var swiper = new Swiper(".mySwiper", {
        spaceBetween: 20,
        slidesPerView: 3,
        freeMode: true,
        watchSlidesProgress: true,
    });
    var swiper2 = new Swiper(".mySwiper2", {
        spaceBetween: 10,
        thumbs: {
            swiper: swiper,
        },
    });

    $("#tt").change(function() {
        console.log('select changed');
    })
})