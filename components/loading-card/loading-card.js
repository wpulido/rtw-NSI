import React, { Component } from 'react'

export default class LoadingCard extends Component {
    render() {
        return (
            <div className="col-sm-6  the-card flash_loading animated flash infinite slower" >
                <div className="card__header col-sm-12 col-md-4"  ><p>Event image</p></div>
                <div className="card__content__wrapper col-sm-12 col-md-8">
                    <div className="card__title">
                        <h3>Event Name</h3>
                        <div className="card__tags" >
                            <span className="gray__tag" >Issue</span>
                        </div>
                    </div>
                    <div className="card__date">
                        <div className="row">
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-4" >
                                <span className="date">Jul 01, 2020</span>
                            </div>
                            <div className="col-xs-6 col-sm-6 col-md-6 col-lg-8">
                                <span className="location">New York</span>
                            </div>
                        </div>
                    </div>
                    <div className="card__content">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur minima facere </p>
                    </div>
                    <div className="card____button">
                        <a  className="learn__more__btn">send</a>
                    </div>
                </div>
            </div>
        )
    }
}
