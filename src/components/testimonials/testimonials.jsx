import React from 'react'
import './testimonials.css'
import AVTR1 from '../../assets/avatar1.jpg'
import AVTR2 from '../../assets/avatar2.jpg' 
import AVTR3 from '../../assets/avatar3.jpg' 
import AVTR4 from '../../assets/avatar4.jpg'
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

const data = [{

  avatar: AVTR1,
  name: "Tina Snow",
  review: "Modi alias animi dolorem aliquam ea eum beatae maiores, cons blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur labe deserunt explicabo nostrum ducimus quasi?" },
  {
  avatar: AVTR2,
  name: 'Shatta Wale',
  review: "Modi alias animi dolorem aliquam ea eum beatae maiores, com blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur la deserunt explicabo nostrum ducimus quasi?"
  
  }
  ,
  { avatar: AVTR3,
  name: 'Kwame Despite',
  review:"Modi alias animi dolorem aliquam ea eum beatae maiores, co blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatur"},
{
  avatar: AVTR4,
  
  name: 'Nana Ama McBrown',
  
  review: "Modi alias animi dolorem aliquam ea eum beatae maiores, blanditiis consequatur qui molestiae. Dolorem, perspiciatis aspernatu deserunt explicabo nostrum ducimus quasi?"}]

const Testimonials = () => {
  return (

  <section id='testimonials'>

    <h5> Review from clients</h5>
    <h2> Testimonials</h2>
    <Swiper className="container testimonials_container"
     modules={[Pagination]}
     spaceBetween={40}
     slidesPerView={1}
     pagination={{ clickable: true }}>
     
    
     {
       data.map(({avatar,name,review},index)=>{
         return(
          <SwiperSlide key={index} className="testimonial">
          <div className="client_avatar">
            <img src={avatar}/>
            
            </div>
              <h5 className='client_name'>{name}</h5>
            <small classNames='client_review'>
             {review}
            </small>
        </SwiperSlide>
          
       
        
         )
       })
     }
    </Swiper>
  </section>
  )
  }
  export default Testimonials







