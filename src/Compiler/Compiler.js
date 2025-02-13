import React, { Component } from "react";
import "./Compiler.css";
import Navbar from "../Components/Navbar"
require('dotenv').config()

export default class Compiler extends Component {
	constructor(props) {
		super(props);
		this.state = {
			input: localStorage.getItem("input") || ``,
			output: ``,
			language_id: localStorage.getItem("language_Id") || 2,
			user_input: ``,
		};
	}
	
	/* 1.Write Code here for taking value of input, language_id, user_input from local storage*/
	



	submit = async (e) => {
		e.preventDefault();
		let outputText = document.getElementById("output");
		outputText.innerHTML = "";
		outputText.innerHTML += "Creating Submission ...\n";
		/* 2. Write Code for creating submission here */



		outputText.innerHTML += "Submission Created ...\n";
		/* 3. Write Code for getting a submission here */



		/* 4. Write Code for getting errors or displaying submissison here */
		
	};

	render() {
		return (
			<>
				<Navbar />
				
				<div className="">
					<div className="">
						<label htmlFor="solution ">
							<span className="">
								 Code Here
							</span>
						</label>
						<textarea
							required
							name="solution"
							id="source"
							onChange={this.input}
							className=" source"
							value={this.state.input}
						></textarea>
						<button type="submit" className="" onClick={this.submit}>
							Run
						</button>

						<label htmlFor="tags" className="mr-1">
							<b className="heading">Language:</b>
						</label>
						<select value={this.state.language_id} onChange={this.language} id="tags" className="language">
							<option value="54">C++</option>
							<option value="50">C</option>
							<option value="62">Java</option>
							<option value="71">Python</option>
						</select>
					</div>
					<div className="">
						<div>
							<span className="">
								 Output
							</span>
							<textarea id="output"></textarea>
						</div>
					</div>
				</div>
				<div className="">
					<span className="">
						 User Input
					</span>
					<br />
					<textarea id="input" onChange={this.userInput}></textarea>
				</div>
			</>
		);
	}
}
