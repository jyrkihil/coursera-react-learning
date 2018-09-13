import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle, CardBody, CardText } from 'reactstrap';

class DishDetail extends Component {

    renderDish(selectedDish) {
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

    renderComments(selectedDish) {
       const comments = selectedDish.comments;
       const listItems = comments.map((comment) => {
       //console.log(comment.id, comment.author, comment.comment);
            return (
                <div key={comment.id}>
                    {comment.comment}<br/><br/>-- {comment.author}, {comment.date}<br/><br/>
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

    render() {
        const selectedDish = this.props.dish;

       // console.log(this.props.number + ' ' + this.props.rejlers);

        if(selectedDish != null) {
            return(
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                        {this.renderDish(selectedDish)}
                    </div>
                    <div className="col-12 col-md-5 m-1">
                        {this.renderComments(selectedDish)}
                    </div>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }

}

export default DishDetail;