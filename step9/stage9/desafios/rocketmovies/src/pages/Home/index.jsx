import { useEffect, useState } from "react";

import { Link } from 'react-router-dom'

import { Container, Content, MoviesNotes } from "./styles";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { MovieNote } from "../../components/MovieNote";

import { FiPlus } from 'react-icons/fi'

const results = [
  {
    title: 'Interestellar',
    description: 'FONTE ROBOTO Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
    rating: 5,
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },{
    title: 'Interestellar',
    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
    rating: 5,
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
    rating: 5,
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
    rating: 5,
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    description: 'Pragas nas colheitas fizeram a civilização humana regredir para uma sociedade agrária em futuro de data desconhecida. Cooper, ex-piloto da NASA, tem uma fazenda com sua família. Murphy, a filha de dez anos de Cooper, acredita que seu quarto está assombrado por um fantasma que tenta se comunicar com ela.',
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  },
  {
    title: 'Interestellar',
    tags: [
      {id: 1, name: 'spacial'},
      {id: 2, name: 'ficção'}
    ]
  }
]

export function Home() {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    let URL = 'http://localhost:9999/movies/b9a55585-5ec8-4faf-9d25-924e1cb3f8a3';
    // URL = 'http://localhost:9999/movies?user_id=a1d1f5e0-c0d3-4c5e-be47-0ee9d577b106&title=a&tags=anima%C3%A7%C3%A3o'
    // URL = 'http://localhost:9999/movies?user_id=b9a55585-5ec8-4faf-9d25-924e1cb3f8a3&title=a'

    fetch(URL)
    .then(resolve => resolve.json())
    .then(response => setMovies(response.results))
    .catch((err) => console.log(err))
  }, [])

  console.log(movies)

  return(
    <Container>

      <Header />

      <main>
        <Content>
          <div className="container">
            <Link to={'/new'} title={'Adiconar nova nota'}>
              <FiPlus />
                Adicionar filme
            </Link>
            <Section title={'Meus filmes'}>

              <MoviesNotes>
                {
                  movies && movies.map(movie => {
                    return(
                      <MovieNote data={movie} key={movie.id} />
                    )
                  })
                }
              </MoviesNotes>
            </Section>
          </div>
        </Content>
      </main>
    </Container>
  );
}