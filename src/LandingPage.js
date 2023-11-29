// Import necessary libraries
import React, { useEffect,useState } from 'react';
import simg1 from './images/s-img-1.jpg'
import simg2 from './images/s-img-2.jpg'
import simg3 from './images/s-img-3.jpg'
import simg4 from './images/s-img-4.jpg'
import simg5 from './images/s-img-5.jpg'
import simg6 from './images/s-img-6.jpg'
import burg from './images/home-img.png'

import s1 from './images/s-1.png'
import s2 from './images/s-2.png'
import s3 from './images/s-3.png'
import s4 from './images/s-4.png'
import s5 from './images/s-5.png'
import s6 from './images/s-6.png'

import step1 from './images/step-1.jpg'
import step2 from './images/step-2.jpg'
import step3 from './images/step-3.jpg'
import step4 from './images/step-4.jpg'

import pic1 from './images/pic1.png'
import pic2 from './images/pic2.png'
import pic3 from './images/pic3.png'

// Import CSS files
import 'bootstrap/dist/css/bootstrap.min.css';
// import './assets/css/style.css';
import './Style.css'
const LandingPage = () => {
    useEffect(() => {
        const myFunction = (event) => {
          const myDropdown = document.getElementById("myDropdown");
          myDropdown.classList.toggle("show");
    
          const element = document.querySelector(".fas");
          if (element.classList.contains('fa-rotate-180')) {
            element.classList.remove('fa-rotate-180');
          } else {
            element.classList.add('fa-rotate-180');
          }
        };
    
        const windowClickHandler = (event) => {
          if (!event.target.matches('.dropbtn')) {
            const dropdowns = document.getElementsByClassName("dropdown-content");
            for (let i = 0; i < dropdowns.length; i++) {
              const openDropdown = dropdowns[i];
              if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
              }
            }
          }
        };
    
        window.addEventListener('click', windowClickHandler);
    
        return () => {
          window.removeEventListener('click', windowClickHandler);
        };
      }, []);
  return (
    <div>
      {/* Header */}
      <header>
        <div class="llogo">
            <a href="#" class="logo"><i class="fas fa-utensils"></i>food</a>
        </div>
        <div id="menu-bar" class="fas fa-bars">
        </div>
        <div class="navbar-right">
            <a href='/Addreciept'>Add Reciept</a>
            <a href='/login'>Login</a>
            <a href='/Signup'>Sign Up</a>
        </div>

    </header>

      {/* Menu bar click handler */}
      <script>
        {`
          document.addEventListener('DOMContentLoaded', () => {
            const menuBar = document.getElementById('menu-bar');
            menuBar.addEventListener('click', () => {
              const navbarRight = document.querySelector('.navbar-right');
              navbarRight.classList.toggle('show');
              console.log('script execute');
            });
          });
        `}
      </script>

      {/* Home section */}
      <section class="home" id="home">

<div class="content">
    <h4><b>DISTRICT FOOD ZONE</b></h4>
    <p>Explore The Food You LOVE <br/>
        There's no sincerer love than the love of the food</p>
    <a href="#" class="btnh"><b>EXPLORE NOW</b></a>
</div>

<div class="image" id='burg-img'>
    <img src={burg}  alt=""/>
</div>

</section>

      {/* Order Now section */}
      <section class="speciality" id="speciality">

        <h1 class="heading"><b><span>ORDER</span> NOW</b> </h1>

        <div class="box-container">

            <div class="box">
                <img class="image" src={simg1} alt=""/>
                <div class="content">
                    <img src={s1} alt=""/>
                    <h3>Classic Burger</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src={simg2} alt=""/>
                <div class="content">
                    <img src={s2} alt=""/>
                    <h3>Pizza Mania</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
            </div>
            <div class="box">
                <img class="image" src={simg3} alt=""/>
                <div class="content">
                    <img src={s3} alt=""/>
                    <h3>Scoopy Spoon</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
            </div>
            <div class="box">
                <img class="image"  src={simg4} alt=""/>
                <div class="content">
                    <img src={s4} alt=""/>
                    <h3>Exotic Drinks</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
            </div>
            <div class="box">
                <img class="image"  src={simg5} alt=""/>
                <div class="content">
                    <img src={s5} alt=""/>
                    <h3>Trendy Sweets</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
            </div>
            <div class="box">
                <img class="image"  src={simg6} alt=""/>
                <div class="content">
                    <img src={s6} alt=""/>
                    <h3>Healthy Morning</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda inventore neque amet ipsa
                        tenetur voluptates aperiam tempore libero labore aut.</p>
                </div>
            </div>

        </div>

    </section>

      {/* Middle section */}
      <section className="middle">
      <div class="sec-2">
      <h1 class="heading">Our<span> Collection</span></h1>
      <div class="explore">
                <h4>
                    Explore curated lists of top restaurants, cafes, pubs, and bars in Delhi, based on trends
                </h4>
                <span>All collections in Delhi NCR &nbsp;<i class="fas fa-caret-right"></i></span>
            </div>
            <div class="sec-3">
            <div class="box-1">
                <div><span>Newly Opened<br/> 17 places </span><i class="fas fa-caret-right"></i></div>
                <img
                    src="https://images.adsttc.com/media/images/6213/6121/b0be/7001/64e1/45ef/newsletter/ts-motherbkk-03.jpg?1645437241"/>
            </div>
            <div class="box-1">
                <div><span>Trending This Week<br/> 30 places </span><i class="fas fa-caret-right"></i></div>
                <img src="https://www.wallacecollection.org/media/images/The_Wallace_Waldorf_salad_herb_and_yoghurt_dr.width-2000.jpg"
                    height="200" />
            </div>
            <div class="box-1">
                <div><span>Best of Delhi NCR<br/> 155 places </span><i class="fas fa-caret-right"></i></div>
                <img src="https://b.zmtcdn.com/data/pictures/1/18349771/3ccd922ce13419c0727fe653cad1b703.jpg?fit=around|318.75:231.25&crop=318.75:231.25;*,*"
                    height="200" />
            </div>
            <div class="box-1">
                <div><span>Great Cafes<br/> 30 places </span><i class="fas fa-caret-right"></i></div>
                <img src="https://d4t7t8y8xqo0t.cloudfront.net/resized/750X436/eazytrendz%2F2928%2Ftrend20200901144420.jpg"
                    height="200" />
            </div>
        </div>
      </div>
        
      </section>

      {/* Steps section */}
      <div class="step-container">

    <h1 class="heading">how it <span>works</span></h1>

    <section class="steps">

        <div class="box">
            <img src={step1} alt=""/>
            <h5>choose your favorite food</h5>
        </div>
        <div class="box">
            <img src={step2} alt=""/>
            <h5>free and fast delivery</h5>
        </div>
        <div class="box">
            <img src={step3} alt=""/>
            <h5>easy payments methods</h5>
        </div>
        <div class="box">
            <img src={step4} alt=""/>
            <h5>and finally, enjoy your food</h5>
        </div>
    
    </section>

</div>

      {/* Review section */}
      <section class="review">

<h1 class="heading"> <b/>our customers <span>reviews
    <b/> </span> </h1>

<div class="box-container">

    <div class="box">
        <img src={pic1} alt=""/>
        <h3>john deo</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod
            ratione vel laboriosam? Est, maxime rem. Itaque.</p>
    </div>
    <div class="box">
        <img src={pic2} alt=""/>
        <h3>john deo</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod
            ratione vel laboriosam? Est, maxime rem. Itaque.</p>
    </div>
    <div class="box">
        <img src={pic3} alt=""/>
        <h3>john deo</h3>
        <div class="stars">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="far fa-star"></i>
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti delectus, ducimus facere quod
            ratione vel laboriosam? Est, maxime rem. Itaque.</p>
    </div>

</div>

</section>

      {/* Footer section */}
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

      {/* Dropdown script */}
     
    </div>
  );
};

export default LandingPage;
