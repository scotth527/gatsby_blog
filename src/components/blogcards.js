import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText } from 'reactstrap';
import { Link } from "gatsby"

const BlogCards = (props) => {
    let shorten = (description) => {
		if (description.length > 150) {
			return (
				description.substring(
					0,
					description.substring(0, 200).lastIndexOf(" ")
				) + "..."
			);
		} else return description;
	};
    
  return (
    <div className="mr-3 mb-3 mt-3">
      <Card>
        <CardHeader>{props.title}</CardHeader>
        <CardBody>
          <CardTitle>{"By: " + props.author}</CardTitle>
          <CardText>{shorten(props.description)}</CardText>
          <Link to={props.url}><Button>Read more</Button></Link>
        </CardBody>
        <CardFooter>{props.date}</CardFooter>
      </Card>
    </div>
  );
};

export default BlogCards;