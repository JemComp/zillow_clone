import React from "react";
import ListingIndexItem from "./listing_index_item";


class SavedListings extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="saved-listings-container">
                    {Object.values(this.props.listings).map((listing) => (
                    <ListingIndexItem key={listing.id} listing={listing} openListingModal={this.props.openListingModal}/>))}
                </div>
        )
    }
}

export default SavedListings