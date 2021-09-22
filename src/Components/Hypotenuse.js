import { useState } from "react";

const Hypotenuse = () => {

    const [sideA, setSideA] = useState(0);
    const [sideB, setSideB] = useState(0);
    // const [sideThree, setSideThree] = useState(0);

    const [hypotenuse, setHypotenuse] = useState('');

    const calculateHypotenuse = (e)=> {
        e.preventDefault();

        if(sideA>0 && sideB>0){
        const calHypotenuse = Math.sqrt(Math.pow(parseInt(sideA), 2)+Math.pow(parseInt(sideB), 2));
        
        setHypotenuse(" Calculated Hypotenuse is " + calHypotenuse + " cm");
        }else{
            setHypotenuse("All the side should be Greater than 0")
        }

}

    return ( 
        <div className="hypotenuse boxInput">
            <h2>Calculate Hypotenuse</h2>
            <p>Using Pythagoras' theorem</p>

            <form action="">
                    <h3>Enter Opposite Side (a) in cm</h3>
                    <input type="number" onChange={(e)=> setSideA(e.target.value)} />
                    <h3>Enter Adjacent Side (b) in cm</h3>
                    <input type="number" onChange={(e)=> setSideB(e.target.value)} />
            
                    
                    <button
                        onClick={(e)=> calculateHypotenuse(e)}
                    >Calculate the Hypotenuse</button>

            </form>

                <h4> {hypotenuse}</h4>

        </div>
     );
}
 
export default Hypotenuse;