interface Item {
    label:string;
    link: string;
}

interface ItemProps {
    linkProps: Item[];
}

export default function MenuItem({linkProps}:ItemProps){
        return(
            <ul>
                {linkProps.map((item:Item)=>(
                <li>{item.label}</li>
               ))}
           </ul>
    )
            
            
}