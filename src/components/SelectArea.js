import data from "../data/area";
import { useState, useMemo } from "react";

export default function SelectArea() {
  // let countries = Object.keys(data); // key ['서울시', '안양시', '수원시']
  // let city = data["서울"]; // value

  const [currentCountry, setCurrentCountry] = useState("서울");
  const [currentCity, setCurrentCity] = useState(data[currentCountry][0]);

  // const countries = Object.keys(data);
  // const cities = data[currentCountry];
  const countries = useMemo(() => Object.keys(data), []);
  const cities = useMemo(() => data[currentCountry], [currentCountry]);

  console.log(currentCountry);
  console.log(currentCity);
  // function pushValue(countriesArray, selectTag) {
  //   //data를 순회한 후 data를 담은 option을 select에 추가
  //   countriesArray.forEach((element) => {
  //     let optionTag = document.createElement("option");
  //     optionTag.value = element; //option태그에 value="data" 를 추가
  //     optionTag.innerHTML = element; //option태그 안에 data를 추가
  //     selectTag.add(optionTag); //select태그에 option태그를 추가
  //   });
  // }
  // function callSelect() {
  //   selectId2.innerHTML = ""; //2번째 select박스를 비움 초기값 강남구
  //   console.log("selectId1.value ", selectId1.value);
  //   let getCity = data[selectId1.value];
  //   console.log("getCity", getCity);
  //   //selectId1의value 서울시 안양시 수원시를 받아와서 data랑 매칭
  //   pushValue(getCity, selectId2); //getCity 를 두번째 select에 option으로 추가
  // }

  // pushValue(countries, selectId1); //slectId1은 select태그전체
  // pushValue(city, selectId2);
  const onChange = (e) => {
    const currentCountry = e.target.value;
    setCurrentCountry(currentCountry);
    setCurrentCity(data[currentCountry][0]);
  };
  const onChange2 = (e) => {
    setCurrentCity(e.target.value);
  };

  return (
    <>
      <select
        name="selectId1"
        id="selectId1"
        onChange={onChange}
        value={currentCountry}
        style={{ padding: "5px", border: "none", outline: "none" }}
      >
        {countries.map((country, index) => (
          <option key={index} value={country}>
            {country}
          </option>
        ))}
      </select>
      <select
        name="selectId2"
        id="selectId2"
        value={currentCity}
        onChange={onChange2}
        style={{ padding: "5px", border: "none", outline: "none" }}
      >
        {cities.map((city, index) => (
          <option key={index} value={city}>
            {city}
          </option>
        ))}
      </select>
    </>
  );
}
