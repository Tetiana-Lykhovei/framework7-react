import React from "react";
import {
  Page,
  Navbar,
  Block,
  BlockTitle,
  useStore,
  List,
  ListItem,
  Card,
  Treeview,
  TreeviewItem,
  Icon,
  MessagesTitle,
} from "framework7-react";

const AboutPage = (props) => {
  const countryId = props.f7route.url.split("/")[2];
  const countries = useStore("countries");

  console.log(countryId);

  let currentCountry;
  countries.forEach(function (country) {
    if (country.fifa === countryId) {
      currentCountry = country;
    }
  });

  console.log(currentCountry);

  return (
    <Page>
      <Navbar title={currentCountry.name.official} backLink="Back" />
      <div style={{ display: "flex" }}>
        <Card title="State Flag">
          <img
            src={currentCountry.flags.png}
            alt={currentCountry.capital}
            width="150px"
          />
        </Card>
        <Card title="Coat of Arms">
          <img
            src={currentCountry.coatOfArms.png}
            alt={currentCountry.capital}
            width="150px"
          />
        </Card>
      </div>
      <MessagesTitle style={{ fontSize: "24px" }}>
        <b style={{ color: "black" }}>Capital: {currentCountry.capital}</b>
      </MessagesTitle>
      <Block>
        <List>
          <ListItem
            title="Continent"
            after={currentCountry.continents[0]}
          ></ListItem>{" "}
          <ListItem title="Region" after={currentCountry.region}></ListItem>
          <ListItem
            title="Subegion"
            after={currentCountry.subregion}
          ></ListItem>
          <ListItem title="Total Area" after={currentCountry.area}></ListItem>
          <ListItem
            title="Population"
            after={currentCountry.population}
          ></ListItem>
          <ListItem
            title="Start of week"
            after={currentCountry.startOfWeek}
          ></ListItem>
        </List>
      </Block>
    </Page>
  );
};

export default AboutPage;
