import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { floydWarshall } from './floyd';
import { Dijkstra } from './dijsktra';
import { Dropdown, Col, DropdownToggle, Button, DropdownMenu, DropdownItem, Form, FormGroup, Label, Input, InputGroup } from 'reactstrap';

class App extends Component {

	state = {
		dropdownOpen: false,
		algorithm: '',
		nodeNumber: 0,
	};

	toggle =() => {
		this.setState(prevState => ({
			dropdownOpen: !prevState.dropdownOpen
		}));
	}

	//Handle algorithm change
	toggleAlgo = (e) => {
		this.setState({
			algorithm: e.target.value
		});

	}


	//Component for selecting Algorithm
	PickAlgo = () =>  {
		return (
			<Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle} className="PickAlgo">
				<DropdownToggle caret>
					Select Algorithm
				</DropdownToggle>
				<DropdownMenu >
					<DropdownItem onClick={this.toggleAlgo} value={'Floyd-Warshall'} >Floyd-Warshall</DropdownItem>
					<DropdownItem divider />
					<DropdownItem onClick={this.toggleAlgo} value={'Dijkstra'} >Dijkstra</DropdownItem>
				</DropdownMenu>
			</Dropdown>
		);
	}

	handleNodeNumChange = (e) =>  {
		this.setState({
			nodeNumber: e.target.value
		});
	}

	handleSubmit = (e) =>  {
		e.preventDefault();
	}

	DisplayInput = () =>  {
		if (this.state.algorithm === 'Floyd-Warshall') {
			return <this.FloydInput />;
		}
		return <this.DijkstraInput />;
		
	}
	//Enter number of nodes
	NodeNum = () =>  {
		return (
			<Form inline className="seun" onSubmit={this.handleSubmit}>
				<FormGroup className="mb-4 mr-sm-4 mb-sm-2 apata">
					<Label for="nodeNumber" className="mr-sm-4">Enter number of nodes</Label>
					<Input type="number" value={this.state.nodeNumber} onChange={this.handleNodeNumChange} name="nodeNumber" />
				</FormGroup>
				<Button>Submit</Button>
			</Form>

		);

	}

	SingleInput = (props) =>  {
		return (
			<Input placeholder={props.inputKey} className="ade" />
		);
	}


	//Component for accepting a input for floyd
	FloydInput = () => {	
		let length = parseInt(this.state.nodeNumber, 10);
		return (Array.apply(null, Array(length)).map((i, item) =>
			<this.SingleInput key={item} inputKey='uu' />
		));
		
	}

	//Component for accepting an input for Dijsktra
	DijkstraInput = () =>  {

	}

	render() {
		const Floyd = new floydWarshall();
		const Dij = new Dijkstra();
		return (

			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
					<h1 className="App-title">SSG 308</h1>
					<h1 className="App-title">Group 16</h1>
				</header>
				<this.PickAlgo />
				{
					this.state.algorithm &&
					<div className='aronwa'>
						<h2>{this.state.algorithm}'s Algorithm</h2>
						<this.NodeNum />
					</div>

				}	

				{
					this.state.nodeNumber > 0 && 
					<this.DisplayInput />
				}
			</div>
		);
	}
}

export default App;
