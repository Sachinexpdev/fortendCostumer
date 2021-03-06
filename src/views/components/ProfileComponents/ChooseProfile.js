import React from 'react';
import ImageUploader from 'react-images-upload';
 
class ChoosProfile extends React.Component {
 
    constructor(props) {
        super(props);
         this.state = { pictures: [] };
         this.onDrop = this.onDrop.bind(this);
    }
 
    onDrop(picture) {
        this.setState({
            pictures: this.state.pictures.concat(picture),
        });
    }
 
    render() {
        return (
            <div className="choos-img-dm">
                <ImageUploader
                withIcon={false}
                buttonText='Choose images'
                onChange={this.onDrop}
                // imgExtension={['.jpg', '.gif', '.png', '.gif']}
                maxFileSize={5242880}
                withPreview={true}
            />
            </div>
        );
    }
}


export default ChoosProfile