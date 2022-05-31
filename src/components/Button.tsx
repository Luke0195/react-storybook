import React, { ButtonHTMLAttributes } from 'react';

interface ComponentProps extends ButtonHTMLAttributes<HTMLButtonElement>{
 label: string
 
}
export function Button({ label} : ComponentProps){
  return(
    <button> {label} </button>
  )
}