import React, { useState, useEffect } from 'react';
import People from './People';
import Planets from './Planets';
import imglogo from '../assets/img/logo-starwars.png'

export default function MiApi() {

    const [people, setPeople] = useState([]);
    const [planets, setPlanets] = useState([]);

  useEffect(() => {
    async function fetchPeople() {
      let res = await fetch('https://swapi.dev/api/people/?format=json');
      let data = await res.json();
      setPeople(data.results);
    }
      async function fetchPlanets() {
        let res = await fetch('https://swapi.dev/api/planets/?format=json');
        let data = await res.json();
        setPlanets(data.results);
      }

      fetchPeople();
      fetchPlanets();
    }, [])

  return (
    <div>
        <img src={imglogo} className="ui centered medium image" />
        <br />
        <People data={people} />
        <br />
        <hr />
        <br />
        <Planets data={planets} />
    </div>
  )
}
