import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { categories, getGenreListMovie, getGenreName, IMG_PATH } from '../../components/api';
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

    function renderMovieItem({item}) {
        return (
            <TouchableOpacity style={styles.card}
                onPress={()=>{}}
            >
                <Image source={ item.poster_path ? { uri: IMG_PATH + item.poster_path } : noExist} 
                    style={styles.cardImage}
                />
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>
                <Text style={styles.cardGenre} numberOfLines={1}>
                    {getGenreName(genreList, item.genre_ids)}
                </Text>
            </TouchableOpacity>
        )
    }

    return loading ? (
        // 1. 로딩중
        <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="#1E90FF" />
        </View>
    ) : !data || !data.results ? (
        // 2. 로딩이 끝났지만 데이터가 없을 때
        <View style={styles.loaderContainer}>
            <Text>영화 데이터를 불러오지 못했습니다. 다시 시도해주세요.</Text>
        </View>
    ) : (
        // 3. 로딩이 끝나고 데이타도 있을 때
        <View style={styles.container}>
            <View style={styles.tabContainer}>

            </View>            
            <FlatList 
                data={data.results}
                renderItem={renderMovieItem}
                keyExtractor={(item) => item.id.toString()}
                numColumns={2}
                contentContainerStyle={styles.listContainer}
            />
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
  },
  button: {
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 20,
    backgroundColor: '#ddd',
  },
  selectedButton: {
    backgroundColor: '#1E90FF',
  },
  buttonText: {
    color: 'black', // 기본 텍스트 색상을 검은색으로 변경
  },
  listContainer: {
    paddingHorizontal: 5,
  },
  card: {
    flex: 1,
    margin: 5,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    overflow: 'hidden',
    alignItems: 'center',
    elevation: 2, // 안드로이드 그림자
    shadowColor: '#000', // iOS 그림자
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
  },
  cardImage: {
    width: '100%',
    height: 250,
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 16,
    paddingHorizontal: 10,
    paddingTop: 10,
    textAlign: 'center',
  },
  cardGenre: {
    fontSize: 12,
    color: '#666',
    paddingBottom: 10,
    paddingHorizontal: 10,
  },
});