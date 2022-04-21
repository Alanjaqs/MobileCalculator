
function cero()
{
    document.calculator.ans.value+='0';
}

function uno()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '1';
    }
    else
    {
        document.calculator.ans.value+='1';
    }
}

function dos()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '2';
    }
    else
    {
        document.calculator.ans.value+='2';
    }
}

function tres()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '3';
    }
    else
    {
        document.calculator.ans.value+='3';
    }
}

function cuatro()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '4';
    }
    else
    {
        document.calculator.ans.value+='4';
    }
}

function cinco()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '5';
    }
    else
    {
        document.calculator.ans.value+='5';
    }
}

function seis()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '6';
    }
    else
    {
        document.calculator.ans.value+='6';
    }
}

function siete()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '7';
    }
    else
    {
        document.calculator.ans.value+='7';
    }
}

function ocho()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '8';
    }
    else
    {
        document.calculator.ans.value+='8';
    }
}

function nueve()
{   
    if (document.calculator.ans.value == 0)
    {
        document.calculator.ans.value = '9';
    }
    else
    {
        document.calculator.ans.value+='9';
    }
}

function suma()
{
    document.calculator.ans.value+='+';
}

function resta()
{
    document.calculator.ans.value+='-';
}

function multi()
{
    document.calculator.ans.value+='*';
}

function division()
{
    document.calculator.ans.value+='/';
}

function decimal()
{
    document.calculator.ans.value+='.';
}

function igual()
{
    document.calculator.ans.value = eval(document.calculator.ans.value);
}