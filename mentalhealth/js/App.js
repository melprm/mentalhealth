
import '/css/main.css'
import '/css/Carousel.css'
import {Carousel} from '/js/Carousel.js'

export default function App() {
  return (
    <Carousel>
    <div className="item item-1">Item 1</div>
    <div className="item item-2">Item 2</div>
    <div className="item item-3">Item 3</div>
    </Carousel>
  )
}
