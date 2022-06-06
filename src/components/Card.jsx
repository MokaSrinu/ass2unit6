import Heading from "./Heading.jsx"
import List from "./List.jsx"
const Card=(props)=>{
    const {heading,list}=props;
    return (
        <>
          <Heading heading={heading}/>
          <List list={list}/>
        </>
    )
}
export default Card;