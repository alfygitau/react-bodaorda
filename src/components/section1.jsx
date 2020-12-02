import React from 'react';
import section1img from '../assets/pic1.png';

function Section1() {
    return (
        <div>
            <div class="alert alert-warning alert-dismissible fade show alert1" role="alert">
                <strong>HELLO!</strong> COVID-19 Update:Our riders and employees are trained and sensitized on how to handle themselves, parcels and people, in order to prevent the spread of the Covid-19 virus.
                <button type="button" class="close" data-dismiss="alert" aria-label="Close">
                <span aria-hidden="true">&times;</span>
                </button>
            </div>
  <div class="container">
      <div class="row">
        <div class="col-sm-4">
            <img class="img1" src={section1img} alt="Flowers in Chania"/>
        </div>
        <div class="col-sm">
          <h1>
              Parcel Delivery & Errands
          </h1>
          <ol class="ol1" type="1">
              <li>Open the App and choose the Parcel Service</li>
              <li>Enter the destination to deliver the parcel</li>
              <li>Enter parcel receiver's phone number</li>
              <li>When the driver arrives, hand over the parcel</li>
              <li>Receiver acknowledges parcel delivery by entering the code that was sent earlier</li>
            </ol>
        </div>
      </div>
    <br/>
    <br/>
  </div>
  <div class="container-fluid">
  <div class="row row2">
      <h1 class="pos">Connecting Businesses and People</h1>
    </div>
    <div class="row row3">
      <div class="col-sm-6">
          <button type="button" class="btn btn-warning btn-lg btn1">Get in touch</button>
      </div>
      <div class="col-sm-6">
          <button type="button" class="btn btn-warning btn-lg btn2">Join Us</button>
      </div>
</div>
</div>
<div class="container">
    <div class="row row4">
        <div class="col-sm-8">
      <h1>BORDA ORDA</h1>
      <h2>All connections at the touch of a button.</h2>
      <br/>
      <ul class="ul1" style={{listStyleType:"none"}}>
          <li>RELIABLE</li>
          <p>
              With courier motorcycles located in every location in Nairobi & Uganda, we guarantee high satisfaction and reliability.
          </p>
          <li>SAFETY</li>
          <p>
              Your goods are safe with us, we insure and guarantee your goods will be delivered intact.
          </p>
          <li>SAVE TIME</li>
          <p>
              Get your goods delivered accross the city with-in 30minutes and track the package on your smart-phone. You and the recepient will be notified of the packages progress in real time too!
          </p>
          <li>IMPROVE LIVES</li>
          <p>
              By using our service you're giving business to the local transport industry.
          </p>
        </ul>
        </div>
      <div class="col-sm-4">
          <img class="img2" src={section1img} alt="Flowers in Chania"/>
      </div>
      </div>
</div>
        </div>
    )
}

export default Section1;
