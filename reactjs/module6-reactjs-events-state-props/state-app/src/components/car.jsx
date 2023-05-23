import {React, useState} from "react";
function CarApp(props)
{
    const [name, setName] = useState({

        car:'Audi',
        price:'1.8Cr',
        address:'mavdi'
    });


        return (
            <>
                <h1>My employee id is : {name.car}</h1>
                <h1>My employee id is : {name.price}</h1>
                <h1>My employee id is : {name.address}</h1>
            </>
        )

}

export default CarApp;