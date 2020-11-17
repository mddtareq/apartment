import { PENDING, DONE, ONGOING } from "./actionTypes"

export const pending=(id,pending)=>{
    return {type: PENDING,id,pending}
}

export const done=(id,done)=>{
    return {type: DONE, id,done}
}

export const ongoing=(id,ongoing)=>{
    return {type: ONGOING,id,ongoing}
}

