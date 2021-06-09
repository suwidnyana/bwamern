import Header from 'parts/Header';
import Fade from "react-reveal/Fade";

import PageDetailTitle from 'parts/PageDetailTitle';
import React, { Component } from 'react'
import FeaturedImage from 'parts/FeaturedImage';
import PageDetailsDescription from 'parts/PageDetailDescription'
import BookingForm from 'parts/BookingForm'
import Categories from 'parts/Categories'
import Testimony from 'parts/Testimony'


import ItemDetails from "json/itemDetails.json"
import Footer from 'parts/Footer';


export default class DetailsPage extends Component {

    componentDidMount() {
        window.title = "Details Page";
        window.scrollTo(0, 0);
    }

    


    render() {
        const breadcrumb = [
            {pageTitle: "Home", pageHref: ""},
            {pageTitle: "House Details", pageHref: ""}
        ];
        return (
            <>
                <Header {...this.props}></Header>
                <PageDetailTitle
                    breadcrumb={breadcrumb}
                    data={ItemDetails}
                ></PageDetailTitle>
                <FeaturedImage data={ItemDetails.imageUrls}></FeaturedImage>
                <section className="container">
                    <div className="row">
                        <div className="col-7 pr-5">
                            <Fade bottom>
                                <PageDetailsDescription data={ItemDetails}></PageDetailsDescription>
                            </Fade>
                        </div>
                        <div className="col-5">
                            <BookingForm itemDetails={ItemDetails}></BookingForm>
                        </div>
                    </div>
                </section>
                <Categories data={ItemDetails.categories}></Categories>
                <Testimony data={ItemDetails.testimonial} />
                <Footer/>
            </>
        )
    }
}
