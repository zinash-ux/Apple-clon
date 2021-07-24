import appletvlogo from '../Asset/images/icons/apple-tv-logo.png';
import banker from '../Asset/images/home/banker.png';
import watchseries5logo from '../Asset/images/icons/watch-series5-logo.png';


function section5(){
    return(

<section class="fifth-heghlight-wrapper">
<div class="container-fluid">
    <div class="row">
        <div class="left-side-wrapper col-sm-12 col-md-6">
            <div class="left-side-container">
                <div class="top-logo-wrapper">
                    <div class="logo-wrapper">
                        <img src={appletvlogo}/>
                    </div>
                </div>

                <div class="tvshow-logo-wraper">
                    <img src={banker}/>
                </div>

                <div class="watch-more-wrapper">
                    <a href="#">Watch now on the Apple TV App</a>
                </div>
            </div>
        </div>
        <div class="right-side-wrapper col-sm-12 col-md-6">
            <div class="right-side-container">
                <div class="top-logo-wrapper">
                    <div class="logo-wrapper">
                        <img src={watchseries5logo}/>
                    </div>
                </div>
                <div class="description-wraper">
                    With the Always-On Retina display.<br/>
                    You’ve never seen a watch like this.
                </div>
                <div class="links-wrapper">
                    <ul>
                        <li><a href="">Learn more</a></li>
                        <li><a href="">Buy</a></li>
                    </ul> 
                </div>
            </div>
        </div>					
    </div>
</div> 
</section>

);
}
export default section5;