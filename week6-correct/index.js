function App() {
  data = [
    { title: "The Mandalorian", img: 'images/mando.jpg', desc: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic." },
    { title: "Spider - Man", img: 'images/spidey.jpg', desc: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider- Man." },
    { title: "Star Wars", img: 'images/star_wars.jpg', desc: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire." },
    { title: "Doctor Strange", img: 'images/doctor.jpg', desc: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary." },
    { title: "Apollo 13", img: 'images/apollo_13.jpg', desc: "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy." },
    { title: "Toy Story", img: 'images/toy_story.jpg', desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." },
    { title: "Princess Bride", img: 'images/toy_story.jpg', desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." },
  ]
  
  let movies = data.map(movie_data => <Movie title={movie_data.title} img={movie_data.img} desc={movie_data.desc}/>)

  return (
    <div>
      {movies}
    </div>
  )
}

function Movie(props) {
  
  return (      
    <article>
      <h2>{props.title}</h2>
      
      <img src={props.img}/> 
      {/* add '/' for self closing */}
      <p>
        {props.desc}
      </p>
  
      <div className="actions">
        <a className="details" href="#">See Details</a> 
        {/* class change to className */}
        <LikeButton counter="0"/>
      </div>
    </article>
    )
}

class LikeButton extends React.Component{
  constructor(props) {
    super(props)
    this.state = { counter: 0 }
  }

  handleClick = (event) =>{
    console.log(event)
    this.setState({ counter: this.state.counter + 1 } ) //react will automatically refresh UI when changing the state
  }

  render() {
    return (<a onClick={this.handleClick} className="like">&hearts; <span>{this.state.counter}</span></a>)
  }
}






// -----------------------------------------------
// CODE FROM WEEK 5 WITHOUT REACT
// -----------------------------------------------

// data = [
//   { title: "The Mandalorian", img: 'images/mando.jpg', desc: "The travels of a lone bounty hunter in the outer reaches of the galaxy, far from the authority of the New Republic." },
//   { title: "Spider - Man", img: 'images/spidey.jpg', desc: "Peter Parker is unmasked and no longer able to separate his normal life from the high-stakes of being a super-hero.When he asks for help from Doctor Strange the stakes become even more dangerous, forcing him to discover what it truly means to be Spider- Man." },
//   { title: "Star Wars", img: 'images/star_wars.jpg', desc: "Princess Leia is captured and held hostage by the evil Imperial forces in their effort to take over the galactic Empire. Venturesome Luke Skywalker and dashing captain Han Solo team together with the loveable robot duo R2-D2 and C-3PO to rescue the beautiful princess and restore peace and justice in the Empire." },
//   { title: "Doctor Strange", img: 'images/doctor.jpg', desc: "Doctor Strange, with the help of mystical allies both old and new, traverses the mind-bending and dangerous alternate realities of the Multiverse to confront a mysterious new adversary." },
//   { title: "Apollo 13", img: 'images/apollo_13.jpg', desc: "NASA must devise a strategy to return Apollo 13 to Earth safely after the spacecraft undergoes massive internal damage putting the lives of the three astronauts on board in jeopardy." },
//   { title: "Toy Story", img: 'images/toy_story.jpg', desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." },
//   { title: "Princess Bride", img: 'images/toy_story.jpg', desc: "A cowboy doll is profoundly threatened and jealous when a new spaceman figure supplants him as top toy in a boy's room." },
// ]

// class Movie {
//   constructor(movie_data) {
//     this.title = movie_data.title
//     this.image_source = movie_data.img
//     this.description = movie_data.desc
//   }

//   render(container_element) {
//     const movieContent = document.querySelector("#movie-template").content
//     let newMovieElement = movieContent.cloneNode(true)
//     newMovieElement.querySelector('h2').textContent = this.title
//     newMovieElement.querySelector('img').src = this.image_source
//     newMovieElement.querySelector('p').textContent = this.description
//     container_element.appendChild(newMovieElement)
//   }
// }

// const renderMovies = function () {
//   const app = document.querySelector("#app")
//   data.forEach( (movie_data) => {
//     let newMovie = new Movie(movie_data)
//     newMovie.render(app)
//   })
// }

// document.addEventListener("DOMContentLoaded", renderMovies)

