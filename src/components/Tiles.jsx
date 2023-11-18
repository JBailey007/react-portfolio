import '../styles/Page.css'
import codegreen from '../assets/images/codegreen.jpg';
import lofty from '../assets/images/Lofty Page.jpg';
import bluepurple from '../assets/images/bluepurpleboxes.jpg';
import woodgrey from '../assets/images/woodgreyblack.jpg';
import blackwhite from '../assets/images/blackandwhite.jpg';

function Tiles() {
    return (
        <section className="section-margin">
            <div className="flexbox-container2">
            <div className="work-flexbox">
                <h2 id="Work">Work</h2>
            </div>
            </div>
            <div className="work-images-section">
                <div className="work-box-big">
                    <a href="https://github.com/JBailey007/Semantic-HTML"><img src={codegreen}></img></a>
                    <div className="text-card">
                        <p>Semantic HTML</p>
                    </div>
                </div>
                <div className="work-box-small">
                    <a href="https://lofty.up.railway.app/login"><img src={lofty}></img></a>
                    <div className="text-card">
                        <p>Lofty</p>
                    </div>
                </div>
                <div className="work-box-small">
                    <img src={bluepurple} alt="Blue and purple squares in an abstract pattern"></img>
                    <div className="text-card">
                        <p>Fun Project</p>
                    </div>
                </div>
                <div className="work-box-small">
                    <img src={woodgrey} alt="3 stripes colored brown, grey and black placed diagonally on the screen"></img>
                    <div className="text-card">
                        <p>Coming Soon</p>
                    </div>
                </div>
                <div className="work-box-small">
                    <img src={blackwhite} alt="Black and white xray photo of a computer memory chip"></img>
                    <div className="text-card">
                        <p>X-Ray Vision</p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Tiles;