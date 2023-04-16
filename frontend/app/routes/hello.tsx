import { useLoaderData } from "@remix-run/react";

export const loader = async () => {
    const res = await fetch("http://localhost:8080");
    const text = await res.text();
    return {text}
}

const Hello = () => {
  const data = useLoaderData();
  return (
    <div>{data.text}</div>
  )
}

export default Hello