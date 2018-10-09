import React, { Component } from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';


class Dish extends Component {
		
	render(){		

		if (this.props.dish != null){ 

			const comments = this.props.dish.comments.map((comment) => {
				return(
						<ul>
							<p>-- {comment.author} , {new Intl.DateTimeFormat('en-US',
							{ year: 'numeric', month: 'short', day: '2-digit' })
							.format(new Date(Date.parse(comment.date)))}</p>
							<p>Comment: {comment.comment}</p>
						</ul>
				);
			});
			
			return (

			<div className= "container">
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
						<ul>
							<h4>Comments</h4>
							<p>Imagine all these eatables, living in ConFusion!</p>
						</ul>
						{comments}
					</div>
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