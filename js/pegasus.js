$(function () {
    $(".pgs-toggle-sidebar").click(function () {
        if ($(".pgs-sidebar").hasClass("pgs-sidebar-complete")) {
            $(".pgs-sidebar").removeClass("pgs-sidebar-complete");
            $(".pgs-sidebar").addClass("pgs-sidebar-lite");
            $(".pgs-layout").removeClass("pgs-layout-with-complete-sidebar");
            $(".pgs-layout").addClass("pgs-layout-with-lite-sidebar");
            $(".pgs-footer").removeClass("pgs-footer-with-complete-sidebar");
            $(".pgs-footer").addClass("pgs-footer-with-lite-sidebar");
        } else {
            $(".pgs-sidebar").removeClass("pgs-sidebar-lite");
            $(".pgs-sidebar").addClass("pgs-sidebar-complete");
            $(".pgs-layout").removeClass("pgs-layout-with-lite-sidebar");
            $(".pgs-layout").addClass("pgs-layout-with-complete-sidebar");
            $(".pgs-footer").removeClass("pgs-footer-with-lite-sidebar");
            $(".pgs-footer").addClass("pgs-footer-with-complete-sidebar");
        }
    })
})
