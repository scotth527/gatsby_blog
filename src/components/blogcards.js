import React from 'react';
import { Card, Button, CardHeader, CardFooter, CardBody,
  CardTitle, CardText, CardImg } from 'reactstrap';
import { Link } from "gatsby"
import Moment from 'react-moment';

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
    <div className="ml-2 mr-2 mb-3 mt-3 col-lg-3 col-12 p-0">
      <Card>
        <CardHeader>{props.title}</CardHeader>
        <CardBody>
          <CardImg top width="100%" src={props.image} alt={props.alt} />
          <CardTitle>{"By: " + props.author}</CardTitle>
          <CardText>{shorten(props.description)}</CardText>
          <Link to={props.url}><Button alt="Link to blog cards" color="primary">Read more</Button></Link>
        </CardBody>
        <CardFooter><Moment format="MMMM DD, YYYY" date={props.date} /></CardFooter>
      </Card>
    </div>
  );
};

export default BlogCards;