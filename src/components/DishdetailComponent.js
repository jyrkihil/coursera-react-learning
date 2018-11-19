import React from 'react';
import { Card, CardImg, CardTitle, CardBody, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


    function RenderDish({dish}) {
        return(
            <Card>
                <CardImg src={dish.image} alt={dish.name} />
                <CardBody>
                    <CardTitle><b>{dish.name} - {dish.price}€</b></CardTitle>
                    <CardText>{dish.description}</CardText>
                </CardBody>
            </Card>
        );
    }

    function RenderComments({comments}) {

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

        if(props.dish != null) {
            return(
                <div className="container">
                     <div className="row">
                        <Breadcrumb>
                            <BreadcrumbItem><Link to='/menu'>Menu</Link></BreadcrumbItem>
                            <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                        </Breadcrumb>
                        <div className="col-12">
                            <h3>{props.dish.name}</h3>
                            <hr />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5 m-1">
                            <RenderComments comments={props.comments} />
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