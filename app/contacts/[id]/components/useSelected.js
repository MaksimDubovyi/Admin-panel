import {  useContext, useMemo } from "react";
import NestedContext from "./NestedList/NestedContext";



export const useSelected =(id)=>{
    const {data, selected}= useContext(NestedContext);
    return useMemo(
        ()=>isSelected(data, selected,id),[data, selected,id]
    )
}


export const isSelected=(data, selected, id)=>{


    const subitems = data.filter((x) => x.id === id && x.children && x.children.length > 0);
    if (subitems.length) {
        for(const subitem of subitems)
        {
            if(!isSelected(data,selected,subitem,id))
            {
                return false;
            }
        }
        return true;
    }

    return selected.includes(id); 
}

