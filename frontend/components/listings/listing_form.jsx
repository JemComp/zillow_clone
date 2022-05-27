import React from "react";
import { Link } from "react-router-dom";
import MarkerManager from "../../util/marker_manager";

class ListingForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = this.props.listing;
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.deleteListing = this.deleteListing.bind(this)
    }

    componentDidMount() {
        this.props.clearErrors()
        const mapOptions = {

            center: { lat: this.props.listing.lat, lng: this.props.listing.lng},
            zoom: 12
          };
      
          // wrap this.mapNode in a Google Map
          this.map = new google.maps.Map(this.mapNode, mapOptions);
          this.MarkerManager = new MarkerManager(this.map, undefined, true)
          this.MarkerManager.updateMarkers([this.props.listing])
        this.setState( { photoFiles: [] } )
        // console.log(this.state)

    }

    handleFile(e) {
        console.log(e.target.files)
        this.setState({ photoFiles: [...this.state.photoFiles, e.target.files[0]] })
        // console.log(this.state)
    }


    update(field) {
        return e => {
            this.setState({ [field]: e.currentTarget.value})    
        }
        
    }

    deleteListing() {
        this.props.deleteListing(this.state.id)
        .then(() => this.props.history.push(`/listings`))
        // debugger
    }

    removePhotos(type, photo) {
        return () => {
            console.log("removing")

            if (type === 'url') {
                const idx = this.state.photoUrls.indexOf(photo)
                this.setState({ photoUrls: [...this.state.photoUrls.splice(idx,1)]})
            }
    
            if (type === 'file') {
                const idx = this.state.photoFiles.indexOf(photo)
                this.setState({ photoFiles: [...this.state.photoFiles.splice(idx,1)]})
            }
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log(this.state)
        const formData = new FormData();
        formData.append('id', this.state.id)
        formData.append('listing[address]', this.state.address);
        formData.append('listing[zip_code]', this.state.zip_code);
        formData.append('listing[city]', this.state.city);
        formData.append('listing[state]', this.state.state);
        formData.append('listing[lat]', this.state.lat);
        formData.append('listing[lng]', this.state.lng);
        formData.append('listing[beds]', this.state.beds);
        formData.append('listing[baths]', this.state.baths);
        formData.append('listing[sqft]', this.state.sqft);
        formData.append('listing[price]', this.state.price);
        formData.append('listing[description]', this.state.description);
        formData.set
        if (this.state.photoFiles) {
            console.log("photos in state")
            for (let i = 0; i < this.state.photoFiles.length; i++) {
                formData.append("listing[photos][]", this.state.photoFiles[i]);
            }
        }


        if (this.state.photoFiles) {
            console.log("photos in state")
            for (let i = 0; i < this.state.photoFiles.length; i++) {
                formData.append("listing[photos][]", this.state.photoFiles[i]);
            }
        }
        // console.log(formData.get("id"))
        this.props.action(formData)
        .then(() => this.props.history.push(`/listings`))
        
    }



    render() {
        console.log(this.props)
        let prev1 = ( this.state.photoUrls != undefined  && this.state.photoUrls.length != 0) ? 
            this.state.photoUrls.map((photoUrl, i) => (
                    <div className="form-photos-div">
                        <p onClick={this.removePhotos("url", photoUrl)}>X</p>
                        <img id={`form-photo-${i}`} className="form-photos" src={photoUrl} alt="preview-photo"></img>
                    </div>
                )) : null

        let prev2 = ( this.state.photoFiles != undefined && this.state.photoFiles.length != 0) ? 
            this.state.photoFiles.map((photo, i) => (
                <div className="form-photos-div">
                    <p onClick={this.removePhotos("file", photo)}>X</p>
                    <img id={`form-photo-${i}`} className="form-photos" src={URL.createObjectURL(photo)} alt="preview-photo" ></img>
                </div>
                )) : null

        let preview = <div className="listing-form-preview"> {prev1} {prev2} </div>


        return (
            <div className="listing-form-container">

                <div className="listing-form-photos">
                    {preview}
                    <label id="form-photos-box" >
                        photos:<input type='file' multiple onChange={this.handleFile} />
                    </label>            
                </div>

                <div className="listing-form-right">

                    <h3>{this.propsformType}</h3>

                    <form onSubmit={this.handleSubmit} className="listing-form">

                            <label className="street-input">
                                Address
                                <input
                                type='text'
                                value={this.state.address}
                                onChange={this.update('address')}
                                />
                            </label>

                        <div className="address-input">

                            <label>
                                zip code
                                <input
                                type='number'
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
                        </div>

                        <div className="create-listings-map">
                                <div ref={ map => this.mapNode = map } id='listing-map-container'>
                                    </div>
                        </div>
                        
                        <div className=" lat-lng">
                            <label>
                                lat
                                <input
                                type='number'
                                value={this.state.lat}
                                onChange={this.update('lat')}
                                />
                            </label>

                            <label>
                                lng
                                <input
                                type='number'
                                value={this.state.lng}
                                onChange={this.update('lng')}
                                />
                            </label>
                        </div>
                        

                        <div className="extra-inputs">
                            <label>
                                beds
                                <input
                                type='number'
                                value={this.state.beds}
                                onChange={this.update('beds')}
                                />
                            </label>

                            <label>
                                baths
                                <input
                                type='number'
                                value={this.state.baths}
                                onChange={this.update('baths')}
                                />
                            </label>

                            <label>
                                Square Feet
                                <input
                                type='number'
                                value={this.state.sqft}
                                onChange={this.update('sqft')}
                                />
                            </label>
                        </div>

                        <label>
                            price
                            <input
                            type='number'
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

                        <button type='submit' value={this.props.formType}>{this.props.formType}</button>
                    </form>

                    <ul>
                        {
                        this.props.errors.map((error, index) => {
                            return <li key={index}>{error}</li>
                        })}
                        
                        <br/>
                    </ul>

                    {(this.props.formType === "Update listing") ? 
                        <div className="delete-div">
                            <button className='delete-listing' onClick={this.deleteListing} >Remove your listing</button>
                        </div> : 
                        null}

                </div>

            </div>
        )
    }

}

export default ListingForm