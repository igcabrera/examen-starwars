import React from 'react'
import { useState } from "react"
import { Card, Grid } from 'semantic-ui-react'

export default function People({ data }) {

    const [personaje, setNombrePersonaje] = useState("");
    
    const capturaInput = (e) => {
        setNombrePersonaje(e.target.value)
    }

    const [search, setNewSearch] = useState("");
    const handleSearchChange = (e) => {
        setNewSearch(e.target.value);
    };
    
    const filtered = !search ? data :
        data.filter((personaje) =>
        personaje.name.toLowerCase().includes(search.toLowerCase())
    );

  return (
    <div>
        <Grid className='input-container' columns={1}>
            <input onChange={(e) => setNewSearch(e.target.value)}  id="buscador" name="buscador" type="search" placeholder="Buscar Personaje por Nombre"/>
        </Grid>
        <h1>Personajes</h1>
        <Grid columns={3}>
            {
                filtered.sort((a, b) => a.name > b.name ? 1 : -1,).map((people, i) => {
                return (
                    <Grid.Column key={i}>
                        <Card>
                            <Card.Content>
                                <Card.Header>{people.name}</Card.Header>
                                <Card.Meta>
                                    <span className='date'>{people.gender}</span>
                                </Card.Meta>
                                <Card.Description>
                                    Altura:  <b>{people.height} cm.</b> <br />
                                    Color de Pelo: <b>{people.hair_color}</b> <br />
                                    Color de Ojos: <b>{people.eye_color}</b>
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
