import React, { Component } from "react";
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {Image} from 'react-bootstrap';
import './LP_button.scss';
import Modal from 'react-awesome-modal';
import Header from "../../components/header/Header.js";
import Fire from "../config/fire";

export default class PycatTest extends Component {
	constructor(props){
        super(props);
        this.state ={
        	newLevel:"Beginner",
        	visible: false,
        	level: 1,
        	answer1:"",
        	answer2:"",
        	answer3:"",
        	answer4:"",
        	answer5:"",
        	answer6:"",
        	answer7:"",
        	answer8:"",
        	answer9:"",
        	answer10:""
        };
        this.levelChange1 = this.levelChange1.bind(this);
        this.levelChange2 = this.levelChange2.bind(this);
        this.levelChange3 = this.levelChange3.bind(this);
        this.intLevel = this.intLevel.bind(this);
        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.levelUpdate=this.levelUpdate.bind(this);
    }
  	levelUpdate(){
  		let user = Fire.auth().currentUser;
      	if(user){
      		this.database = Fire.database().ref().child('User/'+user.uid);
      		this.database.on('value', snap =>{
	      		if(snap.val().userType==="student"){
	      			Fire.database().ref('User/' + user.uid).set({
	      				email:snap.val().email,
	      				firstname:snap.val().firstname,
	      				level:this.state.newLevel,
	      				password:snap.val().password,
	      				userType:"student"
	      			});
	      		}
      		});
      	}
  	}
    onAnsChange = e=>{
    	this.setState({[e.target.name]: e.target.value});
    }
    levelChange1(){
    	if(this.state.answer1==="10, 11, 12, 13, 14," && this.state.answer2==="True" && this.state.answer3==="25 and 125" && this.state.answer4==="Salary: 12000 Salary: 8000" && this.state.answer5==="maJ" && this.state.answer6==="True" && this.state.answer7==="yn" && this.state.answer8==="The program executed with error" && this.state.answer9==="182.0" && this.state.answer10==="secrets.token_hex(32)"){
    		this.openModal();
    	}
    	else{
    		alert("Make sure you get all answers right!");
    	}
    }
    levelChange2(){
    	if(this.state.answer1==="input()" && this.state.answer2==="Create a file, returns an error if the file exists" && this.state.answer3==="Syntax Error" && this.state.answer4==="Salary: 12000 Salary: 8000" && this.state.answer5==="[A]" && this.state.answer6==="True" && this.state.answer7==="NaN, NaN, NaN, NaN," && this.state.answer8==="aaa" && this.state.answer9==="11 undefined 11.22" && this.state.answer10==="t+"){
    		this.openModal();
    	}
    	else{
    		alert("Make sure you answer all answers right!");
    	}
    }
    levelChange3(){
    	if(this.state.answer1==="‘a’" && this.state.answer2==="else clause of for loop is executed when the loop terminates naturally" && this.state.answer3==="21" && this.state.answer4==="num * fact(num - 1)" && this.state.answer5==="False" && this.state.answer6==="You cannot use print(self) as a function name." && this.state.answer7==="Foo" && this.state.answer8==="re" && this.state.answer9==="interpreter/ compile time" && this.state.answer10==="False True"){
    		this.openModal();
    	}
    	else {
    		alert("Make sure you get all answers right!");
    	}
    }
    setLevel1(){
    	this.setState({
	    	newLevel:"Intermediate"
	    });
	    this.levelUpdate();
    }
    setLevel2(){
    	this.setState({
	    	newLevel:"Advanced"
	    });
	    this.levelUpdate();
    }
    intLevel(){
    	this.closeModal();
    	if(this.state.level===1){
	    	this.setState({
	    		level:2,
	    		newLevel:"Intermediate"
	    	});
	    	this.levelUpdate();
    	}
    	else if(this.state.level===2){
    		this.setState({
    			level:3,
    			newLevel:"Advanced"
    		});
    		this.levelUpdate();
    	}
    	else{
    		return 0;
    	}
    }
    openModal(){
        this.setState({
            visible : true
        });
    }
    closeModal(){
        this.setState({
            visible : false
        });
    }
  render() {
  	//Beginner level quiz--------------------------------------------------------------------------------------------
  		if(this.state.level===1){
		    return (
		    	<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
		        	<hr/>
		    		<Container style={{backgroundColor: "#A2E8A9"}}>
		            <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
		    			<h1>Beginner level learning path</h1>
		    			<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>1. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>for i in range(10, 15, 1):</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;print( i, end=', ')</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="10, 11, 12, 13, 14,"
							            name="answer1"
							            checked={this.state.answer1==="10, 11, 12, 13, 14,"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 10, 11, 12, 13, 14,
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="10, 11, 12, 13, 14, 15,"
							            name="answer1"
							            checked={this.state.answer1==="10, 11, 12, 13, 14, 15,"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 10, 11, 12, 13, 14, 15,
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>2. The ‘in’ operator is used to check if a value exists within an iterable object container such as a list. Evaluates to true if it finds a variable in the specified sequence and false otherwise.</p>
							<label>
							    <input type="radio"
							            value="True"
							            name="answer2"
							            checked={this.state.answer2==="True"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; True
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="False"
							           	name="answer2"
							            checked={this.state.answer2==="False"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; False
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>3. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>valueOne = 5 ** 2</p>
							    	<p style={{color: "#003300"}}>valueTwo = 5 ** 3</p>
							    	<p style={{color: "#003300"}}>print(valueOne)</p>
							    	<p style={{color: "#003300"}}>print(valueTwo)</p>
							    </div>
							</Container>
							<label>
							   <input type="radio"
							           value="10 and 15"
							           name= "answer3"
							           checked={this.state.answer3==="10 and 15"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; 10
							    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;15</p>
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="25 and 125"
							           name="answer3"
							           checked={this.state.answer3==="25 and 125"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; 25
							    <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;125</p>
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Error: invalid syntax"
							            name="answer3"
							            checked={this.state.answer3==="Error: invalid syntax"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Error: invalid syntax 
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>4. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>salary = 8000</p>
							    	<br/>
							    	<p style={{color: "#003300"}}>def printSalary():</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salary = 12000</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Salary:", salary)</p>
							    	<br/>
							    	<p style={{color: "#003300"}}>printSalary()</p>
							    	<p style={{color: "#003300"}}>print("Salary:", salary)</p>
							    </div>
							</Container>
						
							<label>
							    <input type="radio"
							            value="Salary: 12000 Salary: 8000"
							            name= "answer4"
							            checked={this.state.answer4==="Salary: 12000 Salary: 8000"}
							            onChange={this.onAnsChange}
							        />
							   &nbsp; Salary: 12000 Salary: 8000
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="Salary: 8000 Salary: 12000"
							           name="answer4"
							           checked={this.state.answer4==="Salary: 8000 Salary: 12000"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; Salary: 8000 Salary: 12000
							</label>
							<br/>
							<label>
							    <input type="radio"
							          	value="The program failed with errors"
							           name="answer4"
							           checked={this.state.answer4==="The program failed with errors"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; The program failed with errors
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>5. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>var= "James Bond"</p>
							    	<p style={{color: "#003300"}}>print(var[2::-1])</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="Jam"
							            name="answer5"
							          	checked={this.state.answer5==="Jam"}
							          	onChange={this.onAnsChange}
							    />
							    &nbsp; Jam
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="dno"
							           name="answer5"
							           checked={this.state.answer5==="dno"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; dno
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="maJ"
							           name="answer5"
							           checked={this.state.answer5==="maJ"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; maJ
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="dnoB semaJ"
							          	name="answer5"
							          	checked={this.state.answer5==="dnoB semaJ"}
							          	onChange={this.onAnsChange}
							    />
							    &nbsp; dnoB semaJ
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>6. A string is immutable in Python?</p>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>Every time when we modify the string, Python Always create a new String and assign a new string to that variable.</p>
							<label>
							    <input type="radio"
							            value="True"
							            name="answer6"
							            checked={this.state.answer6==="True"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; True
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="False"
							            name="answer6"
							            checked={this.state.answer6==="False"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; False
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>7. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>str = "pynative"</p>
							    	<p style={{color: "#003300"}}>print (str[1:3])</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="py"
							            name="answer7"
							            checked={this.state.answer7==="py"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; py
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="yn"
							            name="answer7"
							            checked={this.state.answer7==="yn"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; yn
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="pyn"
							            name="answer7"
							            checked={this.state.answer7==="pyn"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; pyn
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="yna"
							            name="answer7"
							            checked={this.state.answer7==="yna"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; yna
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>8. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>sampleSet = {"Jodi", "Eric", "Garry"}</p>
							    	<p style={{color: "#003300"}}>sampleSet.add(1, "Vicki")</p>
							    	<p style={{color: "#003300"}}>print(sampleSet)</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="{‘Vicki’, ‘Jodi’, ‘Garry’, ‘Eric’}"
							            name="answer8"
							            checked={this.state.answer8==="{‘Vicki’, ‘Jodi’, ‘Garry’, ‘Eric’}"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; ‘Vicki’, ‘Jodi’, ‘Garry’, ‘Eric’
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="{‘Jodi’, ‘Vicki’, ‘Garry’, ‘Eric’}"
							            name="answer8"
							            checked={this.state.answer8==="{‘Jodi’, ‘Vicki’, ‘Garry’, ‘Eric’}"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; ‘Jodi’, ‘Vicki’, ‘Garry’, ‘Eric’
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="The program executed with error"
							            name="answer8"
							            checked={this.state.answer8==="The program executed with error"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; The program executed with error
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>9. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>x = 36 / 4 * (3 +  2) * 4 + 2</p>
							    	<p style={{color: "#003300"}}>print(x)</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="182.0"
							            name="answer9"
							            checked={this.state.answer9==="182.0"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 182.0
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="37"
							            name="answer9"
							            checked={this.state.answer9==="37"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 37
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="117"
							            name="answer9"
							            checked={this.state.answer9==="117"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 117
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="The Program executed with errors"
							            name="answer9"
							            checked={this.state.answer9==="The Program executed with errors"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; The Program executed with errors
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>10. I want to generate a random secure hex token of 32 bytes to reset the password, which method should I use.</p>
							<label>
							    <input type="radio"
							            value="secrets.hexToken(32)"
							            name="answer10"
							            checked={this.state.answer10==="secrets.hexToken(32)"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; secrets.hexToken(32)
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="secrets.hex_token(32)"
							           	name="answer10"
							            checked={this.state.answer10==="secrets.hex_token(32)"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; secrets.hex_token(32)
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="secrets.tokenHex(32)"
							            name="answer10"
							            checked={this.state.answer10==="secrets.tokenHex(32)"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; secrets.tokenHex(32)
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="secrets.token_hex(32)"
							           	name="answer10"
							            checked={this.state.answer10==="secrets.token_hex(32)"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; secrets.token_hex(32)
							</label>
						</div>
						<hr/>
						<Button onClick={this.levelChange1} className="btn btn-primary btn-lg"style={{backgroundColor:"#5bc0de"}}>Submit</Button>
		    		</Container>
		    		<hr/>
		    		<Modal visible={this.state.visible} width="500" height="100" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
		    			<Container style={{backgroundColor: "#12AB18"}}>
		    				<div>
		    					<p>Congradulations you have passed the Beginners level, now you can move to Intermediate level!</p>
		    				</div>
		    			</Container>
		    			<Container>
		    				<Button onClick={()=> this.closeModal()}>Cancel</Button>
		    				<Button onClick={this.intLevel}>Next level</Button>
		    				<Button onClick={this.setLevel1}>Save</Button>
		    			</Container>
		    		</Modal>
		    	</Container>
		    );
		}
	//End of Beginner quiz--------------------------------------------------------------------------------------------------------------

	//Intermediate level quiz-------------------------------------------------------------------------------------------------------------
		else if(this.state.level===2){
			return(
				<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
			        <Header/>
		    		<Container style={{backgroundColor: "#FAD8A3"}}>
			            <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
		    			<h1>Intermediate level learning path</h1>
		    			<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>1. In Python3, which functions are used to accept input from the user</p>
							<label>
							    <input type="radio"
							            value="input()"
							            name="answer1"
							           	checked={this.state.answer1==="input()"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; input()
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="raw_input()"
							            name="answer1"
							            checked={this.state.answer1==="raw_input()"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; raw_input()
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="rawinput()"
							            name="answer1"
							            checked={this.state.answer1==="rawinput()"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; rawinput()
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="string()"
							            name="answer1"
							            checked={this.state.answer1==="string()"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; string()
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>2. What is true for file mode x</p>
							<label>
							    <input type="radio"
							            value="create a file if the specified file does not exist"
							            name="answer2"
							            checked={this.state.answer2==="create a file if the specified file does not exist"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; create a file if the specified file does not exist
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Create a file, returns an error if the file exists"
							           	name="answer2"
							            checked={this.state.answer2==="Create a file, returns an error if the file exists"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; Create a file, returns an error if the file exists
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Create a file if it doesn’t exists else Truncate the existed file"
							           	name="answer2"
							            checked={this.state.answer2==="Create a file if it doesn’t exists else Truncate the existed file"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; Create a file if it doesn’t exists else Truncate the existed file
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>3. What is the output of the following print() function</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>print(sep='--', 'Ben', 25, 'California')</p>
							    </div>
							</Container>
							<label>
							   <input type="radio"
							           value="Syntax Error"
							           name="answer3"
							           checked={this.state.answer3==="Syntax Error"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; Syntax Error
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="Ben–25–California"
							           name="answer3"
							           checked={this.state.answer3==="Ben–25–California"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; Ben–25–California
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Ben 25 California"
							            name="answer3"
							            checked={this.state.answer3==="Ben 25 California"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Ben 25 California 
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>4. What is the output of the following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>salary = 8000</p>
							    	<br/>
							    	<p style={{color: "#003300"}}>def printSalary():</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;salary = 12000</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print("Salary:", salary)</p>
							    	<br/>
							    	<p style={{color: "#003300"}}>printSalary()</p>
							    	<p style={{color: "#003300"}}>print("Salary:", salary)</p>
							    </div>
							</Container>
						
							<label>
							    <input type="radio"
							            value="Salary: 12000 Salary: 8000"
							            name="answer4"
							            checked={this.state.answer4==="Salary: 12000 Salary: 8000"}
							            onChange={this.onAnsChange}
							        />
							   &nbsp; Salary: 12000 Salary: 8000
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="Salary: 8000 Salary: 12000"
							           name="answer4"
							           checked={this.state.answer4==="Salary: 8000 Salary: 12000"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; Salary: 8000 Salary: 12000
							</label>
							<br/>
							<label>
							    <input type="radio"
							          	value="The program failed with errors"
							           	name="answer4"
							           	checked={this.state.answer4==="The program failed with errors"}
							           	onChange={this.onAnsChange}
							    />
							    &nbsp; The program failed with errors
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>5. What is the output of print('[%c]' % 65)</p>
							<label>
							    <input type="radio"
							            value="65"
							            name="answer5"
							          	checked={this.state.answer5==="65"}
							          	onChange={this.onAnsChange}
							    />
							    &nbsp; 65
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="A"
							           name="answer5"
							           checked={this.state.answer5==="A"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; A
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="[A]"
							           name="answer5"
							           checked={this.state.answer5==="[A]"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; [A]
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Syntax Error"
							          	name="answer5"
							          	checked={this.state.answer5==="Syntax Error"}
							          onChange={this.onAnsChange}
							    />
							    &nbsp; Syntax Error
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>6. A string is immutable in Python?</p>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>Every time when we modify the string, Python Always create a new String and assign a new string to that variable.</p>
							<label>
							    <input type="radio"
							            value="True"
							            name="answer6"
							            checked={this.state.answer6==="True"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; True
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="False"
							            name="answer6"
							            checked={this.state.answer6==="False"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; False
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>7. What will be displayed as an output on the screen</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>x = float('NaN')</p>
							    	<p style={{color: "#003300"}}>print('%f, %e, %F, %E' % (x, x, x, x))</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="nan, nan, NAN, NAN"
							            name="answer7"
							            checked={this.state.answer7==="nan, nan, NAN, NAN"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; nan, nan, NAN, NAN
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="nan, NaN, nan, NaN"
							            name="answer7"
							            checked={this.state.answer7==="nan, NaN, nan, NaN"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; nan, NaN, nan, NaN
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="NaN, NaN, NaN, NaN,"
							            name="answer7"
							            checked={this.state.answer7==="NaN, NaN, NaN, NaN,"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; NaN, NaN, NaN, NaN,
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>8. Use the following file to predict the output of the code</p>
							<p style={{fontSize:"10px", fontWeight:"bold"}}>test.txt Content:</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>aaa</p>
							    	<p style={{color: "#003300"}}>bbb</p>
							    	<p style={{color: "#003300"}}>ccc</p>
							    	<p style={{color: "#003300"}}>ddd</p>
							    	<p style={{color: "#003300"}}>eee</p>
							    	<p style={{color: "#003300"}}>fff</p>
							    	<p style={{color: "#003300"}}>ggg</p>
							    </div>
							</Container>
							<p style={{fontSize:"10px", fontWeight:"bold"}}>Code:</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>f = open("test.txt", "r")</p>
							    	<p style={{color: "#003300"}}>print(f.readline(3))</p>
							    	<p style={{color: "#003300"}}>f.close()</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="bbb"
							            name="answer8"
							            checked={this.state.answer8==="bbb"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; bbb
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Syntax Error"
							            name="answer8"
							            checked={this.state.answer8==="Syntax Error"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Syntax Error
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="aaa"
							            name="answer8"
							            checked={this.state.answer8==="aaa"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; aaa
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="aa"
							            name="answer8"
							            checked={this.state.answer8==="aa"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; aa
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>9. What is the output of the following print() function</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>print('%d %d %.2f' % (11, '22', 11.22))</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="11 22 11.22"
							            name="answer9"
							            checked={this.state.answer9==="11 22 11.22"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 11 22 11.22
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="TypeError"
							            name="answer9"
							            checked={this.state.answer9==="TypeError"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; TypeError
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="11 ’22’ 11.22"
							            name="answer9"
							            checked={this.state.answer9==="11 ’22’ 11.22"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 11 ’22’ 11.22
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="11 undefined 11.22"
							            name="answer9"
							            checked={this.state.answer9==="11 undefined 11.22"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 11 undefined 11.22
							</label>
							<br/>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>10. Which of the following is incorrect file handling mode in Python</p>
							<label>
							    <input type="radio"
							            value="r"
							            name="answer10"
							            checked={this.state.answer10==="r"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; r
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="x"
							           	name="answer10"
							            checked={this.state.answer10==="x"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; x
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="t+"
							            name="answer10"
							            checked={this.state.answer10==="t+"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; t+
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="b"
							           	name="answer10"
							            checked={this.state.answer10==="b"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; b
							</label>
						</div>
						<hr/>
						<Button onClick={this.levelChange2} className="btn btn-primary btn-lg"style={{backgroundColor:"#5bc0de"}}>Submit</Button>
		    			<Modal visible={this.state.visible} width="500" height="100" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
			    			<Container style={{backgroundColor: "#12AB18"}}>
			    				<div>
			    					<p>Congradulations you have passed the Intermediate level, now you can move to Advanced level!</p>
			    				</div>
			    			</Container>
			    			<Container>
			    				<Button onClick={()=> this.closeModal()}>Cancel</Button>
			    				<Button onClick={this.intLevel}>Next level</Button>
			    				<Button onClick={this.setLevel2}>Save</Button>
			    			</Container>
			    		</Modal>
		    		</Container>
		    	</Container>
	    	);
		}
//End of Intermediate level quiz-------------------------------------------------------------------------------------------------------------

//Advanced level quiz-------------------------------------------------------------------------------------------------------------------------
		else{
			return(
				<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
			        <Header/>
		    		<Container style={{backgroundColor: "#F0A2A2"}}>
			            <iframe src="https://trinket.io/embed/python/edd948bf08" width="100%" height="356" frameborder="0" marginwidth="0" marginheight="0" allowfullscreen></iframe>
		    			<h1>Advanced level learning path</h1>
		    			<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>1. What is the output of the following?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>tuple1 = (1120, 'a')</p>
							    	<p style={{color: "#003300"}}>print(max(tuple1))</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="TypeError"
							            name="answer1"
							            checked={this.state.answer1==="TypeError"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; TypeError
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="1120"
							            name="answer1"
							            checked={this.state.answer1==="1120"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 1120
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="‘a’"
							            name="answer1"
							            checked={this.state.answer1==="‘a’"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; ‘a’
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>2. Select which is true for for loop</p>
							<label>
							    <input type="radio"
							            value="Python’s for loop used to iterates over the items of list, tuple, dictionary, set, or string"
							            name="answer2"
							            checked={this.state.answer2==="Python’s for loop used to iterates over the items of list, tuple, dictionary, set, or string"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Python’s for loop used to iterates over the items of list, tuple, dictionary, set, or string
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="else clause of for loop is executed when the loop terminates naturally"
							           	name="answer2"
							            checked={this.state.answer2==="else clause of for loop is executed when the loop terminates naturally"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; else clause of for loop is executed when the loop terminates naturally
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="else clause of for loop is executed when the loop terminates abruptly"
							            name="answer2"
							            checked={this.state.answer2==="else clause of for loop is executed when the loop terminates abruptly"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; else clause of for loop is executed when the loop terminates abruptly
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="We use for loop when we want to perform a task indefinitely until a particular condition is met"
							           	name="answer2"
							            checked={this.state.answer2==="We use for loop when we want to perform a task indefinitely until a particular condition is met"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; We use for loop when we want to perform a task indefinitely until a particular condition is met
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>3. What is the value of the var after the for loop completes its execution</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>var = 10</p>
							    	<p style={{color: "#003300"}}>for i in range(10):</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;for j in range(2, 10, 1):</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if var % 2 == 0:</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;continue</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var += 1</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var+=1</p>
							    	<p style={{color: "#003300"}}>else:</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;var+=1</p>
							    	<p style={{color: "#003300"}}>print(var)</p>
							    </div>
							</Container>
							<label>
							   <input type="radio"
							           value="20"
							           name="answer3"
							           checked={this.state.answer3==="20"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 20
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="21"
							           name ="answer3"
							           checked={this.state.answer3==="21"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; 21
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="10"
							            name="answer3"
							            checked={this.state.answer3==="10"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 10 
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="30"
							            name="answer3"
							            checked={this.state.answer3==="30"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; 30 
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>4. Fill in the missing line:</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>def fact(num) :</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;if num == 0 :</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return 1</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;else:</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;return _________</p>
							    </div>
							</Container>
						
							<label>
							    <input type="radio"
							            value="num * fact(num - 1)"
							            name="answer4"
							            checked={this.state.answer4==="num * fact(num - 1)"}
							            onChange={this.onAnsChange}
							        />
							   &nbsp; num * fact(num - 1)
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="(num - 1) * (num - 2)"
							           name="answer4"
							           checked={this.state.answer4==="(num - 1) * (num - 2)"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; (num - 1) * (num - 2)
							</label>
							<br/>
							<label>
							    <input type="radio"
							          	value="num * (num - 1)"
							           	name="answer4"
							           	checked={this.state.answer4==="num * (num - 1)"}
							           	onChange={this.onAnsChange}
							    />
							    &nbsp; num * (num - 1)
							</label>
							<br/>
							<label>
							    <input type="radio"
							          	value="fact(num) * fact(num - 1)"
							           	name="answer4"
							           	checked={this.state.answer4==="fact(num) * fact(num - 1)"}
							           	onChange={this.onAnsChange}
							    />
							    &nbsp; fact(num) * fact(num - 1)
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>5. In Mutual Recursion, the calling function calls another instance of itself directly.</p>
							<label>
							    <input type="radio"
							            value="True"
							            name="answer5"
							          	checked={this.state.answer5==="True"}
							          	onChange={this.onAnsChange}
							    />
							    &nbsp; True
							</label>
							<br/>
							<label>
							    <input type="radio"
							           value="False"
							           name="answer5"
							           checked={this.state.answer5==="False"}
							           onChange={this.onAnsChange}
							    />
							    &nbsp; False
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>6. Select the valid option for the following Output.</p>
			    			<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>class Count:</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self,d):</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.d=d</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def print(self):</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(d)</p>
							    	<p style={{color: "#003300"}}>a = Demo(''Hello'')</p>
							    	<p style={{color: "#003300"}}>a.print()</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="You cannot use print(self) as a function name."
							            name="answer6"
							            checked={this.state.answer6==="You cannot use print(self) as a function name."}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; You cannot use print(self) as a function name.
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Program has an error because class A does not have a constructor."
							            name="answer6"
							            checked={this.state.answer6==="Program has an error because class A does not have a constructor."}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Program has an error because class A does not have a constructor.
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Program will print 'Hello' if we change print(d) to print(self.d)."
							            name="answer6"
							            checked={this.state.answer6==="Program will print 'Hello' if we change print(d) to print(self.d)."}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Program will print 'Hello' if we change print(d) to print(self.d).
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Syntax Error."
							            name="answer6"
							            checked={this.state.answer6==="Syntax Error."}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Syntax Error.
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>7. What gets printed (with python version 3.X) assuming the user enters the following at the prompt? #: foo  a = input("#: ") print a</p>
							<label>
							    <input type="radio"
							            value="F"
							            name="answer7"
							            checked={this.state.answer7==="F"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; F
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Foo"
							            name="answer7"
							            checked={this.state.answer7==="Foo"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Foo
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="Not a number"
							            name="answer7"
							            checked={this.state.answer7==="Not a number"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; Not a number
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="An exception is thrown"
							            name="answer7"
							            checked={this.state.answer7==="An exception is thrown"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; An exception is thrown
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>8. Name the python module which supports regular expressions.</p>
							<label>
							    <input type="radio"
							            value="regex"
							            name="answer8"
							            checked={this.state.answer8==="regex"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; regex
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="re"
							            name="answer8"
							            checked={this.state.answer8==="re"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; re
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="pyre"
							            name="answer8"
							            checked={this.state.answer8==="pyre"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; pyre
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="pyregex"
							            name="answer8"
							            checked={this.state.answer8==="pyregex"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; pyregex
							</label>
						</div>
						<hr/>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>9. Syntax error in python is detected by _________at _______</p>
							<label>
							    <input type="radio"
							            value="compiler/ compile time"
							            name="answer9"
							            checked={this.state.answer9==="compiler/ compile time"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; compiler/ compile time
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="interpreter/ run time"
							            name="answer9"
							            checked={this.state.answer9==="interpreter/ run time"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; interpreter/ run time
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="compiler/ run time"
							            name="answer9"
							            checked={this.state.answer9==="compiler/ run time"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; compiler/ run time
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="interpreter/ compile time"
							            name="answer9"
							            checked={this.state.answer9==="interpreter/ compile time"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; interpreter/ compile time
							</label>
						</div>
						<div>
			    			<p style={{fontSize:"16px", fontWeight:"bold"}}>10. what is output of following code?</p>
							<Container style={{backgroundColor: "#ffffff"}}>
							    <div>
							    	<p style={{color: "#003300"}}>class Count:</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;def __init__(self, count=0):</p>
							    	<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;self.__count=count</p>
							    	<p style={{color: "#003300"}}>a=Count(2)</p>
							    	<p style={{color: "#003300"}}>b=Count(2)</p>
							    	<p style={{color: "#003300"}}>print(id(a)==id(b), end = '' '')</p>
							    	<p style={{color: "#003300"}}>c= ''hello''</p>
							    	<p style={{color: "#003300"}}>d= ''hello''</p>
							    	<p style={{color: "#003300"}}>print(id(c)==id(d))</p>
							    </div>
							</Container>
							<label>
							    <input type="radio"
							            value="True False"
							            name="answer10"
							            checked={this.state.answer10==="True False"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; True False
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="False True"
							           	name="answer10"
							            checked={this.state.answer10==="False True"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; False True
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="False False"
							            name="answer10"
							            checked={this.state.answer10==="False False"}
							            onChange={this.onAnsChange}
							    />
							    &nbsp; False False
							</label>
							<br/>
							<label>
							    <input type="radio"
							            value="True True"
							           	name="answer10"
							            checked={this.state.answer10==="True True"}
							            onChange={this.onAnsChange}
							    />
							  	&nbsp; True True
							</label>
						</div>
						<hr/>
						<Button onClick={this.levelChange3} className="btn btn-primary btn-lg"style={{backgroundColor:"#5bc0de"}}>Submit</Button>
		    			<Modal visible={this.state.visible} width="500" height="100" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
			    			<Container style={{backgroundColor: "#12AB18"}}>
			    				<div>
			    					<p>Congradulations you have passed our short learning path!</p>
			    				</div>
			    			</Container>
			    			<Container>
			    				<Button onClick={()=> this.closeModal()}>Ok</Button>
			    			</Container>
			    		</Modal>
		    		</Container>
		    	</Container>
	    	);
		}
//End of Advanced level quiz-----------------------------------------------------------------------------------------------------------------------------
	}
}