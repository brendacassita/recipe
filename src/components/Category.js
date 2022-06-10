import {FaPizzaSlice, FaHamburger } from "react-icons/fa"
import {GiNoodles, GiChopSticks} from "react-icons/gi"
import styledComponents from "styled-components"

const Category = () => {
  return(
    <div>
      <div>
        <FaPizzaSlice/>
        <h4>Italian</h4>
      </div>
      <div>
        <FaHamburger/>
        <h4>American</h4>
      </div>
      <div>
        <GiNoodles/>
        <h4>Thai</h4>
      </div>
      <div>
        <GiChopSticks/>
        <h4>Asian</h4>
      </div>
    </div>
  )
}


export default Category