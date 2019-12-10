var serial_num = document.getElementById('serial_num');
var send_serial_bott = document.getElementById('send_serial');
var resp = document.getElementById('resp');
var count = 0;

function insert_data () {
    if(count === 0)
    {
        if (serial_num.value === "")
        {
            event.preventDefault();
            console.log('This file is empty')
        }
        else 
        {
            event.preventDefault();
            console.log('Ready insert')
            var serial_data= "serial_num="+serial_num.value;
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
        return false;
    }

}

send_serial_bott.addEventListener('click', insert_data, false);