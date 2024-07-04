import { useLoaderData } from "react-router-dom";

export function loader() {
    return "The data is here"
}

export default function PostDetail() {
    const data = useLoaderData();
    return (
        <>
            <h1>Single post goes here</h1>
        </>
    )
}