import CustomInput from './custominput.mjs';

export default class ComboHandler extends CustomInput {

    render() {

        let states = String(this.data).split(",");
        let html=`<br><br> <strong> ${this.dataName} </strong> <br> <select name='states'> <option value=''>States</option>`;
        
        for(let i of states) {

            html+=("<option value='"+i+"'>"+i+"</option>");            
        }
        html+="</select>";

        $('#mydiv').append(html);
    }
}
