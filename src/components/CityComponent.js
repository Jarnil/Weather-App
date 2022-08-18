import React from 'react'
import styled from 'styled-components'

const WeatherLogo = styled.img`
  width : 140px;
  height : 140px;
  margin : 25px auto;
`
const ChooseCityLabel = styled.span`
  color : black;
  font-size : 20px;
  font-weight : bold;
  margin : 10px auto; 
`
const SearchBox = styled.form`
  display : flex;
  flex-direction : row;
  border: black solid 1px;
  border-radius : 2px;
  color : black;
  font-size : ;
  font-weight : bold;
  margin : 20px auto; 
  & input {
    padding : 10px;
    font-size : 14px;
    border : mone;
    outline : none;
    font-weight : bold;
  }
  & button {
    padding : 10px;
    font-size : 14px;
    color : white;
    background : black;
    cursor : pointer;
    border : mone;
    outline : none;
    font-weight : bold;
  }
`
export const CityComponent = (props) => {
  const {setCity , fetchWeather} = props;
  return (
    <>
      <WeatherLogo src='/icons/perfect-day.svg' />
      <ChooseCityLabel>Find Weather of your city!</ChooseCityLabel>
      <SearchBox onSubmit={fetchWeather}>
        <input placeholder='City' onChange={(event) => setCity(event.target.value)} />
        <button type="submit">Search</button>
      </SearchBox>
    </>
  )
}
 