

var i=1;


function google(){
	var text=document.getElementById("text_area").value; 
	if(text.length==0 || text.length==""){
		alert("Enter the value to be searched !!!!");
			}else{
				
				open("https://www.google.co.in/#hl=en&output=search&sclient=psy-ab&q="+text);
				alert("hi");
			}
	
}
