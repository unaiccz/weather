import React, { useState } from 'react';
function Get() {
const [inp,setinp] =useState('');
const handle = ({target}) => {
setinp(target.value)


}
const submit =(e)=>{
e.preventDefault()
    console.log(inp)
}
    return ( <>
    <div className='card'>

<h3>Weather</h3>
<div className='card-body'>
<form onSubmit={submit}>
<input type='text' placeholder='Ubicacion' id='buscador' onChange={handle}
value={inp}
/>
<img src='nb.png'/>
<input type= 'submit' value='buscar' className='btn'/>
</form>

</div>
    </div>
    </>
    
    
    );
}

export default Get;<>
<div className='card'>

<h3>Weather</h3>

</div>
</>


