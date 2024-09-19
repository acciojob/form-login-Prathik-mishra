function getFormvalue() {
    //Write your code here
var form=document.getElementById('form1');
	let name1=form.elements['fname'].value;
	let name2=form.elements['lname'].value;
	alert(name1+" "+name2);
}
