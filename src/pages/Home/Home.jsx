import React from 'react'
import './styles.scss'
import Accordion from 'react-bootstrap/Accordion'
import Carousel from 'react-bootstrap/Carousel'
import { resumeData } from './fixture'
import { Link } from 'react-router-dom'

class Home extends React.Component {
  carouselItem = () => {
    let itemValue = []
    for (let i = 0; i < Object.keys(resumeData).length; i++) {
      itemValue.push(
        <Carousel.Item>
          <img
            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAACwCAMAAAABtJrwAAAAYFBMVEUAAAD///8BAAUBAAiRlKT/+/6Tlp///vf+//MAAwDz9/mdn63+/vX///wTFSv9/v2UmJycoKcSFiD6//0CAQ35//j3+va8v8aRk5uUmJmMj5MTGCATFiecn68AABTy9vjboR8mAAACc0lEQVR4nO3T3W6bQBQA4d2lQOtCjxPsJHZ/8v5vWRY7rWPcqdRcNBfzIS0CVgiNDqkf2zzt+5OhXxvOt4c/bfjLs6s3vGkD+ffve7WrnsYqInLOqY92M+1jkdv5qEv7suT10r7zDW9/e15axDSd+2TdNg9QeojHp8NhW3VabM+Om8hpirukm3abiDTlu1RK05S6qCqLptzXPuPSp5S5V9HJMj0l3W/yaJ8baoqlT7z0+a//+fvUvOpjoWtN+bqJ/tQn2Wel9pmGFPlz+uT8rDXp2ybPfca5T2OflSZ9sQ+wD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPsw+zD7MPW/r0Kdc+1rlWym7uE+c+zs/Kqc/+3KfY59qvPt/tc8tln10x0KU5R7noo5t+PM99Ih6PT92267oPOuuq7eEYOdIYkbV2qhKp7x8ij301fFQ19LVHDRRjGhe5na9a/baM0Dj+BIj/cH7jq9QZAAAAAElFTkSuQmCC"
            alt={Object.keys(resumeData)[i]}
          />
          <Carousel.Caption>
            <h3>{Object.keys(resumeData)[i]}</h3>
            <p>{Object.entries(resumeData)[i]}</p>
          </Carousel.Caption>
        </Carousel.Item>
      )
    }
    return itemValue
  }
  carouselBlock = () => {
    return (
      <>
        <Carousel>{this.carouselItem()}</Carousel>
      </>
    )
  }
  accordionItem = () => {
    let itemValue = []
    for (let i = 0; i < Object.keys(resumeData).length; i++) {
      itemValue.push(
        <Accordion.Item eventKey={i}>
          <Accordion.Header>{Object.keys(resumeData)[i]}</Accordion.Header>
          <Accordion.Body>{Object.entries(resumeData)[i]}</Accordion.Body>
        </Accordion.Item>
      )
    }
    // Object.entries(resumeData).forEach(([key, value, index]) => {
    //   console.log('gayathri', `${index}`)
    //   itemValue.push(
    //     <Accordion.Item eventKey={index}>
    //       <Accordion.Header>{key}</Accordion.Header>
    //       <Accordion.Body>{value}</Accordion.Body>
    //     </Accordion.Item>
    //   )
    // })
    // for (const [key, value, index] of Object.entries(resumeData)) {
    //   console.log('gaya', index)
    //   itemValue.push(
    //     <Accordion.Item eventKey={index}>
    //       <Accordion.Header>{key}</Accordion.Header>
    //       <Accordion.Body>{value}</Accordion.Body>
    //     </Accordion.Item>
    //   )
    // }
    return itemValue
  }
  accordionBlock = () => {
    return (
      <>
        <Accordion alwaysOpen>
          <>{this.accordionItem()}</>
        </Accordion>
      </>
    )
  }
  render() {
    return (
      <div className="home-block">
        <div className="carousel-block">{this.carouselBlock()}</div>
        <div className="accordion-block">{this.accordionBlock()}</div>
        <div className="text-center p-3 m-3">
          <Link to="/vignesh">
            <img
              src="https://name.vukki.net/meaning/image/0-0-0-0-0-0-0/vignesh.jpg"
              alt="Vignesh"
            />
          </Link>
        </div>
      </div>
    )
  }
}

export default Home
