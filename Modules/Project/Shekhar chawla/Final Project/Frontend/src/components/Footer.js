import React from 'react'
import { SiFacebook, SiTwitter, SiLinkedin, SiYoutube } from "react-icons/si";
import styled from 'styled-components'

const Styles = styled.div`
  .container-fluid {
    background-color: #0E3A50;
    color: #879DA8;
    font-size: 80%;
  }
  .divider-horizontal {
    width: 100%;
    height: 1px;
    background-color: #879DA8;
  }
  .divider-vertical {
    border-right: 0.8px solid #879DA8;
  }
`;

export default function Footer() {
  return (
    <Styles>
      <div class="container-fluid">
        <div class="container mx-auto px-5">
          <div class="row">
            <div class="col">
              <img src="images/logo.svg" alt="company logo" height="33px;" class="mx-5 my-4"></img>
            </div>
            <div class="col">
              <img src="images/cartrade_logo_238-48.png" alt="company logo" height="33px;" class="mx-5 my-4"></img>
            </div>
            <div class="col">
              <img src="images/bikewale.png" alt="company logo" height="33px;" class="mx-5 my-4"></img>
            </div>
          </div>
        </div>
        <div className="divider-horizontal"></div>

        <div class="container my-5">
          <div class="row">

            <div class="col px-4 divider-vertical" >
              <div class="row mb-2">
                <div class="col-3">Language:</div>
                <div class="col-3">&nbsp;English</div>
                <div class="col-3">Hindi</div>
              </div>
              <div class="row">
                <div class="col-6 mb-2">About Us</div>
                <div class="col-6 mb-2">Terms {'&'} Condition</div>
                <div class="col-6 mb-2">Careers</div>
                <div class="col-6 mb-2">Contact Us</div>
                <div class="col-6 mb-2">Advertise</div>
              </div>
            </div>


            <div class="col px-5 divider-vertical" >
              <p><strong>CarWale</strong>: 12th Floor, Vishwaroop IT Park, Sector 30A, Vashi, Navi Mumbai - 400705. Maharashtra, India.</p>
              <p>Phone: {'+91 (22) 612 91700'}</p>
            </div>


            <div class="col px-5">
              <div class="row mb-2">
                <div class="col-12 mb-2">Download Mobile App</div>
                <div class="col-4"><img src="images/app-store.svg"></img></div>
                <div class="col-4"><img src="images/play-store.svg"></img></div>
              </div>
              <div class="row">
                <div class="col-12 mb-2">Connect with us</div>
                <div class="col-2">
                  <a href="#" class="text-decoration-none text-light"><SiFacebook /></a>
                </div>
                <div class="col-2">
                  <a href="#" class="text-decoration-none text-light"><SiTwitter /></a>
                </div>
                <div class="col-2">
                  <a href="#" class="text-decoration-none text-light"><SiYoutube /></a>
                </div>
                <div class="col-2">
                  <a href="#" class="text-decoration-none text-light"><SiLinkedin /></a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="divider-horizontal"></div>
        <div class="container mx-auto py-2">
          <div class="d-flex justify-content-center">
            <div class="px-4">
              2006 - 2021. www.carwale.com
			    </div>
            <div class="px-4">
              Visitor Agreement {'&'} Privacy Policy
			    </div>
          </div>
        </div>
      </div>
    </Styles>
  )
}
