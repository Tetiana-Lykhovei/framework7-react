import React, { useState, useEffect } from "react";
import "../css/app.css";
import {
  Page,
  Navbar,
  Searchbar,
  Subnavbar,
  theme,
  List,
  ListItem,
  useStore,
  MessagesTitle,
  Message,
} from "framework7-react";

import travel from "../assets/travel.png";

const CountriesList = () => {
  const countries = useStore("countries");
  const loading = useStore("loading");
  console.log(countries);
  console.log(loading);

  return (
    <Page name="List of countries">
      <Navbar title="List of countries"></Navbar>

      {loading ? (
        <>
          <MessagesTitle style={{ fontSize: "24px", marginTop: "50px" }}>
            <b>Loading</b> ...
          </MessagesTitle>

          <div className="loader">
            <img
              src={travel}
              width="400"
              height="400"
              className="lazy lazy-fadeIn demo-lazy "
            />
          </div>
        </>
      ) : (
        <>
          <Searchbar
            searchContainer=".search-list"
            searchIn=".item-title"
            disableButton={!theme.aurora}
          />
          {countries.map((country) => {
            const { flags, name, capital, nativeName, fifa } = country;

            return (
              <>
                {" "}
                <List className="searchbar-not-found">
                  <ListItem title="Nothing found" />
                </List>
                <List className="search-list searchbar-found">
                  <ListItem
                    key={nativeName}
                    link={"/about/" + `${fifa}`}
                    title={name.common}
                  >
                    <img src={flags.png} alt={capital} width="150px" />
                  </ListItem>{" "}
                </List>
              </>
            );
          })}
        </>
      )}
    </Page>
  );
};

export default CountriesList;
