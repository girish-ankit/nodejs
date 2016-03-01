(function() {
    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
        var msViewportStyle = document.createElement("style");
        msViewportStyle.appendChild(
                document.createTextNode("@-ms-viewport{width:auto!important}")
                );
        document.getElementsByTagName("head")[0].appendChild(msViewportStyle);
    }
})();

$(document).ready(function(){
    $('.video_slide img').click(function(){
        console.log($(this).attr('alt'));
        $('div.niit_video_demo').each(function(){
            var oldHtml = $(this).html();
            $(this).html('');
            $(this).html(oldHtml);
            console.log($(this).html());
        })
    })
})
/**Blog- slider js */
if ($("#block-custom-home-page-video-blog-content-slider ul").hasClass("bxslider")) {
    var topSlider = $('.bxslider').bxSlider({
        auto: true,
        pause:5000 ,
        onSlideAfter: function() {
        topSlider.startAuto();
        },
        onSliderLoad: function(){
            $("#block-custom-home-page-video-blog-content-slider ").css("visibility", "visible");
        }
    });    
}

(function($) {


    $(document).ready(function() {

        //code for adding alt tag in slider on 02/12/2014
        var arr = ['AdvantageSuite:A platform designed to leverage change ', "Europe's largest railway operator becomes world's leading mobility and logistics company", 'A us based entertainment group saves recurring IT costs, significantly', 'Leading air cargo terminal deploys COSYS, reducing transhipment time by 37% ', 'Morris communications has cut costs by over 15% by integrating its IT and BPO services '];
        jQuery.each(arr, function(i, val) {
            var temp = i + 1;
            jQuery('#md-slider-1-block .slide-' + temp + ' .md-mainimg img').each(function() {
                if (!jQuery(this).attr('alt')) {
                    jQuery(this).attr('alt', val);
                }
            });
        });

// add nofollow link
        jQuery("body a").each(function(index, value) {
            var aLink = jQuery(this).attr('href');
            if (aLink) {
                var hasHTTP = aLink.match(/^http:/);
                var hasHTTPS = aLink.match(/^https/);
                var hasNiit = aLink.match(/^http:\/\/www.niit-tech.com/);
                var hasNoFollow = jQuery(this).attr('rel');


                if (hasHTTP || hasHTTPS) {
                    if (!hasNiit) {
                        if (!hasNoFollow) {
                            jQuery(this).attr('rel', 'nofollow');
                            // console.log(aLink);
                        }

                    }

                }
            }

        });

        // add nofollow link


        /* Banner Pages Orange Band Remove */
        jQuery(".page-node-1568 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-1569 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-1570 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-1571 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-1572 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-1807 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-1809 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2613 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2611 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2609 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2607 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2523 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2527 .inner-box-left-6").css('display', 'none');
        jQuery(".page-node-2531 .inner-box-left-6").css('display', 'none');
		jQuery(".page-node-2858 .inner-box-left-6").css('display', 'none');


        $(".inner-page-tiles-image img").addClass('img-responsive').addClass('retina').removeAttr('width').removeAttr('height');
        $(".inner-page-tiles2 .left-image img").addClass('img-responsive').addClass('retina').removeAttr('width').removeAttr('height');
        $(".inner-page-tiles3 .icon img").addClass('img-responsive').addClass('retina').removeAttr('width').removeAttr('height');
        $(".inner-page-tiles4 .tile-image4 img").addClass('img-responsive').addClass('retina').removeAttr('width').removeAttr('height');


        /*Empty Child Menu Hide */
        var chld = document.querySelector("#Child-Menu");
        if (typeof(chld) != 'undefined' && chld != null)
        {
            var chldText = jQuery("#Child-Menu").text();
            if (jQuery.trim(chldText) == '')
            {
                jQuery("#Child-Menu").parent().parent().css('display', 'none');

            }
        }

        /*Empty Child Menu Hide End */

        $(".page-search #block-custom-home-page-video-inner-page-block-6 h3").text('Search Results');
        $('img.retina').addClass('img-responsive');

        $("#block-menu-block-8").hide();
        var searchHtml = $('#custom-sreach').html();
        $('nav ul.flexnav > li:last').after('<li id="cc-search-li" class="item-with-ul leaf"><a href="#"></a></li>');
        $('li#cc-search-li').html(searchHtml);
        $('.header-top-right ul.menu > li:last').after('<li class="c-country icon"><a title="German" class="german-flag" target="_blank" href="http://www.niit-tech.de/" rel="nofollow" style="position:relative; top:-2px"><img border="1" width="20" height="20" alt="German" src="/sites/all/themes/stability/niit_reposive/images/german.png"></a>&nbsp;&nbsp;&nbsp;&nbsp;<a title="Spanish" class="spanish-flag" target="_blank" href=" http://www.niit-tech.com/sp/" rel="nofollow"><img border="1" width="20" height="20" alt="Spanish" src="/sites/all/themes/stability/niit_reposive/images/spanish.png"></a></li>');
        var leftnav = $('#sidebar2 div.menu-block-wrapper').html();
        $('#inner-nav nav ul').html(leftnav);

// Front page four vertical box click event

        $("#Four-Verticles .box1").click(function() {
            $("#Four-Verticles .box1").css('background-color', '#0066B3');
            $(this).css('background-color', '#2296ED');

        });


        $("#Slider .casestudy-box").click(function() {
            $("#Slider .casestudy-box").css('background-color', '#828282');
            $(this).css('background-color', '#444444');

        });




        /*** Video sections ***/

        //footer menu selection code ends
        $(".niit_video_demo").eq(0).show();
        $(".video_slide li").eq(0).addClass("active_tab");
        $(".video_slide li").eq(0).show();
        $(".video_slide li").click(function()
        {
            var index = $(".video_slide li").index(this);
            $(".niit_video_demo").hide();
            $(".niit_video_demo").eq(index).show();
            $(".video_slide li").removeClass("active_tab");
            $(".video_slide li").eq(index).addClass("active_tab");
        });

        $(".video_snippet:odd").css("margin", "0 0 10px 0");
        $(".share_snippet:odd").css("margin", "10px 0 10px 0");

        $('.view table tbody tr').each(function(index, value) {

            if (index % 2 == 0) {
                $(this).addClass('c-even');
            } else {
                $(this).addClass('c-odd');
            }
            $("tr.t-head").css('background-color', '#0066B3').css('color', '#FFFFFF');
        });

        $('#block-views-62493041d17163fa96d0ab49456b16c5 .col-md-12').each(function(index, value) {

            if (index % 2 == 0) {
                $(this).addClass('c-even');
            } else {
                $(this).addClass('c-odd');
            }
            $('#block-views-62493041d17163fa96d0ab49456b16c5 .col-md-12.t-head').css('background-color', '#0066B3').css('color', '#FFFFFF');
        });

        $('#block-views-financial-reports-block .col-md-12').each(function(index, value) {

            if (index % 2 == 0) {
                $(this).addClass('c-even');
            } else {
                $(this).addClass('c-odd');
            }
            $('#block-views-financial-reports-block .col-md-12.t-head').css('background-color', '#0066B3').css('color', '#FFFFFF');
        });


        $('.search-results li').each(function(index, value) {
            if (index % 2 == 0) {
                $(this).addClass('c-even');
            } else {
                $(this).addClass('c-odd');
            }

        });
        var trCounter = 0;
        $('table.table_align tbody tr').each(function(index, value) {

            if (jQuery(this).html().trim().length > 0) {
                if (trCounter % 2 == 0) {

                    $(this).addClass('c-odd');
                    trCounter++;
                } else {
                    $(this).addClass('c-even');
                    trCounter++;
                }
            }
            $("tr.t-head").css('background-color', '#0066B3').css('color', '#FFFFFF');
            //$("tr.t-head th").css('border', '1px solid red').css('padding', '10px 5px');
            // $("tr.t-head td").css('border', '1px solid red').css('width', '10px 5px');
        });


    });
    
    $(document).ready(function() {
        $("img").each(function() {
            var x = $(this).attr('alt');
            if (x == undefined || x == '') {
//                var name = $(this).attr('src');
//                var nameArr = name.split('/');
//                var lastElement = nameArr.pop();
//                var lastElementArr = lastElement.split('.');
//                // console.log(lastElement);
//                $(this).attr('alt', lastElementArr[0]);
            }
        });
    });
}(jQuery));



jQuery(function($) {

    $("#footer_exapand_collp").click(function() {
        $("#block-menu-block-8").toggle(function() {
            if ($("#footer_exapand_collp").html() == '<span class="q-l-symbol">- </span><span class="q-l-text">Quick Links </span>')
                $("#footer_exapand_collp").html('<span class="q-l-symbol">+ </span><span class="q-l-text">Quick Links </span>');
            else
                $("#footer_exapand_collp").html('<span class="q-l-symbol">- </span><span class="q-l-text">Quick Links </span>');
        });
    });

    var x = $(window).width();
    var y = $(window).height();

//$("p.tagline").html('<span style="color:red; font-weight:bold;">'+x+'x'+y+'</span>');
    /* ----------------------------------------------------------- */
    /*  1. Footer Navigation
     /* ----------------------------------------------------------- */
    if (x < 977) {

        $(".menu-block-8 ").flexNav({
            'animationSpeed': 200, // default for drop down animation speed
            'transitionOpacity': true, // default for opacity animation

            'hoverIntent': true, // Change to true for use with hoverIntent plugin
            'hoverIntentTimeout': 50, // hoverIntent default timeout
            'calcItemWidths': false, // dynamically calcs top level nav item widths
            'hover': true            // would you like hover support?      
        });
    }

    $(window).resize(function() {
        x = $(window).width();
        y = $(window).height();

        if (x < 977) {

            $(".menu-block-8 ").flexNav({
                'animationSpeed': 200, // default for drop down animation speed
                'transitionOpacity': true, // default for opacity animation

                'hoverIntent': true, // Change to true for use with hoverIntent plugin
                'hoverIntentTimeout': 50, // hoverIntent default timeout
                'calcItemWidths': false, // dynamically calcs top level nav item widths
                'hover': true            // would you like hover support?      
            });
        }
    });






    $(window).resize(function() {
        x = $(window).width();
        y = $(window).height();
        //alert(x);
        //alert(y);


        if (x < 977) {
            childMenumobile();
            $('ul.flexnav li:first').css('display', 'block');

        } else {
            childMenuDesktop();
            $('ul.flexnav li:first').css('display', 'none');
        }

        if (x < 480) {


            var h = 240;
            var w = 330;
            videDimension(h, w);
        } else {
            var h = 360;
            var w = 480;
            videDimension(h, w);
        }
    });

    if (x < 977) {
        childMenumobile();
        $('ul.flexnav li:first').css('display', 'block');

    } else {
        childMenuDesktop();
        $('ul.flexnav li:first').css('display', 'none');
    }

    if (x < 480) {
        var h = 240;
        var w = 330;
        videDimension(h, w);

    } else {
        var h = 360;
        var w = 480;
        videDimension(h, w);
    }


    $("#custom_exapand_collp").click(function() {


        if ($("#custom_exapand_collp").attr('class') == 'cc-hide') {
            $("#custom_exapand_collp").removeClass('cc-hide');
            $("#custom_exapand_collp").addClass('cc-show');
            $('#cc-child-list').show();

        } else {

            $("#custom_exapand_collp").removeClass('cc-show');
            $("#custom_exapand_collp").addClass('cc-hide');
            $('#cc-child-list').hide();
        }
    });

    function childMenumobile() {
        $("#custom_exapand_collp").show();

        if ($("#custom_exapand_collp").attr('class') == 'cc-hide') {
            $('#cc-child-list').hide();
            // console.log($("#custom_exapand_collp").html());
        }


    }
    function childMenuDesktop() {



        $("#custom_exapand_collp").hide();
        $('#cc-child-list').show();

    }

    $("#cc-child-list ul.custom-child-menu li").click(function() {
        if ($("#custom_exapand_collp").attr('class') == 'cc-show') {
            $("#cc-child-list ul.custom-child-menu li").css('background-color', '#FC9A37');
            $(this).css('background-color', '#0068b3');

        }
    });

    $("nav.nav-main.c-top ul li a").click(function() {
        if ($("button.navbar-toggle").hasClass('active')) {
            $("nav.nav-main.c-top ul li a").css('background-color', '#2F2F2F');
            $(this).css('background-color', '#0068b3');

        }
    });




    function videDimension(h, w) {
        var videoCount = $(".view-display-id-block .niit_video_demo").length;
        var j = 1;

        for (var i = 0; i < videoCount; i++) {

            $("#media-youtube-" + j).height(h).width(w);
            $("#media_youtube_dxrY6ZBgtuA_" + j).height(h).width(w);
            $("#media_youtube_dxrY6ZBgtuA_" + j + " iframe").height(h).width(w);
            j++;
        }

    }


});




