function main() {
    var menu_items = document.querySelectorAll("#menu-page ul li") ;
    var class_menuActive = "menu-active" ;
    menu_items[0].classList.add(class_menuActive) ;

    for (var i = 0; i < menu_items.length; i++) {
        var id_page = "page-" + menu_items[i].id ;
        var page = document.getElementById(id_page) ;
        alert(page.innerHTML)

        menu_items[i].onclick = function(e) {
            var page_actu = page ;
            alert(page_actu.innerHTML)
            var active_menu = document.getElementsByClassName(class_menuActive)[0]
            active_menu.classList.remove(class_menuActive)
            page.classList.add(class_menuActive)
            page.style.display = "flex" ;
        }
    }
}


var class_menuActive = "menu-active" ;

function changePage(menu_name) {

    var menu_actu = document.getElementById(menu_name)

    var id_new_page = "page-" + menu_name ;
    var page = document.getElementById(id_new_page) ;

    var active_menu = document.getElementsByClassName(class_menuActive)[0]
    var id_old_page = "page-" + active_menu.id
    var old_page = document.getElementById(id_old_page) ;


    active_menu.classList.remove(class_menuActive)
    old_page.style.display = "none" ;
    menu_actu.classList.add(class_menuActive)
    page.style.display = "flex" ;

}
