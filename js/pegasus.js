$(function () {
    $(".pgs-toggle-sidebar").click(function () {
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
            // $(".pgs-toggle-sidebar").find("i").addClass("fa-rotate-180");
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
            // $(".pgs-toggle-sidebar").find("i").removeClass("fa-rotate-180");
        }
    })
})
