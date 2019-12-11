var serial_num = document.getElementById('serial_num');
var send_serial_bott = document.getElementById('send_serial');
var resp = document.getElementById('resp');
var recharge_bott = document.getElementById("recharge");
var model_disp_select = document.getElementById("model_disp_select");
var show_totals = document.getElementById("show_totals_div");
var count = 0;
show_data_totals ();
function recharge () {
    location.reload();
}
function insert_data () {
    if(count === 0)
    {
        if (serial_num.value === "" || model_disp_select.value === "")
        {
            event.preventDefault();
            resp.innerHTML = "No puede insertarse vacio";
            console.log('This file is empty')
        }
        else 
        {
            event.preventDefault();
            console.log('Ready insert')
            var serial_data= "serial_num="+serial_num.value + "&model_disp="+model_disp_select.value;
            var ajx = new XMLHttpRequest()
            ajx.onreadystatechange = function () {
                event.preventDefault()
                if (ajx.readyState == 4 && ajx.status == 200) {
                    resp.innerHTML = ajx.responseText;
                }
            }
            ajx.open("POST", "app/php/send_serial.php", true)
            ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
            ajx.send(serial_data)
            console.log(serial_data)
        }
        count++;
        return true;
    }
    else
    {
        event.preventDefault();
        console.log('Not insert')
        console.log(model_disp_select.value)
        return false;
    }
}
function show_data_totals () {
        console.log('Ready query')
        var serial_data= "serial_num="+serial_num;
        var ajx = new XMLHttpRequest()
        ajx.onreadystatechange = function () {
            event.preventDefault()
            if (ajx.readyState == 4 && ajx.status == 200) {
                show_totals.innerHTML = ajx.responseText;
            }
        }
        ajx.open("POST", "app/php/show_serial_totals.php", true)
        ajx.setRequestHeader("Content-type", "application/x-www-form-urlencoded")
        ajx.send(serial_data)
        console.log(serial_data)
}
send_serial_bott.addEventListener('click', insert_data, false);
recharge_bott.addEventListener('click', recharge, false);