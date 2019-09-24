class InputHandler {

    inputHandler() {

        let text = document.getElementById('inpt').value;
        let html= "<br><br>"+text+": <br> <input type='text'>";
        $('#mydiv').append(html);
    }    
}

class RadioHandler {

    radioHandler() {

        let arr = String(document.getElementById('inpt').value).split(",");        
        let a="<br><br> <strong> Select Gender... </strong> <br>";
        let html="";

        for(let i=0;i<arr.length;i++) {

            let temp="<input type='radio' name='gender' >"+arr[i];
            html+=temp;
        }

        html=a+html;

        $('#mydiv').append(html);
    }
}

class ComboHandler {

    comboHandler() {

        let states = String(document.getElementById("inpt").value).split(",");
        let html="<br><br> <strong> All States-> </strong> <br> <select name='states'> <option value=''>States</option>";
        
        for(let i of states) {

            let temp="<option value='"+i+"'>"+i+"</option>";
            html+=temp;
        }
        html+="</select>";

        $('#mydiv').append(html);
    }
}

function fx() {            
    
    let option = document.getElementById('sel').value;

    switch(option) {

        case 'Input':
            new InputHandler().inputHandler();
            break;
        case 'Radio':
            new RadioHandler().radioHandler();
            break;
        case 'Combo':
            new ComboHandler().comboHandler();
            break;
    }
}
