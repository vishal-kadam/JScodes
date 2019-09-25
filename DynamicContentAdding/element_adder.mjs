import InputHandler from './inputhandler.mjs';
import RadioHandler from './radiohandler.mjs';
import ComboHandler from './comboHandler.mjs';



$(function() {
    $("#btn").bind("click",function(){
        let option = $('#sel').val();
        let dto;
        switch(option) {
    
            case 'Input':
                dto = new InputHandler();
                dto.dataName = $("#data_inpt").val();
                dto.render();
                break;
            case 'Radio':
                dto = new RadioHandler();    
                dto.dataName = $("#data_inpt").val();
                dto.data = $("#inpt").val();
                dto.render();
                break;
            case 'Combo':
                dto = new ComboHandler();
                dto.dataName = $("#data_inpt").val();
                dto.data = $("#inpt").val();
                dto.render();
                break;
        }
    });
});
