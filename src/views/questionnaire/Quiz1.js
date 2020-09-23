import React, { Component, setState } from "react";
import {Container} from 'reactstrap';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Button from '@material-ui/core/Button';
import {Image} from 'react-bootstrap';
import Modal from 'react-awesome-modal';

export default class Quiz1 extends Component { 
	constructor(props){
        super(props);
        this.state ={
        	randomNum: Math.floor(Math.random()*4),
            visible : true,
            value :"",
            value1 : "",
            value2 : ""
        };
    
        this.quizSubmit = this.quizSubmit.bind(this);
    }
    onAnsChange = e=>{
    	this.setState({[e.target.name]: e.target.value});
    }
    quizSubmit(){
    	
    }
   // renderRandomQuiz = () =>{
    	//return (<h1>Opening function............</h1>);
    	/*const {randomNum}=0;//Math.floor(Math.random()*4);
    	if(randomNum===0){
			return(
				<Modal visible={this.state.visible} width="185" height="200" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
					<div>
						<ul>
						    <label>
						        <input type="radio"
						                value="1a"
						                name="value"
						                checked={this.state.value==="1a"}
						                onChange={this.onAnsChange}
						        />
						        &nbsp; The program executed with errors
						    </label>
						</ul>
						<ul>
							<label>
						    	<input type="radio"
						            	value="1b"
						                name="value"
						                checked={this.state.value==="1b"}
						                onChange={this.onAnsChange}
						        />
						        &nbsp; ['Jon', 'Kelly', 'Scott', 'Jessa']
						    </label>
						</ul>
						<ul>
						   <label>
						        <input type="radio"
						                value="1c"
						                name="value"
						                checked={this.state.value==="1c"}
						                onChange={this.onAnsChange}
						        />
						        &nbsp; ['Jon', 'Kelly', 'Jessa', 'Scott']
						    </label>
						</ul>
						<ul>
						    <label>
						        <input type="radio"
						                value="1d"
						                name="value"
						                checked={this.state.value==="1d"}
						                onChange={this.onAnsChange}
						        />
						        &nbsp; ['Jon', 'Scott', 'Kelly', 'Jessa']
						    </label>
						</ul>
					</div>
				</Modal>
			);
		}
		else if(randomNum===1){
			return (
				<div>
				     <ul>
				        <label>
				            <input type="radio"
				                    value="2a"
				                    name="value1"
				                    checked={this.state.value1==="2a"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; %Modulus
				        </label>
				    </ul>
				    <ul>
				        <label>
				            <input type="radio"
				                   value="2b"
				                    name="value1"
				                    checked={this.state.value1==="2b"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; &BitWise AND
				        </label>
				    </ul>
				    <ul>
				        <label>
				            <input type="radio"
				                    value="2c"
				                    name="value1"
				                    checked={this.state.value1==="2c"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; **, Exponent
				        </label>
				    </ul>
				    <ul>
				        <label>
				            <input type="radio"
				                    value="2d"
				                    name="value1"
				                    checked={this.state.value1==="2d"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; >Comparison
				        </label>
				    </ul>
				</div>	
			);
		}
		/*else{
			return (
				<div>
				    <ul>
				        <label>
				            <input type="radio"
				                    value="3a"
				                    name="value2"
				                    checked={this.state.value2==="3a"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; TypeError
				        </label>
				    </ul>
				    <ul>
				       <label>
				            <input type="radio"
				                    value="3b"
				                    name="value2"
				                    checked={this.state.value2==="3b"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; Kelly
				            <p>&nbsp;&nbsp;&nbsp;&nbsp;9000</p>
				        </label>
				    </ul>
				    <ul>
				       <label>
				            <input type="radio"
				                    value="3c"
				                    name="value2"
				                    checked={this.state.value2==="3c"}
				                    onChange={this.onAnsChange}
				            />
				            &nbsp; (’emp’, ‘Kelly’)
							<p>&nbsp;&nbsp;&nbsp;&nbsp;(‘salary’, 9000)</p>
				        </label>
				    </ul>
				    <ul>
				        <label>
				            <input type="radio"
				                    value="3d"
				                    name="value2"
				                    checked={this.state.value2==="3d"}
				                    onChange={this.onAnsChange}
				           />
				       		&nbsp; emp
							<p>&nbsp;&nbsp;&nbsp;&nbsp;salary</p>
				        </label>
				    </ul>
				</div>         
			);
		} */ 
   // };
  render() {
  		if(this.state.randomNum===0){
	  		return (
	  			<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
				    	<div style={{display:"flex"}}>
				            <Link className="links" to="/questionnaire">
				                <ArrowBackIcon style={{marginTop:"35px"}}/> 
				            </Link>
				            <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/>
				        </div>
				        <hr/>
				    	<Container style={{backgroundColor: "#D7DBDD"}}>
				    		<p style={{fontSize:"20px", fontWeight:"bold"}}>Please answer all questions on this quiz, this will help us determine your level of understanding python.</p>
				    		<div>
								<ul>
								    <label>
								        <input type="radio"
								                value="1a"
								                name="value"
								                checked={this.state.value==="1a"}
								                onChange={this.onAnsChange}
								        />
								        &nbsp; The program executed with errors
								    </label>
								</ul>
								<ul>
									<label>
								    	<input type="radio"
								            	value="1b"
								                name="value"
								                checked={this.state.value==="1b"}
								                onChange={this.onAnsChange}
								        />
								        &nbsp; ['Jon', 'Kelly', 'Scott', 'Jessa']
								    </label>
								</ul>
								<ul>
								   <label>
								        <input type="radio"
								                value="1c"
								                name="value"
								                checked={this.state.value==="1c"}
								                onChange={this.onAnsChange}
								        />
								        &nbsp; ['Jon', 'Kelly', 'Jessa', 'Scott']
								    </label>
								</ul>
								<ul>
								    <label>
								        <input type="radio"
								                value="1d"
								                name="value"
								                checked={this.state.value==="1d"}
								                onChange={this.onAnsChange}
								        />
								        &nbsp; ['Jon', 'Scott', 'Kelly', 'Jessa']
								    </label>
								</ul>
							</div>
				    	</Container>
				</Container>
	  		);
 		}
 		else if(this.state.randomNum===1){
			return (
				<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
				    <div style={{display:"flex"}}>
				        <Link className="links" to="/questionnaire">
				            <ArrowBackIcon style={{marginTop:"35px"}}/> 
				        </Link>
				        <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/>
				    </div>
				    <hr/>
				   	<Container style={{backgroundColor: "#D7DBDD"}}>
				    	<p style={{fontSize:"20px", fontWeight:"bold"}}>Please answer all questions on this quiz, this will help us determine your level of understanding python.</p>
						<div>
							<ul>
							    <label>
							        <input type="radio"
							                value="2a"
							                name="value1"
							                checked={this.state.value1==="2a"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; %Modulus
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="2b"
							                name="value1"
							                checked={this.state.value1==="2b"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; &BitWise AND
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="2c"
							                name="value1"
							                checked={this.state.value1==="2c"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; **, Exponent
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="2d"
							                name="value1"
							                checked={this.state.value1==="2d"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; >Comparison
							    </label>
							</ul>
						</div>
					</Container>	
				</Container>		
			);
		}
		else{
			return (
				<Container fluid style={{paddingLeft:"0", paddingRight:"0"}}>
				    <div style={{display:"flex"}}>
				        <Link className="links" to="/questionnaire">
				            <ArrowBackIcon style={{marginTop:"35px"}}/> 
				        </Link>
				        <Image className="logo" style={{marginLeft:"40%"}} src="./img/python.png"/>
				    </div>
				    <hr/>
				   	<Container style={{backgroundColor: "#D7DBDD"}}>
				    	<p style={{fontSize:"20px", fontWeight:"bold"}}>Please answer all questions on this quiz, this will help us determine your level of understanding python.</p>
						<div>
					   	 	<ul>
					        	<label>
					            	<input type="radio"
					                    	value="3a"
					                    	name="value2"
					                    	checked={this.state.value2==="3a"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; TypeError
					        	</label>
					    	</ul>
					    	<ul>
					       		<label>
					            	<input type="radio"
					                    	value="3b"
					                    	name="value2"
					                    	checked={this.state.value2==="3b"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; Kelly
					            	<p>&nbsp;&nbsp;&nbsp;&nbsp;9000</p>
					        	</label>
					    	</ul>
					    	<ul>
					       		<label>
					            	<input type="radio"
					                    	value="3c"
					                    	name="value2"
					                    	checked={this.state.value2==="3c"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; (’emp’, ‘Kelly’)
									<p>&nbsp;&nbsp;&nbsp;&nbsp;(‘salary’, 9000)</p>
					        	</label>
					    	</ul>
					    	<ul>
					        	<label>
					            	<input type="radio"
					                    	value="3d"
					                    	name="value2"
					                    	checked={this.state.value2==="3d"}
					                    	onChange={this.onAnsChange}
					           		/>
					       			&nbsp; emp
									<p>&nbsp;&nbsp;&nbsp;&nbsp;salary</p>
					        	</label>
					    	</ul>
						</div>  
					</Container>   
				</Container>    
			);
		}
 	}
}