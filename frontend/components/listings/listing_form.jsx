import React from "react";

class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.handleFile = this.handleFile.bind(this);
    }

    componentDidMount() {
        const mapOptions = {
            center: { lat: 37.66385274501688, lng: -122.4351120016871}, // this is SF
            zoom: 13
          };
      
          // wrap this.mapNode in a Google Map
          this.map = new google.maps.Map(this.mapNode, mapOptions);
    }


    update(field){
        return e => {
            this.setState({ [field]: e.currentTarget.value})    
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.action(this.state);
      }

    render() {
        return (
            <div className="listing-form">
        <h3>{this.props.formType}</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            Address
            <input
              type='text'
              value={this.state.address}
              onChange={this.update('address')}
            />
          </label>

          <label>
            zip code
            <input
              type='numbers'
              value={this.state.zip_code}
              onChange={this.update('zip_code')}
            />
          </label>

          <label>
            city
            <input
              type='text'
              value={this.state.city}
              onChange={this.update('city')}
            />
          </label>
          
          <label>
            State
            <input
              type='text'
              value={this.state.state}
              onChange={this.update('state')}
            />
          </label>

          <div className="create-listings-map">
                <div ref={ map => this.mapNode = map } id='listing-map-container'>
                    </div>
            </div>

          <label>
            lat
            <input
              type='numbers'
              value={this.state.lat}
              onChange={this.update('lat')}
            />
          </label>

          <label>
            lng
            <input
              type='numbers'
              value={this.state.lng}
              onChange={this.update('lng')}
            />
          </label>

          <label>
            beds
            <input
              type='numbers'
              value={this.state.beds}
              onChange={this.update('beds')}
            />
          </label>

          <label>
            baths
            <input
              type='numbers'
              value={this.state.baths}
              onChange={this.update('baths')}
            />
          </label>

          <label>
            Square Feet
            <input
              type='numbers'
              value={this.state.sqft}
              onChange={this.update('sqft')}
            />
          </label>

          <label>
            price
            <input
              type='numbers'
              value={this.state.price}
              onChange={this.update('price')}
            />
          </label>

          <label>
            description
            <textarea
              value={this.state.description}
              onChange={this.update('description')}
            />
          </label>

          <button type='submit' value={this.props.formType}>submit</button>
        </form>

        <ul>
                    {
                    this.props.errors.map((error, index) => {
                        return <li key={index}>{error}</li>
                    })}
                    
                    <br/>
        </ul>

      </div>
        )
    }

}

export default ListingForm