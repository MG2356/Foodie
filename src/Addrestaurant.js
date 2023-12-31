import React from 'react'
import './Style.css'
function Navbar() {
    return (
      <div className="navbar-reg">
        <div>
          <a href="/"><img className="logo-reg" src="/img/wellnes (1).svg" alt="logo" /></a>
        </div>
        <div className="login-icon">
          <a href="#"><i className="fas fa-circle-user fa-2x"></i></a><a href="#"> UserName</a>
        </div>
      </div>
    );
  }

  function RestaurantDetails() {
    return (
      <form action="/addPage/registerPage.html">
        {/* Rest of your form elements */}

        <div id="rest-name-div" class="name-address">
                    <h2>Restaurant Details</h2>
                    <h3>Name and Address</h3>
                    <input type="text" name="restaurant_name" placeholder="Restaurant Name" required />
                    <input type="text" name="restaurant_address" placeholder="Restaurant Address" required/>
                    <br/><br/>
                    <h4>Please place the pin accurately at your outlets's location on the map</h4>
                    <h3 class="help-customer">This will help your customers and MH-22 Food Zone riders to locate your
                        store</h3>


                    <div id="latmoved"></div>
                    <div id="longmoved"></div>

                    <div >
                        <div id="map"></div>
                    </div>

                    <h3 class="latitude" >or
                        directly enter the co-ordinates</h3>
                    <input id="latclicked" type="text" name="latitude" placeholder="Latitude" required></input>
                    <input id="longclicked" type="text" name="longitude" placeholder="Longitude" required></input>
                    <script src="script.js"></script>
                    <script
                        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDpX4Zg3qgGKzX6lxSkNa3sSokIrgdAzMs&callback=initMap"
                        async defer></script>

                    <div class="contact-no">
                        <h2>Contact number at restaurant</h2>
                        <h3>Your customers will call on this number for general enquiries</h3>
                        <input type="number" id="restaurant-no" name="restaurant-no"
                            placeholder="Mobile number at restaurant" required />

                        <h3 class="latitude landline" >or
                            if you have a landline number </h3>
                        <input type="number" id="restaurant-landline-no" name="restaurant-landline-no"
                            placeholder="STD Code  |  Landline number"/>
                    </div>

                    <div class="restaurant-owner">
                        <h2>Restaurant owner details</h2>
                        <h3>These will be used to share revenue related communications</h3>
                        <input type="number" id="restaurant-owner-no" name="restaurant-owner-no"
                            placeholder="Mobile number of owner" required/>

                        <input type="checkbox" id="restaurant-owner-no" name="restaurant-owner-no"
                            placeholder="Mobile number of owner" required/><span> Yes, I would like to receive important
                            updates and notifications on my WhatsApp <i 
                                class="fab fa-whatsapp-square"></i></span>

                        <div class="owner-no">
                            <input type="text" id="restaurant-owner-fullname" name="restaurant-owner-fullname"
                                placeholder="Restaurant owner full name" required/>

                            <input type="email" id="restaurant-owner-email-id" name="restaurant-owner-email-id"
                                placeholder="Restaurant owner email address" required/>
                        </div>
                    </div>
                    <button class="create-btn-2" type="submit">SUBMIT</button>
                </div>


      </form>
    );
  }


  function OutletTypeAndTimings() {
    return (
        <>
      <form action="/addPage/registerPage.html">
        {/* Rest of your form elements */}
        <div id="rest-type-div" class="rest-type">
                    <h2>Establishment type</h2>
                    <h3>Select most relevant category for your restaurant type</h3>

                    <input type="radio" name="est-type" id="both" value="both"/><label for="both">
                        <h2 >Both, delivery and dine-in
                            available</h2>
                        <h3 >Select when you have a place for customers to dine-in and want
                            to activate online ordering for your restaurant</h3>
                    </label><br/>
                    <input type="radio" name="est-type" id="dine-in" value="dine-in"/><label for="dine-in">
                        <h2 >Dine-in only</h2>
                        <h3 >Select when you dont want to activate online ordering for your
                            restaurant</h3>
                    </label><br/>

                    <input type="radio" name="est-type" id="delivery" value="delivery"/><label for="delivery">
                        <h2 >Delivery only</h2>
                        <h3 >Select when you want to activate online ordering for your
                            restaurant</h3>
                    </label><br/>

                    <h2 >Select options
                        which best describes your outlet</h2>

                    <div class="restaurant-checkbox">
                        <input type="checkbox" name="restaurant-type" id="sweet-mart" value="sweet-mart"/><label
                            for="sweet-mart">Sweet Mart</label>

                        <input type="checkbox" name="restaurant-type" id="udapi" value="udapi"/><label
                            for="udapi">Udapi</label>

                        <input type="checkbox" name="restaurant-type" id="hotel" value="hotel"/><label
                            for="hotel">Hotel</label>

                        <input type="checkbox" name="restaurant-type" id="dhaba" value="dhaba"/><label
                            for="dhaba">Dhaba</label>

                        <input type="checkbox" name="restaurant-type" id="bakery" value="Bakery"/><label
                            for="bakery">Bakery</label>

                        <input type="checkbox" name="restaurant-type" id="vegetable-shop" value="vegetable-shop"/><label
                            for="vegetable-shop">Vegetable Shop</label>

                        <input type="checkbox" name="restaurant-type" id="fast-food" value="fast-food"/><label
                            for="fast-food">Fast Food</label>

                        <input type="checkbox" name="restaurant-type" id="pure-veg" value="pure-veg"/><label
                            for="pure-veg">Pure-Veg Food Point</label>

                        <input type="checkbox" name="restaurant-type" id="non-veg" value="non-veg"/><label
                            for="non-veg">Non Veg Food Point</label>

                        <input type="checkbox" name="restaurant-type" id="juice-bars" value="juice-bars"/><label
                            for="juice-bars">Juice Bars</label>
                    </div>

                    <h2 >Resturant operational hours</h2>
                    <h3>Mark opening and closing hours of restaurant</h3>

                    <h3 >Timing</h3>
                    <div class="timing">
                        <input type="time" name="operational-hours" id="open"/><span>TO</span>
                        <input type="time" name="operational-hours" id="close"/><br/>
                    </div>
                    <button class="create-btn-2" type="submit">SUBMIT</button>
                </div>


      </form>
      </>
    );
  }

  function Menu() {
    return (
        <>
      <form action="/addPage/registerPage.html">
        {/* Rest of your form elements */}
                <div class="rest-type">

                    <div class="Menu-checkbox">
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <input type="Checkbox" name="Biryani" value="any_value"/>Biryani
                        <br/>

                        <button class="create-btn-2" type="submit">SUBMIT</button>
                    </div>
                    </div>
            </form>

            </>
    );
  }
  
  function UploadPhotos() {
    return (
        <>
        <h2 >Attach photos of your dishes
        </h2>
        {/* Rest of your form elements */}
        <form>
            <div class="rest-type">
                <div class="file">
                    <label for="myFile">Upload images of your dishes <br/>
                        <i class="fas fa-camera fa-2x"></i>
                        <input type="file" id="myFile" name="filename" accept="image/png, image/jpeg"/>
                        <br/><span id="imageName"></span>
                        </label><br/>
                </div>
                <script src="./assets/javascript/script-1.js"></script>
                <button class="create-btn-2" type="submit">SUBMIT</button>
            </div>
      </form>
      </>
    );
  }






function Addrestaurant() {
  return (
<>

<div className="container">
      <div className="container-left">
        <h2>1. Create your restaurant page</h2>
        <div className="left-part">
          {/* Links and sections */}
        </div>
      </div>
      <div className="container-right">
        <h1 style={{ marginLeft: '20px' }}>Restaurant Information</h1>
        <RestaurantDetails />
        <h1 style={{ margin: '25px 0 0 20px' }}>Outlet Type & Timings</h1>
        <OutletTypeAndTimings />
        <h1 style={{ margin: '25px 0 0 20px' }}>Menu</h1>
        <Menu />
        <h1 style={{ margin: '25px 0 0 20px' }}>Upload Photos</h1>
        <UploadPhotos />
        
      </div>
    </div>



</>


    )
}

export default Addrestaurant