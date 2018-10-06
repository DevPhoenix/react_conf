import React, { Component } from 'react';
//import { Media } from 'reactstrap';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';


class Dish extends Component {
	
//	constructor(props) {
//		super(props);		

//		this.state = {
//			selectedDish: this.props.dish
//		};
//	}

//onDishSelect(dish){
//	this.setState({selectedDish: dish});
//}
	
	render(){		

		if (this.props.dish != null){ 

			const comments = this.props.dish.comments.map((comment) => {
				return(
						<CardBody>
							<CardText>-- {comment.author} , {comment.date}</CardText>
							<CardText>Comment: {comment.comment}</CardText>
						</CardBody>
				);
			});

			return (
				<div className="row">
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardImg width="100%" object src={this.props.dish.image} alt={this.props.dish.name} />
							<CardBody>
								<CardTitle>{this.props.dish.name}</CardTitle>
								<CardText>{this.props.dish.description}</CardText>
							</CardBody>
						</Card>
					</div>
					<div className="col-12 col-md-5 m-1">
						<Card>
							<CardBody>
								<CardTitle>Comments</CardTitle>
								<CardText>Imagineall these eatables, living in ConFusion!</CardText>
							</CardBody>
							{comments}
						</Card>
					</div>
							</div>
			);
		}
		else {
			return (
				<div></div>
			);
		}

	}
}

export default Dish;  