$(function () {
    $('.pgs-child-menu').each(function () {
        $(this).parent().children('a').append('<span class="pgs-menu-item-status"><i class="fa fa-angle-right"></i></span>');
    })

    var openFunctionArray = setSessionFunction();
    if (openFunctionArray.length > 0) {
        for (var i = 0; i < openFunctionArray.length; i++) {
            var functionName = openFunctionArray[i].FunctionName
            var functionUrl = openFunctionArray[i].FunctionUrl;
            var active = openFunctionArray[i].Active;
            addTab(functionName, functionUrl, active);
        }
    }

    $('.pgs-toggle-sidebar').click(function () {
        $('.menu-open').click();
        if ($('.pgs-sidebar').hasClass('pgs-sidebar-complete')) {
            $('.pgs-sidebar').removeClass('pgs-sidebar-complete');
            $('.pgs-sidebar').addClass('pgs-sidebar-lite');
            $('.pgs-header').removeClass('pgs-layout-with-complete-sidebar');
            $('.pgs-header').addClass('pgs-layout-with-lite-sidebar');
            $('.pgs-layout').removeClass('pgs-layout-with-complete-sidebar');
            $('.pgs-layout').addClass('pgs-layout-with-lite-sidebar');
            $('.pgs-footer').removeClass('pgs-layout-with-complete-sidebar');
            $('.pgs-footer').addClass('pgs-layout-with-lite-sidebar');
            $('.pgs-logo-title').removeClass('pgs-logo-title-with-complete-sidebar');
            $('.pgs-logo-title').addClass('pgs-logo-title-with-lite-sidebar');
            setTimeout(function () {
                $('.pgs-menu-item-text').hide();
                $('.pgs-menu').removeClass('pgs-menu-with-complete-sidebar');
                $('.pgs-child-menu').removeClass('pgs-child-menu-with-complete-sidebar');
                $('.pgs-child-menu').addClass('pgs-child-menu-with-lite-sidebar');
            }, 300)
            $('.pgs-menu-item-status').hide();
        } else {
            $('.pgs-sidebar').removeClass('pgs-sidebar-lite');
            $('.pgs-sidebar').addClass('pgs-sidebar-complete');
            $('.pgs-header').removeClass('pgs-layout-with-lite-sidebar');
            $('.pgs-header').addClass('pgs-layout-with-complete-sidebar');
            $('.pgs-layout').removeClass('pgs-layout-with-lite-sidebar');
            $('.pgs-layout').addClass('pgs-layout-with-complete-sidebar');
            $('.pgs-footer').removeClass('pgs-layout-with-lite-sidebar');
            $('.pgs-footer').addClass('pgs-layout-with-complete-sidebar');
            $('.pgs-logo-title').removeClass('pgs-logo-title-with-lite-sidebar');
            $('.pgs-logo-title').addClass('pgs-logo-title-with-complete-sidebar');
            $('.pgs-menu').addClass('pgs-menu-with-complete-sidebar');
            $('.pgs-menu-item-text').show();
            $('.pgs-child-menu').removeClass('pgs-child-menu-with-lite-sidebar');
            $('.pgs-child-menu').addClass('pgs-child-menu-with-complete-sidebar');
            setTimeout(function () {
                $('.pgs-menu-item-status').show();
            }, 300)
        }
    })

    $('.pgs-menu-item').click(function () {
        if ($('.pgs-sidebar').hasClass('pgs-sidebar-complete')) {
            var el = this;
            if ($(el).hasClass('menu-open')) {
                var h1 = $(el).height();
                $(el).find('ul.pgs-child-menu').hide();
                var h2 = $(el).height();
                $(el).find('ul.pgs-child-menu').show();
                $(el).height(h1);
                $(el).height(h2);
                $(el).removeClass('menu-open');
                $(el).removeClass('menu-active');
                $(el).find('i.fa-angle-right').removeClass('fa-rotate-90');
                setTimeout(function () {
                    $(el).removeAttr('style');
                    $(el).find('ul').hide();
                }, 300)
            } else {
                $('.menu-open').click();
                var h1 = $(el).height();
                $(el).find('ul.pgs-child-menu').show();
                var h2 = $(el).height();
                $(el).height(h1);
                $(el).height(h2);
                $(el).addClass('menu-open');
                $(el).addClass('menu-active');
                $(el).find('i.fa-angle-right').addClass('fa-rotate-90');
                setTimeout(function () {
                    $(el).removeAttr('style');
                }, 300)
            }
        }
    })

    $('.pgs-menu-item').hover(function () {
        if ($('.pgs-sidebar').hasClass('pgs-sidebar-lite')) {
            var el = this;
            $(el).children('.pgs-child-menu').addClass('pgs-child-menu-with-lite-sidebar-open');
        }
    }, function () {
        var el = this;
        $(el).children('.pgs-child-menu').removeClass('pgs-child-menu-with-lite-sidebar-open');
    })

    $('.pgs-child-menu-item').click(function (ev) {
        ev.stopPropagation();
        var el = this;
        var functionName = $(el).children('a').find('span').text();
        var functionUrl = $(el).children('a').attr('href');

        if (setSessionFunction(functionName, functionUrl, 'add')) {
            if (setSessionFunction(functionName, functionUrl, 'active')) {
                addTab(functionName, functionUrl, true);
            }
        }
    })

    $(document).on('click', '.pgs-tab', function () {
        var el = this;
        var functionName = $(el).children('a').children('.pgs-tab-text').text();
        var functionUrl = $(el).children('a').attr('href');
        if ($(el).hasClass('tab-active')) {
            // $(el).removeClass('tab-active');
        } else {
            $('.tab-active').removeClass('tab-active');
            if (setSessionFunction(functionName, functionUrl, 'active')) {
                $(el).addClass('tab-active');
            }
        }
    })
    $(document).on('click', '.pgs-tab-close', function (ev) {
        ev.stopPropagation();
        var el = this;
        var functionName = $(el).parent().children('.pgs-tab-text').text();
        var functionUrl = $(el).parent().attr('href');
        if (setSessionFunction(functionName, functionUrl, 'remove')) {
            if($(el).parents('.pgs-tab').hasClass('tab-active')){
                $('.pgs-tab:not(.tab-active):last').click();
            }
            $(el).parents('.pgs-tab').remove();
        }
    })

    $(document).on('click', '.fa-refresh', function () {
        var el = this;
        $(el).addClass('fa-spin');
        setTimeout(function () {
            $(el).removeClass('fa-spin');
        }, 5000)
    })

    function addTab(functionName, functionUrl, active) {
        var activeClass='';
        if(active) {
            $('.tab-active').removeClass('tab-active');
            activeClass=' tab-active';
        }
        $('.pgs-nav-container').append('<div class="pgs-tab ' + activeClass + '"><a href="'
            + functionUrl + '"><i class="fa fa-refresh"></i><span class="pgs-tab-text">'
            + functionName + '</span><span class="pgs-tab-close"><i class="fa fa-remove"></i></span></a></div>');
    }

    function setSessionFunction(functionName, functionUrl, action) {
        var openFunctionArray = new Array();
        var openFunctionString = sessionStorage.getItem('openFunctionString');
        if (openFunctionString !== null) {
            openFunctionArray = JSON.parse(openFunctionString);
        }
        if (action === 'add') {
            if (openFunctionArray.length > 0) {
                for (var i = 0; i < openFunctionArray.length; i++) {
                    if (openFunctionArray[i].FunctionName === functionName) {
                        return false;
                    }
                }
            }
            var openFunction = new Object();
            openFunction.FunctionName = functionName;
            openFunction.FunctionUrl = functionUrl;
            openFunction.Active = false;
            openFunctionArray.push(openFunction);
            openFunctionString = JSON.stringify(openFunctionArray);
            sessionStorage.setItem('openFunctionString', openFunctionString);
            return true;
        } else if (action === 'remove') {
            for (var i = 0; i < openFunctionArray.length; i++) {
                if (openFunctionArray[i].FunctionName === functionName) {
                    openFunctionArray.splice(i, 1);
                    openFunctionString = JSON.stringify(openFunctionArray);
                    sessionStorage.setItem('openFunctionString', openFunctionString);
                    return true;
                }
            }
            return false;
        } else if (action === 'active') {
            var flag = false;
            if (openFunctionArray.length > 0) {
                for (var i = 0; i < openFunctionArray.length; i++) {
                    if (openFunctionArray[i].FunctionName === functionName) {
                        openFunctionArray[i].Active = true;
                        flag = true;
                    } else {
                        openFunctionArray[i].Active = false;
                    }
                }
            }
            if (flag) {
                openFunctionString = JSON.stringify(openFunctionArray);
                sessionStorage.setItem('openFunctionString', openFunctionString);
            }
            return flag;
        } else {
            return openFunctionArray;
        }
    }
})
