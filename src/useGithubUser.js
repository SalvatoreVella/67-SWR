import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export const useGithubUser = (name) => {
const { data, error } = useSWR(`https://api.github.com/users/${name}`, fetcher);
        return {
            data: data, 
            isLoading: !data && !error,
            error: error,
        };
}