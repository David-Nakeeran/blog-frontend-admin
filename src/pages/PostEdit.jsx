import { useLoaderData } from "react-router-dom";

export function loader() {
    return "The data is here"
}

export default function PostEdit() {
    const data = useLoaderData();
    return (
        <>
            <h1>Edit post goes here</h1>
        </>
    )
}