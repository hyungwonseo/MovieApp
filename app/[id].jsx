import { useLocalSearchParams, useRouter } from "expo-router";
import { useState } from "react";


export default function MovieDetailScreen() {
    const [data, setData] = useState(null);
    const [credit, setCredit] = useState(null);
    const [loading, setLoading] = useState(true);
    const { id } = useLocalSearchParams();
    const router = useRouter();

    useEffect(()=>{
        getMovieInfo();
    }, [id]);

  async function getMovieInfo() {
    try {
        let response = await getMovieDetailById(id);
        if (response.data) {
            console.log(response.data);
            setData(response.data);
        }else {
            console.log("영화의 상세정보가 없습니다");
            return;
        }
        response = await getMovieCreditById(id);
        if (response.data) {
            console.log(response.data);
            setCredit(response.data);
        }else {
            console.log("영화의 크레딧정보가 없습니다");
            return;
        }
        setLoading(false);
        } catch (error) {
            console.log(error);
            alert("데이터를 불러오는 데 실패했습니다. 잠시 후 다시 시도해 주세요.");
        }
    }

    return <></>
}