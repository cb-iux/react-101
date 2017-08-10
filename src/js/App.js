import React from 'react';
import image from '../img/expand-vertical-4.svg';
import imageTwo from '../img/img_collapsible-fb.jpg';
import Collapsible from './Collapsible';

class App extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <img src={image} />
                    <h1>Collapsible Content</h1>
                </header>
                <div className="content">
                    <div className="panel-group">
                      <Collapsible title="Overview">
                        <p>                        
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.
                        </p>
                      </Collapsible>
                      <Collapsible title="Over">
                        <p>Enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                      </Collapsible>
                      <Collapsible title="View">
                        <p>Cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute.</p>
                      </Collapsible>
                    </div>
                </div>
            </div>
        );
    }
}
export default App;
