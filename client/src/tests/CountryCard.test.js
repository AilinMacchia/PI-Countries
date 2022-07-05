import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import isReact from "is-react";
import * as data from "./db.json";
import CountryCard from "../components/countryCard/index.jsx";


configure({ adapter: new Adapter() });

describe("<CountryCard />", () => {
  let countryCard;
  let country1 = data.countries[0];
  let country2 = data.countries[1];
  let country3 = data.countries[2];


  beforeEach(() => {
    gameCard = (country) =>
      shallow(
        <GameCard
            key={country.id}
            id={country.id}
            name={country.name}
            image={country.image}
            genres={country.genres}
        />
      );
    expect(isReact.classComponent(CountryCard)).toBeFalsy();
  });

  it('Should render an "img" tag y use as source the image of the country', () => {
    expect(countryCard(country1).find("img").at(0).prop("src")).toEqual(
        country1.image
    );
    expect(countryCard(country2).find("img").at(0).prop("src")).toEqual(
      country2.image
    );
    expect(countryCard(country3).find("img").at(0).prop("src")).toEqual(
        country3.image
    );
  });

  it('Should render an "h2" with the country name', () => {
    expect(countryCard(country1).find("h2").at(0).text()).toBe(country1.name);
    expect(countryCard(country2).find("h2").at(0).text()).toBe(country2.name);
    expect(countryCard(country3).find("h2").at(0).text()).toBe(country3.name);
  });

  it('Should render an "h4" with the country continent', () => {
    expect(countryCard(country1).find("h4").at(0).text()).toBe(country1.continent);
    expect(countryCard(country2).find("h4").at(0).text()).toBe(country2.continent);
    expect(countryCard(country3).find("h4").at(0).text()).toBe(country3.continent);
  });

});