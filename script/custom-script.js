function appearDisappear(action){
    if (action === "clicked"){
        document.getElementById('searchField').setAttribute("class", "d-flex search d-block");
        document.getElementById('searchButtonToggle').setAttribute("onclick", "appearDisappear('notclicked')");
    }
    else{
        document.getElementById('searchField').setAttribute("class", "d-flex search d-none");
        document.getElementById('searchButtonToggle').setAttribute("onclick", "appearDisappear('clicked')");
    }

}