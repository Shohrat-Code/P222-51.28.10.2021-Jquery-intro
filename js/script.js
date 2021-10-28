$(document).ready(function() {

    // $("main #banner .item .content a").click(function(e) {
    //     e.preventDefault();

    //     console.log($(this)[0].innerHTML);
    //     console.log(this);
    //     // console.log(this.innerHTML);
    // });

    // $("input[name='name']").keyup(function(e) {
    //     e.preventDefault();
    //     console.log($(this)[0].value)

    // });


    // $(".myInput").keyup(function(e) {
    //     e.preventDefault();
    //     console.log($(this)[0].value)
    // });

    // $(".myInput").on("keyup", function(e) {
    //     e.preventDefault();
    //     console.log($(this)[0].value)
    // });

    // let isShown = false;
    // $("main #banner .wrapper .title ul li").click(function(e) {
    //     e.preventDefault();
    //     let index = $(this).data("index");
    //     let items = $("main #banner .wrapper .content .item");
    //     // for (let i = 0; i < items.length; i++) {
    //     //     $(items[i]).fadeOut();
    //     // }

    //     // for (let i = 0; i < items.length; i++) {
    //     //     if (items[i].dataset.index == index) {
    //     //         $(items[i]).fadeIn(600, function() {
    //     //             console.log("Task complated!")
    //     //         });
    //     //     }
    //     // }

    //     // for (let i = 0; i < items.length; i++) {
    //     //     $(items[i]).hide();
    //     // }

    //     // for (let i = 0; i < items.length; i++) {
    //     //     if (items[i].dataset.index == index) {
    //     //         $(items[i]).slideToggle("fast", function() {
    //     //             if (isShown == false) {
    //     //                 isShown = true;
    //     //                 console.log("Shown");
    //     //             } else {
    //     //                 isShown = false;
    //     //                 console.log("Hidden")
    //     //             }
    //     //         });
    //     //     }
    //     // }

    // })

    // $("main #banner .click .title").click(function() {
    //     // console.log($(this).html("new text"))
    //     // console.log($(this).attr("title", "old title"))
    //     // $(this).next().slideDown(200).hide(200).show(200).slideUp(200).slideDown(200).hide(200).show(200).slideUp(200).slideDown(200).hide(200).show(200).slideUp(200).slideDown(200).hide(200).show(200).slideUp(200);
    // });

    $("#submit").click(function(e) {
        e.preventDefault();

        // $(this).empty();
        // let name = $("main #banner .addToTable form input[name='name']").val();
        // let surname = $("main #banner .addToTable form input[name='surname']").val();
        // let tbody = $("main #banner .addToTable table tbody");

        // let tr = `<tr>
        //             <td>${name}</td>
        //             <td>${surname}</td>
        //         </tr>`;
        // tbody.before(tr);

        // $(this).toggleClass("btn-success");
        // $(this).css({
        //     "padding": "30px",
        //     "color": "black",
        //     "fontWeight": "500"
        // });

        // console.log($(this).width());
        // console.log($(this).innerWidth());
        // console.log($(this).outerWidth());
        // console.log($(this).outerWidth(true));
    });


    $("main #banner #button").click(function(e) {
        e.preventDefault();

        // console.log($(this).parent());
        // console.log($(this).parents());
        // console.log($(this).parentsUntil(".row"));
        // console.log($(this).find("span"));
        // console.log($(this).next());
        // console.log($(this).nextAll());
        // console.log($(this).prev());
        // console.log($(this).prevAll());
        // console.log($(this).siblings());
    });

    // console.log($("main #banner #lists li").first());
    // console.log($("main #banner #lists li").last());
    // console.log($("main #banner #lists li").eq(2));
    console.log($("main #banner #lists li").filter("li[class='item']"));
    console.log($("main #banner #lists li").not("li[class='item']"));
});