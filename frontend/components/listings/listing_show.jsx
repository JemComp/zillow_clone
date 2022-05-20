import React from "react";

class ListingShow extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.fetchListings(this.props.match.params.listingId)
    }

    render() {
        return (
            <div>
                hello
            </div>
        )
    }

}

export default ListingShow

