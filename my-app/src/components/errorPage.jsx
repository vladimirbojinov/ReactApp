import { NavLink, useRouteError } from 'react-router-dom'

export const ErrorPage = () => {
    const error = useRouteError();
    return (
        <>
            <h1>Error occurred! [{error.status}]</h1>
            <p>{error.data}</p>
            <NavLink to='/' >Go Back</NavLink>
        </>
    );
}