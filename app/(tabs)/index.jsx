import { useRouter } from "expo-router";
import { useState } from "react";
import { FlatList } from "react-native";
import {
    Text, View
} from "react-native-web";
const noExist = require('../../components/img/no_exist.jpg');

export default function MovieListScreen() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [selectedCat, setSelectedCat] = useState(0);
    const [genreList, setGenreList] = useState([]);
    const router = useRouter();

    useEffect(()=>{
        getMovies(0);
    }, []);

    async function getMovies(index) {
        try {
            let response = await getGenreListMovie();
            if (!response || response.length === 0) { // 200OK를 받았는데 내용이 비었을때
                console.log("장르리스트 데이터가 없습니다");
                return;
            }
            console.log(response);
            setGenreList(response);
            response = await categories[index].func(); // 비동기함수 호출
            console.log(response.data);
            setSelectedCat(index);
            setData(response.data);
            setLoading(false);      
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View>
            <Text>무비리스트</Text>
            <FlatList 
                data={data.results}
                renderItem={()=>{}}
                keyExtractor={(item) => item.id.toString()}
            />
        </View>
    )
}