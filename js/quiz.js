var btn=document.getElementById('button');
var ul=document.getElementById('ul');
var quizBox=document.getElementById('questionBox');
var scoreCard=document.getElementById('scoreCard');
var op1=document.getElementById('op1');
var op2=document.getElementById('op2');
var op3=document.getElementById('op3');
var op4=document.getElementById('op4');

var app={
	questions:[
	{q:'Why JavaScript and Java have similar name?',options:['JavaScript is a striped-down version of Java',
	'JavaScript syntax is loosly based on Java','They both originated on the island of Java','None of the above'],
	answer:2},
	
	
	{q:'Javascript is _________ language.',options:['Programming',
	'Scripting','Application','None of These'],answer:2},
	
	
	{q:'Which of the following is the correct syntax to display “welcome” in an alert box using JavaScript?',options:
	['alertbox(“welcome”);',' msg(“welcome”);','msgbox(“welcome”);'
	,'alert(“welcome”);'],
	answer:4},
	
	
	
	{q:'JavaScript Code can be called by using _________.',options:['Preprocessor',
	'Application','Function/Triggering Event','RMI'],
	answer:3},
	
	
	
	{q:'Which of the following Attribute is used to include External JS code inside your HTML Document?',
	options:['script','src','ext','link'],
	answer:2},
	
	
	
	{q:'Which was the first browser to support JavaScript ?',options:
	['Mozilla Firefox','IE','Netscape','Google Chrome'],
	answer:3},
	
	
	
	{q:'Executable single line of Script is called as _________________.',options:
	['Line in JS','Breakpoint in JS','None of these','Statement in JavaScript'],
	answer:4},
	
	
	
	{q:'JavaScript code contain sequence of ___________.',options:['HTML Tags',
	'Executable Statements','Method Calls','All of these'],
	answer:4},
	
	
	
	{q:'Person XYZ wrote his name and date of code creation at the start ,What kind of comment he has written ?',
	options:['Code Hiding Comment','Functional Comment','Documentation Comment','None of These'],
	answer:3},
	
	
	
	{q:'What is meant by vanilla JavaScript?',options:['JavaScript without libraries',
	'JavaScript Framework','JavaScript library','JavaScript with libraries'],
	answer:1}
	],
	index:0,
	load:function(){
		if(this.index<=this.questions.length){
		quizBox.innerHTML=this.index+1+". "+this.questions[this.index].q;
		op1.innerHTML=this.questions[this.index].options[0];
		op2.innerHTML=this.questions[this.index].options[1];
		op3.innerHTML=this.questions[this.index].options[2];
		op4.innerHTML=this.questions[this.index].options[3];
		this.scoreCard();
		}
		else{
			quizBox.innerHTML="Quiz Over...!!!!";
			op1.style.display="none";
			op2.style.display="none";
			op3.style.display="none";
			op4.style.display="none";
			btn.style.display="none";
		}
		},
		next:function(){
			this.index++;
			this.load();
		},
		
		check:function(ele){
			var id=ele.id.split('');
			if(id[id.length-1]==this.questions[this.index].answer){
				this.score++;
				ele.className="correct";
				ele.innerHTML="Correct";
				this.scoreCard();
			}
			else{
				ele.className="wrong";
				ele.innerHTML="Wrong";
			}
		},
		notClickAble:function(){
			for(let i=0;i<ul.children.length;i++){
				ul.children[i].style.pointerEvents="none";
			}
		},
		clickAble:function(){
			for(let i=0;i<ul.children.length;i++){
				ul.children[i].style.pointerEvents="auto";
				ul.children[i].className="";
			}
		},
		score:0,
		scoreCard:function(){
			scoreCard.innerHTML=this.score+"/"+this.questions.length;
		}
}
window.onload=app.load();

function button(ele){
	app.check(ele);
	app.notClickAble();
}
function next(){
	app.next();
	app.clickAble();
}