import ListItem from "./Listitem.jsx"

const List=(props)=>{
    const {list}=props;
    return(
       <>
         {list.map((listitem)=>
               (
               <ListItem listitem={listitem} />
               )
         )}
       </>
    );
};
export default List;