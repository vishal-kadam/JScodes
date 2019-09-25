import CustomInput from './custominput.mjs';

export default class RadioHandler extends CustomInput {

    render() {
        let arr = this.data.split(",");
        let html="";
        for(let i=0;i<arr.length;i++) {
            html+=(`<input type='radio' name='gender' >${arr[i]}`);
        }
        $('#mydiv').append(`<div><span><p>${this.dataName}</p></span><br>${html}</div>`);
    }
}
