/*start of the calculator*/
function start(){
    //alert("the calculator has started!");
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("output").value="";
    document.getElementById("opr").value="";
    document.getElementById("n1").value="";
    document.getElementById("operation").addEventListener( "change", function(){  //event listener for the select element,
    var sel_mode = this.options[this.selectedIndex].value;  //get the selected mode (unary,binary,base-n)
    var unaryopr = document.getElementById("unaryopr");
    var binaryopr = document.getElementById("binaryopr");
    var basenopr = document.getElementById("basenopr");
    var n1 = document.getElementById("n1");
    var num2 = document.getElementById( "num2" );
    var num1 = document.getElementById( "num1" );
    var opr = document.getElementById("opr");
        if(sel_mode=="unr"){
            //alert("unary mode selected!");
            document.getElementById("num1").value="";
            document.getElementById("num2").value="";
            document.getElementById("output").value="";
            document.getElementById("opr").value="";
            unaryopr.style="display:inline-block";
            binaryopr.style="display:none";
            basenopr.style="display:none";
            n1.style="display:none";
            num1.style="display:inline";
            num2.style="display:none";
            opr.style= "display:inline";
        }
        else if(sel_mode=="bnr"){
            //alert("binary mode selected!");
            document.getElementById("num1").value="";
            document.getElementById("num2").value="";
            document.getElementById("output").value="";
            document.getElementById("opr").value="";
            unaryopr.style="display:none";
            binaryopr.style="display:inline-block";
            basenopr.style="display:none";
            n1.style="display:none";
            num2.style="display:inline";
            document.getElementsByTagName("span").style="display:inline";
        }
        else if(sel_mode=="basen"){
            //alert("base-n mode selected!");
            document.getElementById("num1").value="";
            document.getElementById("num2").value="";
            document.getElementById("output").value="";
            document.getElementById("opr").value="";
            unaryopr.style="display:none";
            binaryopr.style="display:none";
            basenopr.style="display:inline-block";
            n1.style="display:inline";
            num2.style="display:none";
        }
        else if(sel_mode=="operation"){
            //alert("Enter a mode");
            basenopr.style="display:none";
            unaryopr.style="display:none";
            binaryopr.style="display:none";
            n1.style="display:none";
            num2.style="display:inline";
        }
    });
}

function clear(){
    document.getElementById("n1").value="";
    document.getElementById("num1").value="";
    document.getElementById("num2").value="";
    document.getElementById("output").value="";
    document.getElementById("opr").value="";
}

function del(){
    if(document.getElementById("opr").value==""){
        document.getElementById("num1").value=document.getElementById("num1").value.slice(0,-1);
    }
    else{
        document.getElementById("num2").value=document.getElementById("num2").value.slice(0,-1);
    }
}

/* calculation function */
function add(num1,num2){
    return  num1+num2;
}

function sub(num1,num2){
    return  num1-num2;
}

function mul(num1,num2){
    return  num1*num2;
}

function div(num1,num2){
    return  num1/num2;
}

function rem(num1,num2){
    return num1%num2;
}

function factorial(num1){
    var fact = 1;
    for(var i=2;i<num1 + 1 ;i++){
        fact *= i;
    }
    return fact;
}

function power(num1,num2){
    return   Math.pow(num1,num2);
}

function root(num1,num2){
    return Math.pow(num1, (1 / num2));
}

function comb(num1,num2){
    return (factorial(num1)/(factorial(num2)*factorial(num1-num2)));
}

function perm(num1,num2){
    return (factorial(num1)/(factorial(num1-num2)));
}

function DecToBin(num1){
    return (parseFloat(num1).toString(2));
}

function DecToOct(num1){
    return (parseFloat(num1).toString(8));
}

function DecToHexa(num1){
    return (parseFloat(num1).toString(16));
}

function BinToDec(num1){
    return  parseInt(num1,2);
}

function  OctToDec(num1) {
    return parseInt(num1,8);
}

function HexaToDec(num1) {
    return parseInt(num1,16);
}

function BinToOct(num1){
    return  DecToOct(BinToDec(num1));
}

function  BinToHexa(num1) {
   return  DecToHexa(BinToDec(num1));
}

function OctToBin(num1){
    return  DecToBin(OctToDec(num1)) ;
}

function HexaToBin(num1){
    return DecToBin(HexaToDec(num1));
}

function OctToHexa(num1){
    return DecToHexa(OctToDec(num1)).toUpperCase();
}

function HexaToOct(num1){
    return  DecToOct(HexaToDec(num1));
}

/* input function */
function bin_opr(opr1){
    if(document.getElementById("output").value!="")
    {
        document.getElementById("num1").value=document.getElementById("output").value;
        document.getElementById("output").value="";
        document.getElementById("num2").value="";
    }
    else if(document.getElementById("operation").selectedIndex==4){
        document.getElementById("num1").value+=opr1;
    }
    document.getElementById("opr").value=opr1;
}

function un_opr(opr1){
    document.getElementById("opr").value=opr1;
}

function base_n_opr(opr1){
    if(document.getElementById("num1").value==""){
        document.getElementById("n1").value=opr1;
    }
    else{
        document.getElementById("opr").value=opr1;
    }
}

function inp(num1){
    if(document.getElementById("operation").selectedIndex==4){
        document.getElementById("num1").value+=num1;
    }
    else if(document.getElementById("n1").value==""){
        if(document.getElementById("opr").value==""){
            document.getElementById("num1").value+=num1;
        }
        else{
            document.getElementById("num2").value+=num1;
        }
    }
    else{
        document.getElementById("num1").value+=num1;
    }
}


/*calculate function */
function cal(){
    var opr = document.getElementById("opr").value;
    var n1 = document.getElementById("n1").value;
    num1 = parseFloat(document.getElementById("num1").value);
    num2 = parseFloat(document.getElementById( "num2" ).value );
    var opt="0";
    if(opr=="!"){
        opt=factorial(num1);
    }
    else if(opr=="ln") {
        if(num1==0) opt="undefined";
        else if(num1==2.718281828459045) opt=1;
        opt = Math.log(num1);
    }
    else if(opr=="Sin"){
        if(num1%3.141592653589793238462643383279502884197==0) opt=0;
        else{
            opt = Math.sin(num1);
        }
    }
    else if(opr=="Cos") opt=Math.cos(num1);
    else if(opr=="Tan"){
        if(num1%3.141592653589793238462643383279502884197==0) opt=0;
        else{
            opt = Math.tan(num1);
        }
    }
    else if(opr=="Cot"){
        if(num1%3.141592653589793238462643383279502884197==0) opt="undefined";
        else opt=Math.cos(num1)/Math.sin(num1);
    }
    else if(opr=="Cosec")
        if(num1%3.141592653589793238462643383279502884197==0) opt="undefined";
        else opt=1/Math.sin(num1);
    else if(opr=="Sec") opt=1/Math.cos(num1);
    else if(opr=="+") opt=add(num1,num2);
    else if(opr=="-") opt=sub(num1,num2);
    else if(opr=="x") opt=mul(num1,num2);
    else if(opr=="/") opt=div(num1,num2);
    else if(opr=="%") opt=rem(num1,num2);
    else if(opr=="^") opt=power(num1,num2);
    else if(opr=="1/n") opt=root(num1,num2);
    else if(opr=="nCr") opt=comb(num1,num2);
    else if(opr=="nPr") opt=perm(num1,num2);
    else if(opr=="DEC"){
        num1 = document.getElementById("num1").value;
        if(n1=="BIN") opt=BinToDec(num1);
        else if(n1=="OCT") opt=OctToDec(num1);
        else if(n1=="HEX") opt=HexaToDec(num1);
        else opt=num1;
    }
    else if(opr=="BIN"){
        num1 = document.getElementById("num1").value;
        if(n1=="DEC") opt=DecToBin(num1);
        else if(n1=="OCT") opt=OctToBin(num1);
        else if(n1=="HEX") opt=HexaToBin(num1);
        else opt=num1;
    }
    else if(opr=="OCT"){
        num1 = document.getElementById("num1").value;
        if(n1=="DEC") opt=DecToOct(num1);
        else if(n1=="BIN") opt=BinToOct(num1);
        else if(n1=="HEX") opt=HexaToOct(num1);
        else opt=num1;
    }
    else if(opr=="HEX"){
        num1 = document.getElementById("num1").value;
        if(n1=="DEC") opt=DecToHexa(num1);
        else if(n1=="OCT") opt=OctToHexa(num1);
        else if(n1=="BIN") opt=BinToHexa(num1);
        else opt=num1;
    }
    document.getElementById("output").value=opt;
}