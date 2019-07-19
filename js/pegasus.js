$(function () {
    $(".pgs-child-menu").each(function () {
        $(this).parent().children("a").append('<span class="pgs-menu-item-status"><i class="fa fa-angle-right"></i></span>');
    })

    $(".pgs-toggle-sidebar").click(function () {
        $(".menu-open").click();
        if ($(".pgs-sidebar").hasClass("pgs-sidebar-complete")) {
            $(".pgs-sidebar").removeClass("pgs-sidebar-complete");
            $(".pgs-sidebar").addClass("pgs-sidebar-lite");
            $(".pgs-header").removeClass("pgs-layout-with-complete-sidebar");
            $(".pgs-header").addClass("pgs-layout-with-lite-sidebar");
            $(".pgs-layout").removeClass("pgs-layout-with-complete-sidebar");
            $(".pgs-layout").addClass("pgs-layout-with-lite-sidebar");
            $(".pgs-footer").removeClass("pgs-layout-with-complete-sidebar");
            $(".pgs-footer").addClass("pgs-layout-with-lite-sidebar");
            $(".pgs-logo-title").removeClass("pgs-logo-title-with-complete-sidebar");
            $(".pgs-logo-title").addClass("pgs-logo-title-with-lite-sidebar");
            setTimeout(function () {
                $(".pgs-menu-item-text").hide();
                $(".pgs-menu").removeClass("pgs-menu-with-complete-sidebar");
                $(".pgs-child-menu").removeClass("pgs-child-menu-with-complete-sidebar");
                $(".pgs-child-menu").addClass("pgs-child-menu-with-lite-sidebar");
            }, 300)
            $(".pgs-menu-item-status").hide();
        } else {
            $(".pgs-sidebar").removeClass("pgs-sidebar-lite");
            $(".pgs-sidebar").addClass("pgs-sidebar-complete");
            $(".pgs-header").removeClass("pgs-layout-with-lite-sidebar");
            $(".pgs-header").addClass("pgs-layout-with-complete-sidebar");
            $(".pgs-layout").removeClass("pgs-layout-with-lite-sidebar");
            $(".pgs-layout").addClass("pgs-layout-with-complete-sidebar");
            $(".pgs-footer").removeClass("pgs-layout-with-lite-sidebar");
            $(".pgs-footer").addClass("pgs-layout-with-complete-sidebar");
            $(".pgs-logo-title").removeClass("pgs-logo-title-with-lite-sidebar");
            $(".pgs-logo-title").addClass("pgs-logo-title-with-complete-sidebar");
            $(".pgs-menu").addClass("pgs-menu-with-complete-sidebar");
            $(".pgs-menu-item-text").show();
            $(".pgs-child-menu").removeClass("pgs-child-menu-with-lite-sidebar");
            $(".pgs-child-menu").addClass("pgs-child-menu-with-complete-sidebar");
            setTimeout(function () {
                $(".pgs-menu-item-status").show();
            }, 300)
        }
    })

    $(".pgs-menu-item").click(function () {
        if ($(".pgs-sidebar").hasClass("pgs-sidebar-complete")) {
            var e = this;
            if ($(e).hasClass("menu-open")) {
                var h1 = $(e).height();
                $(e).find("ul.pgs-child-menu").hide();
                var h2 = $(e).height();
                $(e).find("ul.pgs-child-menu").show();
                $(e).height(h1);
                $(e).height(h2);
                $(e).removeClass("menu-open");
                $(e).removeClass("menu-active");
                $(e).find("i.fa-angle-right").removeClass("fa-rotate-90");
                setTimeout(function () {
                    $(e).removeAttr("style");
                    $(e).find("ul").hide();
                }, 300)
            } else {
                $(".menu-open").click();
                var h1 = $(e).height();
                $(e).find("ul.pgs-child-menu").show();
                var h2 = $(e).height();
                $(e).height(h1);
                $(e).height(h2);
                $(e).addClass("menu-open");
                $(e).addClass("menu-active");
                $(e).find("i.fa-angle-right").addClass("fa-rotate-90");
                setTimeout(function () {
                    $(e).removeAttr("style");
                }, 300)
            }
        }
    })

    $(".pgs-menu-item").hover(function () {
        if ($(".pgs-sidebar").hasClass("pgs-sidebar-lite")) {
            var e = this;
            $(e).children(".pgs-child-menu").addClass("pgs-child-menu-with-lite-sidebar-open");
        }
    }, function () {
        var e = this;
        $(e).children(".pgs-child-menu").removeClass("pgs-child-menu-with-lite-sidebar-open");
    })

    $(".pgs-tab").click(function(){
        var e = this;
        if ($(e).hasClass("tab-active")) {
            $(e).removeClass("tab-active");
        } else {
            $(".tab-active").click();
            $(e).addClass("tab-active");
        }
    })

    $(".fa-refresh").click(function(){
        var e = this;
        $(e).addClass("fa-spin");
        setTimeout(function () {
            $(e).removeClass("fa-spin");
        }, 5000)
    })
})
