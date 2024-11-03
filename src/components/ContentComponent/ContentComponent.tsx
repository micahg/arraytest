import { Thing } from "../../models/thing";

interface ContentComponentProps {
   thing: Thing
}

const ContentComponent = ({thing}: ContentComponentProps) => {
   console.log(`REDRAWING ${thing.id}`);
   return (
      <div>
         <div>ID IS {thing.id}</div>
         <div>NAME IS {thing.name}</div>
      </div>
   );
};

export default ContentComponent;
