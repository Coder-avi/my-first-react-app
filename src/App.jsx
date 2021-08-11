import react from 'react';
import {add , sub, mult, div} from './Calc';


function App(){
    return(<>
    <ul>
        <li>Sum of two number is {add(40, 4)}</li>
        <li>Sub of two number is {sub(40, 4)}</li>
        <li>Mult of two number is {mult(40, 4)}</li>
        <li>Div of two number is {div(40, 4)}</li>
       
    </ul>
    
    
    
    
    
    
    </>);

}

export default App;