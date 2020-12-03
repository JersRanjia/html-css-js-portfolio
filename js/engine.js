var class_fondProject = "fond-project"

function init_background() {
    //assigner les background des projets
    var fond_x_year = document.getElementsByClassName(class_fondProject)
    var path_background = "url(\"../img/igglX.jpg\")"
    for (var i = 0; i < fond_x_year.length; i++) {
        var index = i + 1
        var pathX = path_background.replace("X", index)
        console.log(pathX)
        // fond_x_year[i].style.background = pathX
    }
}

// init_background() ;

function init_project_clickable() {

}

function popup_project(idProject) {

    var id_proj = "#" + idProject ;
    var titre = document.querySelector(id_proj + " h2").innerHTML
    var descri = document.querySelector(id_proj + " .description-project").innerHTML

    var modal_fond = document.getElementById("modal-fond")
    var modal_out = document.getElementById("modal-out")
    var definition_project = document.getElementById("definition-project")
    var title_project = document.getElementById("title-project")

    title_project.innerHTML = titre
    definition_project.innerHTML = descri

    modal_fond.style.display = "flex"
    modal_out.style.display = "flex"

}

function remove_popup_project() {

    var modal_fond = document.getElementById("modal-fond")
    var modal_out = document.getElementById("modal-out")

    modal_fond.style.display = "none"
    modal_out.style.display = "none"

}

// popup_work

function popup_work(idWork) {

    var id_work = "#" + idWork ;

    var poste = document.querySelector(id_work + " .td-poste").innerHTML
    var langage = document.querySelector(id_work + " .td-langage").innerHTML
    var mission = document.querySelector(id_work + " .td-mission").innerHTML

    var modal_fond = document.getElementById("modal-fond")
    var modal_work_out = document.getElementById("modal-work-out")

    var post_work = document.getElementById("post-work")
    var lang_work = document.getElementById("lang-work")
    var definition_work = document.getElementById("definition-work")

    post_work.innerHTML = poste
    lang_work.innerHTML = langage
    definition_work.innerHTML = mission

    modal_fond.style.display = "flex"
    modal_work_out.style.display = "flex"

}

function remove_popup_work() {

    var modal_fond = document.getElementById("modal-fond")
    var modal_work_out = document.getElementById("modal-work-out")

    modal_fond.style.display = "none"
    modal_work_out.style.display = "none"

}