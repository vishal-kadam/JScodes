import CustomInput from './custominput.mjs';

export default class InputHandler extends CustomInput{

    render() {

        let text = document.getElementById('data_inpt').value;
        let html = "<br><br>"+text+": <br> <input type='text'>";
        $('#mydiv').append(html);
    }    
}
