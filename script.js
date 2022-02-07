function showrate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
    
    rateval.onchange = function() 
    {
        document.getElementById("rate_val").innerText = this.value;
    }
}
      
function compute()
{
    var principal = parseFloat(document.getElementById("principal").value,10);
    if(principal == "" || principal <= 0)
    {
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }

    var rate =  parseFloat(document.getElementById("rate").value,10);
    var years =  parseFloat(document.getElementById("years").value,10);
    var interest = principal * years * rate /100;
    var year = new Date().getFullYear()
    var finalYear = year + years;
    document.getElementById("result").innerHTML = "<br />If you deposit <mark>"+principal+"</mark>,<br />at an interest rate of <mark>"+rate+"%</mark>.<br />You will receive an amount of <mark>"+interest+"</mark><br />in the year <mark>"+finalYear+"</mark>";
}