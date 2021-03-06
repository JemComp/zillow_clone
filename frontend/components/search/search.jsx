import React from "react";
import { fetchAllListings } from "../../actions/listing_actions";
import ListingsIndex from "../listings/listings_index";
import ListingMap from "../listings/listing_map";

class Search extends React.Component {
    constructor(props) {
        super(props)
    }

    // componentDidMount() {
    //     this.props.fetchAllListings
    // }

    render() {
        return (
            <div className="main-index-container">
                <div>
                    {/* SEARCH STUFF WILL GO HERE */}
                </div>
                
                <section className="listings-index-container">
                    <ListingMap listings={this.props.listings} openListingModal={this.props.openListingModal}/>
                    <ListingsIndex fetchAllListings={this.props.fetchAllListings} listings={this.props.listings} openListingModal={this.props.openListingModal}/>

                </section>
            </div>
        )
    }

}

export default Search