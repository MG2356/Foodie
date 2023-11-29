import React from 'react'
import document from './images/document.png'
import scooter from './images/scooter.png'
import food from './images/food.png'

function Addreciept() {
  return (
<>
<div class="register_restaurant">
        <h2 class="aheading">Register your Resturant on District Food Zone</h2>
        <h4>for Free and Get More Customers!</h4>
        <div class="register_btn">
            <a href='/Addrestaurant'><button class="btn btn-1"><b>Register your
                        restaurant</b></button></a>
            <a href='./login'><button class="btn btn-2" src="#"><b>Restaurant already listed? Login
                        now.</b></button></a>
        </div>
    </div>

    <div class="partner">
        <h1 class="heading_partner">Why should you partner with District Food?</h1>
        <h2 class="sub_partner">Food Zone enables you to get 60% more revenue, 10x new customers and boost your
            brand<br/>
            visibility by providing insights to improve your business.</h2>
    </div>


    <div class="cards-container" id="flavoursContainer">
        <div class="card">
            <i class='fas fa-globe-asia fa-3x' ></i>
            <div class="card-text">
                <h1>1000+ Cities</h1>
                <p>in India</p>
            </div>
        </div>
        <div class="card">
            <i class='fas fa-shop fa-3x' ></i>
            <div class="card-text">
                <h1>3 lakh+</h1>
                <p>restaurant listings</p>
            </div>
        </div>
        <div class="card">
            <i class='fas fa-calendar-check fa-3x' ></i>
            <div class="card-text">
                <h1>5.0 crore+</h1>
                <p>monthly orders</p>
            </div>
        </div>
    </div>
    <div class="steps">
        <div>
            <h1 class="How-text">How it works?</h1>
        </div>
        <div class="cards-container-2">
            <div class="card-2">
                <img class="doc" src={document}/>
                <div class="card-text-2">
                    <h1 class="card-text-all">Step 1</h1>
                    <h4 class="card-text-all">Create your page on Food Zone</h4>
                        <h3 class="card-text-all">Help users discover your place by creating a listing on Food Zone
                    </h3>
                </div>

            </div>
            <div class="card-2">
                <img class="sco" src={scooter}/>
                <div class="card-text-2">
                    <h1 class="card-text-all">Step 2</h1>
                    <h4 class="card-text-all">Register for online ordering</h4>
                        <h3 class="card-text-all">And deliver orders to millions of customers with ease
                    </h3>
                </div>
            </div>
            <div class="card-2">
                <img class="foo" src={food}/>
                <div class="card-text-2">
                    <h1 class="card-text-all">Step 3</h1>
                    <h4 class="card-text-all">Start receiving orders online</h4>
                        <h3 class="card-text-all">Manage orders on our partner app, web dashboard or API partners
                    </h3>
                </div>
            </div>
        </div>
    </div>



    

    <div class="geton-container">
        <div class="geton-text">
            <h1>What do you get on sign-up</h1>
            <h4>District Food Zone Partner Platform helps you take your business to new heights instantly with no hassle
                and
                100% transparency!</h4>
        </div>
    </div>

    <div class="geton">
        <div class="geton-container-left">
            <div class="geton-items-container">
                <div class="geton-item-gap">
                    <div class="geton-item">
                        <h1><i class="fas fa-1"></i> Restaurant Partner app</h1>
                        <h4>Manage all your orders on your smartphone with our Android app</h4>
                    </div>

                    <div class="geton-item">
                        <h1><i class="fas fa-2"></i> Restaurant Partner web dashboard</h1>
                        <h4>Manage all your orders on your desktop or laptop</h4>
                    </div>

                    <div class="geton-item">
                        <h1><i class="fas fa-3"></i> API integration</h1>
                        <h4>Manage all your orders on your existing Point of Sale (POS) or third party software</h4>
                    </div>
                </div>
            </div>
        </div>
        <div class="geton-container-right"></div>
        <div class="geton-right">
            <img class="phone-img"
                src="https://b.zmtcdn.com/merchant-onboarding/2b0ec3e91e16dfcae922f213fdf808f11600934847.png" alt=""/>
            <img class="laptop-img"
                src="https://b.zmtcdn.com/merchant-onboarding/a603975bb4aea5941c7c45bb3480be1c1600934866.png" alt=""/>
            <img class="laptop-img"
                src="https://b.zmtcdn.com/merchant-onboarding/e83523818f82dd8cefedf4e069424fae1600934891.png" alt=""/>
        </div>
    </div>

    <div class="jouney_card">
        <div class="products-card-3">
            <h1 class="journey">Start your journey with District Food Zone</h1>
            <h2 class="journey">Create your restaurant page and register for online ordering</h2>
            <a href="./restaurantregisterPage.html"><button class="create-btn-2">Start Now<i class='fas fa-angle-right'
                        ></i></button></a>
        </div>
    </div>
    <footer class="footer">
        <div class="fcontainer">
            <div class="frow">
                <div class="footer-col">
                    <h4>Company</h4>
                    <ul>
                        <li><a href="#">about us</a></li>
                        <li><a href="#"> our service</a></li>
                        <li><a href="#">privacy </a></li>
                        <li><a href="#">security</a></li>
                    </ul>

                </div>
                <div class="footer-col">
                    <h4>Get Help</h4>
                    <ul>
                        <li><a href="#">FAQ</a></li>
                        <li><a href="#">SHIPPING</a></li>
                        <li><a href="#">ORDER STATUS</a></li>
                        <li><a href="#">PAYMENT</a></li>
                    </ul>

                </div>
                <div class="footer-col">
                    <h4>Follow Us</h4>
                    <div class="social-links">
                        <a href="#"><i class="fab fa-facebook-f"></i></a>
                        <a href="#"><i class="fab fa-twitter"></i></a>
                        <a href="#"><i class="fab fa-instagram"></i></a>
                        <a href="#"><i class="fab fa-linkedin-in"></i></a>
                    </div>

                </div>

                {/* <!--COPYRIGHT--> */}


            </div>

            <hr/>
            <p class="copyright">
                 Foodie @ 2023
            </p>
            </div>
    </footer>
</>  )
}

export default Addreciept