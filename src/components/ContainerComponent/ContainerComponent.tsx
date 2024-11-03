import { useEffect, useState } from "react";
import { Thing } from "../../models/thing";
import ContentComponent from "../ContentComponent/ContentComponent";

const ContainerComponent = () => {

   const [things, setThings] = useState<Thing[]>([]);

   const change = () => {
      // const copy = [...things];
      // copy[0].name = "Third";
      // setThings(copy);

      // things[0].name = "Third";
      // setThings(things);

      // const newThing: Thing = {...things[0], name: "Third"};
      // things.splice(0, 1, newThing);
      // console.log(`Spliced things ${JSON.stringify(things)}`);
      // setThings(things);

      const newThing: Thing = {...things[0], name: "Third"};
      things.splice(0, 1);
      console.log(`Spliced things ${JSON.stringify(things)}`);
      const newThings = [...things, newThing];
      console.log(`Updated things ${JSON.stringify(newThings)}`);
      setThings(newThings);
   }

   useEffect(() => {
      const initialThings: Thing[] = [
         {
            id: 1,
            name: "First",
         },
         {
            id: 2,
            name: "Second",
         }
      ]
      setThings(initialThings);
   }, []);

   useEffect(() => {
      console.log(`New things: ${JSON.stringify(things)}`);
   }, [things])

   return (
      <div>
         <div>Container</div>
         <div>
            {things.map(thing => <ContentComponent key={thing.id} thing={thing}/>)}
         </div>
         <button onClick={change}>Change</button>
      </div>
   );
}

export default ContainerComponent;
