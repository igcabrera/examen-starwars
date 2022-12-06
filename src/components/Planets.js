import React from 'react'
import { useState } from "react"
import { Card, Grid } from 'semantic-ui-react'

export default function Planets({ data }) {

    const [planetas, setNombrePlanetas] = useState("");
    const capturaInput = (e) => {
        setNombrePlanetas(e.target.value)
    }

    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    
    const filtered = !search ? data :
        data.filter((planetas) =>
        planetas.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>

        <Grid className='input-container' columns={1}>
            <input onChange={(e) => setNewSearch(e.target.value)}  id="buscador" name="buscador" type="search" placeholder="Buscar Planeta por Nombre"/>
        </Grid>
        <h1>Planetas</h1>
        <Grid columns={3}>
            {filtered.sort((a, b) => a.name > b.name ? 1 : -1,).map((planets, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{planets.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{planets.climate}</span>
                                </Card.Meta>
                                <Card.Description>
                                Gravedad:  <b>{planets.gravity} cm.</b> <br />
                                Terreno: <b>{planets.terrain}</b> <br />
                                Población: <b>{planets.population}</b>
                                </Card.Description>
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                );
            })}
        </Grid>
    </div>
  );
}
