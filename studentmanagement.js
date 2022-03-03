
var row=1;
function Submit(){
   var fn=document.getElementById("FN").value;
   var mn=document.getElementById("MN").value;
   var ln=document.getElementById("LN").value;
   var msn=document.getElementById("MSN").value;
   var age=document.getElementById("age").value;
   var home=document.getElementById("HAdd").value;
   var regis=document.getElementById("RD").value;
    
   if(!fn||!mn||!ln||!msn|| !age|| !home||!regis ) {
       alert("Please fill all the boxes");
       return;
    }
   var display= document.getElementById("table");
   var newRow=display.insertRow(row);
   var cell0=newRow.insertCell(0);
   var cell1=newRow.insertCell(1);
   var cell2=newRow.insertCell(2);
   var cell3=newRow.insertCell(3);
   var cell4=newRow.insertCell(4);
   var cell5=newRow.insertCell(5);
   var cell6=newRow.insertCell(6);
   var cell7=newRow.insertCell(7);

   

   cell0.innerHTML=fn;
   cell1.innerHTML=mn;
   cell2.innerHTML=ln;
   cell3.innerHTML=msn;
   cell4.innerHTML=age;
   cell5.innerHTML=home;
   cell6.innerHTML=regis;
   
   row++;
   
}
function selectedRowToInput()
{
    var rIndex,table = document.getElementById("table");
    for(var i=1; i < table.row.length; i++)
    {
        table.row[i].onclick=function()
        {  //get the selected row index
           rIndex= this.rowIndex;
           document.getElementById("FN").value=this.cell[0].innerHTML;
           document.getElementById("MN").value=this.cell[1].innerHTML;
           document.getElementById("LN").value=this.cell[2].innerHTML;
           document.getElementById("MSN").value=this.cell[3].innerHTML;
           document.getElementById("age").value=this.cell[4].innerHTML;
           document.getElementById("HAdd").value=this.cell[5].innerHTML;
           document.getElementById("RD").value=this.cell[6].innerHTML;

           
        };
    }

}
      selectedRowToInput();
