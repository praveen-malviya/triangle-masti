import { useState } from "react";

const IsTriangle = () => {

    const [angleOne, setAngleOne] = useState(0);
    const [angleTwo, setAngleTwo] = useState(0);
    const [angleThree, setAngleThree] = useState(0);

    const [triangleStatus, setTriangleStatus] = useState('');

    const checkTriangle = (e)=> {
        e.preventDefault();

        if(angleOne>0 && angleTwo>0 && angleThree>0){
        const sumOfAngle = parseInt(angleOne)+parseInt(angleTwo)+parseInt(angleThree)
        console.log(sumOfAngle)

        if(sumOfAngle === 180){
                setTriangleStatus('Yes you thought right it form a Triangle')
        }else
        {
            setTriangleStatus('Sorry you need to think again, these angle does not form a triangle')
        }
    }else{
        setTriangleStatus("All the angles should be Greater than 0")
    }
    }

    return ( 
        <div className="isTriangle boxInput">
            <h2>Check if the Angles you thought is form a Triangle or not</h2>

            <form action="">
                    <h3>Enter Angle One</h3>
                    <input type="number" onChange={(e)=> setAngleOne(e.target.value)} />
                    <h3>Enter Angle two</h3>
                    <input type="number" onChange={(e)=> setAngleTwo(e.target.value)} />
                    <h3>Enter Angle three</h3>
                    <input type="number" onChange={(e)=> setAngleThree(e.target.value)}/>
                    
                    <button
                        onClick={(e)=> checkTriangle(e)}
                    >Check if Triangle</button>

            </form>

                <h4>{triangleStatus}</h4>
        </div>
     );
}
 
export default IsTriangle;