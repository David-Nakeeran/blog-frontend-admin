import { useLoaderData } from "react-router-dom";

export function loader() {
    return "The data is here"
}

export default function PostList() {
    const data = useLoaderData();
    return (
        <>
            <h1>List all published and unpublished posts</h1>
        </>
    )
}