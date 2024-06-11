let string="";
let buttons=document.querySelectorAll('button');
Array.from(buttons).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML== '='){
            //Avoid the implementation of eval()
            //function implement your own function
            string=eval(string);
            document.querySelector('input').value=string;
        }else{
            string+=e.target.innerHTML;
            document.querySelector('input').value=string;
        }
    })
})
