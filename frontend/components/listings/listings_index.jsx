import React from "react";4
import { Link } from "react-router-dom";
import ListingIndexItem from "./listing_index_item";
import ListingMap from "./listing_map";

class ListingsIndex extends React.Component{
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchAllListings();
    }

    render() {
        if ( Object.values(this.props.listings).length === 0 ) { return <div>loading...</div> }
        return (
            <div className="listings-index-right">
                <div className="listing-index-header">
                    <h3>Real Estate & Homes For Sale</h3>
                </div>
                <div className="listings-index-right-container">
                    {Object.values(this.props.listings).map((listing) => (
                    <ListingIndexItem key={listing.id} listing={listing} openListingModal={this.props.openListingModal}/>))}
                </div>
            </div>
        )
    }

}

export default ListingsIndex