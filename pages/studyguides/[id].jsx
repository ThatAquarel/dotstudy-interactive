import { useRouter } from "next/router";

export default function History() {
    const router = useRouter();
    const { id } = router.query;

    return <h1>Study Guides {id}</h1>
}