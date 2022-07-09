import React from "react";
import {
  Page,
  Navbar,
  NavLeft,
  NavTitle,
  NavTitleLarge,
  NavRight,
  Link,
  Toolbar,
  Block,
  BlockTitle,
  List,
  SwiperSlide,
  Row,
  Col,
  Button,
  Swiper,
  f7,
} from "framework7-react";

const HomePage = () => (
  <Page name="home">
    {/* Top Navbar */}
    <Navbar large sliding={false}>
      <NavLeft>
        <Link
          iconIos="f7:menu"
          iconAurora="f7:menu"
          iconMd="material:menu"
          panelOpen="left"
        />
      </NavLeft>
      <NavTitle sliding>Litava-dream</NavTitle>

      <NavTitleLarge
        style={{
          fontFamily: "cursive",
          color: "teal",
        }}
      >
        Discover the world
      </NavTitleLarge>
    </Navbar>

    <Swiper
      navigation
      scrollbar
      effect={"coverflow"}
      centeredSlides={true}
      slidesPerView={"auto"}
    >
      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://cdn.framework7.io/placeholder/nature-800x800-3.jpg)",
          height: "400px",
        }}
      />
      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://cdn.framework7.io/placeholder/people-500x500-4.jpg)",
          height: "400px",
        }}
      ></SwiperSlide>
      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://cdn.framework7.io/placeholder/nature-800x800-4.jpg)",
          height: "400px",
        }}
      />
      <SwiperSlide
        style={{
          backgroundImage:
            "url(https://cdn.framework7.io/placeholder/people-500x500-2.jpg)",
          height: "400px",
        }}
      ></SwiperSlide>
    </Swiper>
    <Block />

    <Block strong>
      <p
        style={{
          fontFamily: "cursive",
          fontWeight: "600",
          fontSize: "26px",
          color: "teal",
          display: "flex",
          justifyContent: "center",
        }}
      >
        The world is so beautiful...
      </p>
      <p
        style={{
          fontFamily: "cursive",
          fontWeight: "600",
          fontSize: "24px",
          color: "teal",
          display: "flex",
          justifyContent: "center",
        }}
      >
        Dare to know more!
      </p>
      <Button
        className="col"
        large
        fill
        raised
        href="/list/"
        onClick={() => {
          f7.store.dispatch("getCountries");
        }}
      >
        I want to discover!
      </Button>
    </Block>
  </Page>
);
export default HomePage;
