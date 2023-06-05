import React from "react"
import "animate.css"
import { Swiper, SwiperSlide } from "swiper/react"

import "swiper/css"
import "swiper/css/navigation"
import "./index.scss"
import MovieBookingUrl from "../../assets/images/booking_movie.png"
import airBnb from "../../assets/images/airbnb.png"

import { Pagination, Navigation } from "swiper"

export default function Projects() {
  const projects = [
    {
      title: "Movie Booking Ticket Website",
      description:
        "A website offers a convenient solution to book movie tickets, making entertainment accessible on-the-go.",
      imgUrl: MovieBookingUrl,
      deployLink:
        "https://bc40-capstone-movie-nhom4-bsjen51lx-mdang2k.vercel.app/homepage",
      gitLink: "https://gitlab.com/minhdangdoan525/bc40_capstone_movie_nhom4",
    },
    {
      title: "Vacation Homes Rental Website",
      description:
        "This application can lets property owners rent out their spaces to travelers looking for a place to stay. Travelers can rent a space for multiple people to share, a shared space with private rooms, or the entire property for themselves.",
      imgUrl: airBnb,
      deployLink: "https://nhom-9-airbnb.surge.sh/",
      gitLink: "https://gitlab.com/huynhhuethom2005/capstone-airbnb",
    },
  ]
  return (
    <div className="container works-page">
      <h1>My Works</h1>
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {projects.map((item) => {
          return (
            <SwiperSlide>
              <img src={item.imgUrl} alt="project img" />
              <div className="middle">
                <h2>{item.title}</h2>
                <p>{item.description}</p>
                <a href={item.deployLink}>Link to Website</a>
                <br />
                <a href={item.gitLink}>Link to source</a>
              </div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}
