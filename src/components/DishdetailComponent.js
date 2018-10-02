import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';


    function RenderDish({selectedDish}) {
        return(
            <Card>
                <CardImg src={selectedDish.image} alt={selectedDish.name} />
                <CardBody>
                    <CardTitle><b>{selectedDish.name} - {selectedDish.price}€</b></CardTitle>
                    <CardText>{selectedDish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({selectedDish}) {
       const comments = selectedDish.comments;
       const listItems = comments.map((comment) => {

        return (
            <div key={comment.id}>
                {comment.comment}<br/><br/>-- {comment.author},&nbsp;
                {new Intl.DateTimeFormat('en-US', 
                { year: 'numeric', 
                  month: 'long', 
                  day: '2-digit' 
                }).format(new Date(comment.date))}
                <br/><br/>
            </div>
            )
        })

        return (
            <div>
                <h4>Comments</h4>
                {listItems}
            </div>
        );
    }

    const DishDetail = (props) => {
        const selectedDish = props.dish;

        if(selectedDish != null) {
            return(
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish selectedDish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments selectedDish={props.dish} />
                        </div>
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }



export default DishDetail;