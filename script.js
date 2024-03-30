/*var satu=document.querySelector('#angka:nth-child(1) ' );
var dua=document.querySelector('#angka:nth-child(2) ' );

satu.addEventListener('click',function()
{

	});
dua.addEventListener('click',function a()
{

	
	});
*/

var p=document.getElementById('tampilan');
var sama=document.querySelector('#angka:nth-child(3)');
/*var one=document.querySelector('#angka:nth-child(2)');
if(one)
{
	alert("oke");
}
*/

var angka=[];


function hasil()
{
			/*	for(var i=0;i<angka.length;i++){



			
			
		

			}*/
			var belakang=angka.length-1;
		
	if(angka[belakang]==="+"||angka[belakang]==="-"||angka[belakang]==="*"||angka[belakang]==="/")
	{
		alert("masukkan nilai");
		}
			var tulisan=p.textContent;
			tulis=eval(tulisan);
			p.textContent="";
			console.log(tulis);
//var str=tulis.toString();
var isi=document.createTextNode(`= ${tulis}`);
			p.appendChild(isi);
			
}

function hapus()
{
	p.innerHTML="";
	var belakang=angka.length-1;
	
	angka.splice(belakang,1);
for (var i = 0; i < angka.length; i++) {
		var teks=document.createTextNode(angka[i]);
			p.appendChild(teks);
	}

}

//sama.onclick=hasil;

function satu()
{
	
angka.push(1);
var teks=document.createTextNode("1");
			p.appendChild(teks);
//	console.log(angka);
//var anggota=angka.length;
			

}
//one.onclick=satu;
function dua()
{
	angka.push(2);
var teks=document.createTextNode("2");
			p.appendChild(teks);
	
}
function tiga()
{
	angka.push(3);
var teks=document.createTextNode("3");
			p.appendChild(teks);
	
}
function empat()
{
	angka.push(4);
var teks=document.createTextNode("4");
			p.appendChild(teks);
	
}
function lima()
{
	angka.push(5);
var teks=document.createTextNode("5");
			p.appendChild(teks);
	
}
function enam()
{
	angka.push(6);
var teks=document.createTextNode("6");
			p.appendChild(teks);
	
}
function tujuh()
{
	angka.push(7);
var teks=document.createTextNode("7");
			p.appendChild(teks);
	
}
function delapan()
{
	angka.push(8);
var teks=document.createTextNode("8");
			p.appendChild(teks);
	
}
function sembilan()
{
	angka.push(9);
var teks=document.createTextNode("9");
			p.appendChild(teks);
	
}
function nol()
{
	var belakang=angka.length-1;
	console.log(angka[belakang]);
	angka.push(0);
var teks=document.createTextNode("0");
			p.appendChild(teks);
	
}


function plus()

{ 
		var belakang=angka.length-1;
		
	if(angka[belakang]==="+"||angka[belakang]==="-"||angka[belakang]==="*"||angka[belakang]==="/")
	{
		alert("masukkan nilai");
		}
		else{
		
	angka.push("+");
	var teks=document.createTextNode("+");
			p.appendChild(teks);
		}
	
}

function minus()
{

var belakang=angka.length-1;
		
	if(angka[belakang]==="+"||angka[belakang]==="-"||angka[belakang]==="*"||angka[belakang]==="/")
	{
		alert("masukkan nilai");
		}else{

	angka.push("-");
	var teks=document.createTextNode("-");
			p.appendChild(teks);
		}

}

function bagi()
{

var belakang=angka.length-1;
		
	if(angka[belakang]==="+"||angka[belakang]==="-"||angka[belakang]==="*"||angka[belakang]==="/")
	{
		alert("masukkan nilai");
		}
		else{

	angka.push("/");
	var teks=document.createTextNode("/");
			p.appendChild(teks);
	}	

}

function kali()
{
	var belakang=angka.length-1;
		
	if(angka[belakang]==="+"||angka[belakang]==="-"||angka[belakang]==="*"||angka[belakang]==="/")
	{
		alert("masukkan nilai");
		}else{
	angka.push("*");
	var teks=document.createTextNode("*");
			p.appendChild(teks);
		}

}
function C()
{
	p.innerHTML="";
	angka.length=0;
}

	