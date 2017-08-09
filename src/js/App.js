import React from 'react';
import image from '../img/img_collapsible-fb.jpg';


class App extends React.Component {
    render() {
        return (
            <div>
              <h1>Collapsible Content</h1>
              <img src={image} width="300px" />
            </div>
        );
    }
}
export default App;
