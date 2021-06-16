var Guest_list_names = [];

function save(){
    var name12 = document.getElementById("guest_name_input").value;

    Guest_list_names.push(name12);
    var cow = Guest_list_names.join("<br>");

    document.getElementById("guest_list_display").innerHTML = cow;
}

function sort(){
    var sorted_list = Guest_list_names.sort();
    var cat = sorted_list.join("<br>");

    document.getElementById("guest_list_display2").innerHTML = cat;
}

function search(){
    var searched_name = document.getElementById("search_box").value;
    for(var i = 0; i<=Guest_list_names.length;i++){
        if(searched_name==Guest_list_names[i]){
            document.getElementById("search_result").innerHTML = searched_name + " is found";
        }
    }
}