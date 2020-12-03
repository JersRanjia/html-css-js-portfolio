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

init_background() ;
