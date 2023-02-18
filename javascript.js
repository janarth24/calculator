let outputscreen=document.getElementById("output-screen");
function display(num)
{
    outputscreen.value+=num;
}
function calculate(){
    try{
        //test comment - 1
        outputscreen.value=eval(outputscreen.value);
    }
    catch(err)
    {
        alert("invalid");
    }
}
function del()
{
    outputscreen.value=outputscreen.value.slice(0,-1);
}
function Clear()
{
    outputscreen.value = "";
}