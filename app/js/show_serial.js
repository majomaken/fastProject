var refresh = document.getElementById("refresh_page");
var show_div_serials = document.getElementById("all_serials");
var serial_num = "0";
show_data ();
function show_data () {
        console.log('Ready query')
        var serial_data= "serial_num="+serial_num;
        var ajx = new XMLHttpRequest()
        ajx.onreadystatechange = function () {
            event.preventDefault()
            if (ajx.readyState == 4 && ajx.status == 200) {
                show_div_serials.innerHTML = ajx.responseText;
            }
        }
        ajx.open("POST", "app/php/show_serial.php", true)
        ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        ajx.send(serial_data)
        console.log(serial_data)
}

refresh.addEventListener("click", show_data,false);