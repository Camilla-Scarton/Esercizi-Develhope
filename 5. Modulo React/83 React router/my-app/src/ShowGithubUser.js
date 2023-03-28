import { useParams } from "react-router-dom";
import { GithubUser } from "./GithubUser";

export function ShowGithubUser() {
    const { username = "camilla-scarton" } = useParams();

    return <GithubUser username={username}/>;
}