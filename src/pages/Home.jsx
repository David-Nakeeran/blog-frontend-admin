import { useLoaderData } from "react-router-dom";
import useApiFetch from "../hooks/useApiFetch";

export function loader() {

    // throw new Error('Testing Error!')
    return useApiFetch('http://localhost:3000')
}

export default function Home() {
    const data = useLoaderData();
    console.log(data);
    return (
        <>
            <h1>All published posts goes here</h1>
        </>
    )
}