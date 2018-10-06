import  React  from 'react'

export const ButtonDelete = (props) => {
  console.log(props);
    return <button style={props.style} onClick={props.onClick}>Click</button>
        
}