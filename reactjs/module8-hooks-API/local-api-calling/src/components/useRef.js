import React, { useEffect, useState } from 'react'

export default function Useref() {

    const [user, setUser] = useState(null);

    useEffect(() => {
        fetch('http://localhost:3000/user')
            .then((response) => response.json())
            .then((user) => setUser(user))

    }, [])

    return (
        <>
            <table class="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">email</th>
                        <th scope="col">message</th>
                    </tr>
                </thead>
                <tbody>
                    {user && user.map((item) => {
                        return (
                            <tr>
                                <th scope="row" key={item.id}>{item.id}</th>
                                <td key={item.fname}>{item.fname}</td>
                                <td key={item.lname}>{item.lname}</td>
                                <td key={item.email}>{item.email}</td>
                                <td key={item.message}>{item.message}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>
    )
}
