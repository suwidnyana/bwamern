import Header from 'parts/Header';
import Fade from "react-reveal/Fade";
import {connect} from "react-redux"
import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react'
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailsDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'

import Testimony from 'parts/Testimony'
import Activites from 'parts/Activities'


import Footer from 'parts/Footer';

import {checkoutBooking} from "store/actions/checkout"
import {fetchPage} from "store/actions/pages"


class DetailsPage extends Component {

    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);

        
        if(!this.props.page[this.props.match.params.id]) 
        this.props
            .fetchPage(
                `/detail-page/${this.props.match.params.id}`, this.props.match.params.id
            )
            .then((response) => {
                document.title = `Staycation | ${response.title}`;
            })

    }

    


    render() {
        const { page,match } = this.props

        if (!page[match.params.id]) return null;

        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle breadcrumb={breadcrumb}data={page[match.params.id]}
                ></PageDetailTitle>
                <FeaturedImage data={page[match.params.id].imageId}/>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <Fade bottom>
                                <PageDetailsDescription data={page[match.params.id]}/>
                            </Fade>
                        </div>
                        <div className="col-5">
                            <BookingForm 
                            itemDetails={page[match.params.id]} 
                            startBooking={this.props.checkoutBooking}/>
                        </div>
                    </div>
                </section>
                <Activites data={page[match.params.id].activityId}/>
                <Testimony data={page[match.params.id].testimonial} />
                <Footer/>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    page: state.page
})

export default connect(mapStateToProps, {checkoutBooking, fetchPage})(DetailsPage);
