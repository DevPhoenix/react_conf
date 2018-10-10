import React from 'react';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap';

		

	function RenderComments ({comments}){
	
		if (comments != null){ 

			const commentsRendered = comments.map((comment) => {
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
				<div className="col-12 col-md-5 m-1">
					<ul>
						<h4>Comments</h4>
						<p>Imagine all these eatables, living in ConFusion!</p>
					</ul>
					{commentsRendered}
				</div>
			);

		}
		else {
			return (
				<div></div>
			);
		}
	}


	function RenderDish ({dish}){
		return (
			<div className="col-12 col-md-5 m-1">
				<Card>
					<CardImg width="100%" object src={dish.image} alt={dish.name} />
					<CardBody>
						<CardTitle>{dish.name}</CardTitle>
						<CardText>{dish.description}</CardText>
					</CardBody>
				</Card>
			</div>
		)
	}

	const DishDetail = (props) => {		

		if (props.dish != null){ 			
			return (
				<div className= "container">
					<div className="row">
						<RenderDish dish={props.dish} />
						<RenderComments comments={props.dish.comments} />
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

export default DishDetail;  