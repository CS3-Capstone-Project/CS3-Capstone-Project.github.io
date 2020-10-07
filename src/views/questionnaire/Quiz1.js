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
        	level : "Beginner",
            visible : false,
            value1 :"",
            value2 : "",
            value3 : "",
            loggedIn: false
        };
    
        this.levelChange1 = this.levelChange1.bind(this);
        this.levelChange2 = this.levelChange2.bind(this);
        this.levelChange3 = this.levelChange3.bind(this);
    }
    onAnsChange = e=>{
    	this.setState({[e.target.name]: e.target.value});
    }
    levelChange1(){
    	if((this.state.value1==="1a" && this.state.value2==="No" && this.state.value3==="secrets.token_hex(32)")){
			return("Advanced");
		}
		else if((this.state.value1==="1a" && this.state.value2==="No" && this.state.value3==="q") || (this.state.value1==="1a" && this.state.value2==="Yes" && this.state.value3==="secrets.token_hex(32)")){
			return("Intermediate");
		}
		else{
			return("Beginner");
		}
    }
    levelChange2(){
    	if(this.state.value1==="**, Exponent" && this.state.value2==="secrets.token_hex(32)"){
    		return("Advanced");
		}
		else if((this.state.value1==="**, Exponent" && this.state.value2!=="secrets.token_hex(32)") || (this.state.value1!=="**, Exponent" && this.state.value2==="secrets.token_hex(32)")){
			return("Intermediate");
		}
		else{
			return("Beginner");
		}
    }
    levelChange3(){
    	if(this.state.value1==="3d" && this.state.value2==="10"){
			return("Advanced");
		}
		else if((this.state.value1==="3d" && this.state.value2!=="10") || (this.state.value1!=="3d" && this.state.value2==="10")){
			return("Intermediate");
		}
		else{
			return("Beginner");
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
  	const {value1, value2, value3}=this.state;
  	//If the generated random number is 0 this is the quiz ------------------------------------------------------------------
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
				    		<p style={{fontSize:"16px", fontWeight:"bold"}}>1. What is the output of the following code?</p>
				    		<Container style={{backgroundColor: "#ffffff"}}>
				    			<div>
				    				<p style={{color: "#003300"}}>sampleList = ["Jon", "Kelly", "Jessa"]</p>
				    				<p style={{color: "#003300"}}>sampleList.append(2, "Scott")</p>
				    				<p style={{color: "#003300"}}>print(sampleList)</p>
				    			</div>
				    		</Container>
							<ul>
								<label>
								    <input type="radio"
								            value="1a"
								            name="value1"
								            checked={this.state.value1==="1a"}
								            onChange={this.onAnsChange}
								    />
								    &nbsp; The program executed with errors
								</label>
							</ul>
							<ul>
								<label>
								    <input type="radio"
								            value="1b"
								            name="value1"
								            checked={this.state.value1==="1b"}
								            onChange={this.onAnsChange}
								    />
								    &nbsp; ['Jon', 'Kelly', 'Scott', 'Jessa']
								</label>
							</ul>
							<ul>
								<label>
								    <input type="radio"
								            value="1c"
								            name="value1"
								            checked={this.state.value1==="1c"}
								            onChange={this.onAnsChange}
								    />
								    &nbsp; ['Jon', 'Kelly', 'Jessa', 'Scott']
								</label>
							</ul>
							<ul>
								<label>
								    <input type="radio"
								            value="1d"
								            name="value1"
								            checked={this.state.value1==="1d"}
								            onChange={this.onAnsChange}
								    />
								    &nbsp; ['Jon', 'Scott', 'Kelly', 'Jessa']
								</label>
							</ul>
						</div>
						<hr/>
						<div>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>2.Can we use the “else” clause for loops?</p>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>for example:</p>
							<Container style={{backgroundColor: "#ffffff"}}>
				    			<div>
				    				<p style={{color: "#003300"}}>for i in range(1, 5):</p>
				    				<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;print(i)</p>
				    				<p style={{color: "#003300"}}>else:</p>
				    				<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;print("this is else block statement" )</p>
				    			</div>
				    		</Container>
				    		<ul>
								<label>
								    <input type="radio"
								            value="Yes"
								            name="value2"
								            checked={this.state.value2==="Yes"}
								            onChange={this.onAnsChange}
								    />
								    &nbsp; Yes
								</label>
							</ul>
							<ul>
								<label>
								    <input type="radio"
								            value="No"
								            name="value2"
								            checked={this.state.value2==="No"}
								            onChange={this.onAnsChange}
								    />
								    &nbsp; No
								</label>
							</ul>
						</div>
						<hr/>
						<div>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>3. I want to generate a random secure hex token of 32 bytes to reset the password, which method should I use</p>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.hexToken(32)"
							                name="value3"
							                checked={this.state.value3==="secrets.hexToken(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.hexToken(32)
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.hex_token(32)"
							                name="value3"
							                checked={this.state.value3==="secrets.hex_token(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.hex_token(32)
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.tokenHex(32)"
							                name="value3"
							                checked={this.state.value3==="secrets.tokenHex(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.tokenHex(32)
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.token_hex(32)"
							                name="value3"
							                checked={this.state.value3==="secrets.token_hex(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.token_hex(32)
							    </label>
							</ul>
						</div>
						<p>{value1}, {value2}, {value3}</p>
						

						<Button onClick= {(event) => this.openModal()}style={{backgroundColor:"#99c2ff"}}>
							Submit
						</Button>
						<Modal visible={this.state.visible} width="500" height="100" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
							<p style={{fontWeight:"bold"}}>Based on the answers you provided you are on {this.levelChange1()} level</p>
							<hr/>
							<div>
								<Button onClick= {(event) => this.closeModal()} className="btn btn-primary btn-lg float-left"style={{backgroundColor:"#5bc0de"}}>
	                                    try again
	                            </Button>
								<Link className="links" to={this.levelChange1()}>
	                                &nbsp;&nbsp;&nbsp;
	                                <Button className="btn btn-primary btn-lg float-right"style={{backgroundColor:"#5bc0de"}}>
	                                    OK
	                                </Button>
	                            </Link>
                            </div>
						</Modal>
				    </Container>
				</Container>
	  		);
 		}
 //End of quiz generated by random number 0------------------------------------------------------------------------------------

 //If the generated random number is 1 this is the quiz------------------------------------------------------------------------
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
							<p style={{fontSize:"16px", fontWeight:"bold"}}>1.Which operator has higher precedence in the following list?</p>
							<ul>
							    <label>
							        <input type="radio"
							                value="%Modulus"
							                name="value1"
							                checked={this.state.value1==="%Modulus"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; %Modulus
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="&BitWise AND"
							                name="value1"
							                checked={this.state.value1==="&BitWise AND"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; &BitWise AND
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="**, Exponent"
							                name="value1"
							                checked={this.state.value1==="**, Exponent"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; **, Exponent
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value=">Comparison"
							                name="value1"
							                checked={this.state.value1===">Comparison"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; >Comparison
							    </label>
							</ul>
						</div>
						<hr/>
						<div>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>2. I want to generate a random secure hex token of 32 bytes to reset the password, which method should I use</p>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.hexToken(32)"
							                name="value2"
							                checked={this.state.value2==="secrets.hexToken(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.hexToken(32)
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.hex_token(32)"
							                name="value2"
							                checked={this.state.value2==="secrets.hex_token(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.hex_token(32)
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.tokenHex(32)"
							                name="value2"
							                checked={this.state.value2==="secrets.tokenHex(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.tokenHex(32)
							    </label>
							</ul>
							<ul>
							    <label>
							        <input type="radio"
							                value="secrets.token_hex(32)"
							                name="value2"
							                checked={this.state.value2==="secrets.token_hex(32)"}
							                onChange={this.onAnsChange}
							        />
							        &nbsp; secrets.token_hex(32)
							    </label>
							</ul>
						</div>
						<Button onClick= {(event) => this.openModal()}style={{backgroundColor:"#99c2ff"}}>
							Submit
						</Button>
						<Modal visible={this.state.visible} width="500" height="100" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
							<p style={{fontWeight:"bold"}}>Based on the answers you provided you are on {this.levelChange2()} level</p>
							<hr/>
							<div>
								<Button onClick= {(event) => this.closeModal()} className="btn btn-primary btn-lg float-left"style={{backgroundColor:"#5bc0de"}}>
	                                    try again
	                            </Button>
								<Link className="links" to={this.levelChange2()}>
	                                &nbsp;&nbsp;&nbsp;
	                                <Button className="btn btn-primary btn-lg float-right"style={{backgroundColor:"#5bc0de"}}>
	                                    OK
	                                </Button>
	                            </Link>
                            </div>
						</Modal>		
					</Container>
				</Container>		
			);
		}
//End of the quiz generated by the random number 1----------------------------------------------------------------------------------------

//Other random numbers will generate this quiz--------------------------------------------------------------------------------------------
		
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
							<p style={{fontSize:"16px", fontWeight:"bold"}}>1. What is the output of the following display() function call?</p>
					   	 	<Container style={{backgroundColor: "#ffffff"}}>
				    			<div>
				    				<p style={{color: "#003300"}}>def display(**kwargs):</p>
				    				<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;for i in kwargs:</p>
				    				<p style={{color: "#003300"}}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;print(i)</p>
				    				<p style={{color: "#003300"}}>display(emp="Kelly", salary=9000)</p>
				    			</div>
				    		</Container>
					   	 	<ul>
					        	<label>
					            	<input type="radio"
					                    	value="3a"
					                    	name="value1"
					                    	checked={this.state.value1==="3a"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; TypeError
					        	</label>
					    	</ul>
					    	<ul>
					       		<label>
					            	<input type="radio"
					                    	value="3b"
					                    	name="value1"
					                    	checked={this.state.value1==="3b"}
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
					                    	name="value1"
					                    	checked={this.state.value1==="3c"}
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
					                    	name="value1"
					                    	checked={this.state.value1==="3d"}
					                    	onChange={this.onAnsChange}
					           		/>
					       			&nbsp; emp
									<p>&nbsp;&nbsp;&nbsp;&nbsp;salary</p>
					        	</label>
					    	</ul>
						</div>  
						<hr/>
						<div>
							<p style={{fontSize:"16px", fontWeight:"bold"}}>2. What is the output of the following?</p>
					   	 	<Container style={{backgroundColor: "#ffffff"}}>
				    			<div>
				    				<p style={{color: "#003300"}}>l = [None] * 10</p>
				    				<p style={{color: "#003300"}}>print(len(l))</p>
				    			</div>
				    		</Container>
					   	 	<ul>
					        	<label>
					            	<input type="radio"
					                    	value="10"
					                    	name="value2"
					                    	checked={this.state.value2==="10"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; 10
					        	</label>
					    	</ul>
					    	<ul>
					       		<label>
					            	<input type="radio"
					                    	value="0"
					                    	name="value2"
					                    	checked={this.state.value2==="0"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; 0
					        	</label>
					    	</ul>
					    	<ul>
					       		<label>
					            	<input type="radio"
					                    	value="Syntax Error"
					                    	name="value2"
					                    	checked={this.state.value2==="Syntax Error"}
					                    	onChange={this.onAnsChange}
					            	/>
					            	&nbsp; Syntax Error
					        	</label>
					    	</ul>
						</div> 
						<Button onClick= {(event) => this.openModal()}style={{backgroundColor:"#99c2ff"}}>
							Submit
						</Button>
						<Modal visible={this.state.visible} width="500" height="100" effect= "fadeInUp" onClickAway={() => this.closeModal()}>
							<p style={{fontWeight:"bold"}}>Based on the answers you provided you are on {this.levelChange3()} level.</p>
							<hr/>
							<div>
								<Button onClick= {(event) => this.closeModal()} className="btn btn-primary btn-lg float-left"style={{backgroundColor:"#5bc0de"}}>
	                                    try again
	                            </Button>
								<Link className="links" to={this.levelChange3()}>
	                                &nbsp;&nbsp;&nbsp;
	                                <Button className="btn btn-primary btn-lg float-right"style={{backgroundColor:"#5bc0de"}}>
	                                    OK
	                                </Button>
	                            </Link>
                            </div>
						</Modal>
					</Container>   
				</Container>    
			);
		}
//End of section-------------------------------------------------------------------------
 	}
}