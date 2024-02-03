import React from 'react'

export default function Alert(props) {
// const capitalize = (word)=>{
//   const lower = word.toLowerCase();
//   return lower.chatAt(0).toUpperCase()+lower.slice(1)
// }
  return (
//     <div>
//         <div class="alert alert-warning alert-dismissible fade show" role="alert">
//             {props.Alert}

//   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
// </div>
//     </div>

 props.alert && <div className ="alert alert-success alert-dismissible fade show" role="alert">
  <strong>{props.alert.type}</strong> : {props.alert.msg}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label='close'></button>
</div>
  )
}
