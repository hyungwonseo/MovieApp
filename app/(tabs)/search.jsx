import { useRouter } from "expo-router";
import { useState } from "react";
import {
    ActivityIndicator, FlatList, Image, Keyboard, StyleSheet, Text, TextInput,
    TouchableOpacity, View
} from "react-native";
import { IMG_PATH, searchMoviesByKeyword } from "../../components/api";
const noExist = require('../../components/img/no_exist.jpg');

export default function SearchScreen() {
    const [keyword, setKeyword] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searched, setSearched] = useState(false);
    const router = useRouter();

    async function handleSearch() {
        if (!keyword.trim()) {
            alert("검색어를 입력해주세요.");
            return;
        }
        Keyboard.dismiss(); // 키보드 숨기기
        setLoading(true);
        setSearched(true);
        try {
            const response = await searchMoviesByKeyword(keyword);
            setResults(response.data.results);
        } catch (error) {
            console.log(error);
            alert('검색 중 오류가 발생했습니다.');
        } finally {
            setLoading(false);
        }
    }

    function renderMovieItem({item}) {
        return (
            <TouchableOpacity style={styles.card}
                onPress={()=>router.push(`/${item.id}`)}
            >
                <Image source={ item.poster_path ? { uri: IMG_PATH + item.poster_path } : noExist} 
                    style={styles.cardImage}
                />
                <Text style={styles.cardTitle} numberOfLines={1}>{item.title}</Text>                
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <TextInput style={styles.input}
                    placeholder="영화 제목을 검색해보세요..."
                    value={keyword}
                    onChangeText={setKeyword}
                    onSubmitEditing={handleSearch}
                />
                <TouchableOpacity style={styles.button} onPress={handleSearch}>
                    <Text style={styles.buttonText}>검색</Text>
                </TouchableOpacity>
            </View>
            { loading ? (
                <ActivityIndicator style={{marginTop:20}}  size="large" color="#1E90FF" />
            ) : (
                <FlatList 
                    data={results}
                    renderItem={renderMovieItem}
                    keyExtractor={(item) => item.id.toString()}
                    numColumns={2}
                    contentContainerStyle={styles.listContainer}
                    ListEmptyComponent={() => (
                        searched && <View style={styles.emptyContainer}>
                            <Text>검색 결과가 없습니다.</Text>
                        </View>
                    )}
                />  
            )}
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  searchContainer: {
    flexDirection: 'row',
    padding: 10,
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    paddingHorizontal: 20,
    height: 40,
    backgroundColor: '#1E90FF',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
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
    elevation: 2,
    shadowColor: '#000',
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
    padding: 10,
    textAlign: 'center',
  },
  emptyContainer: {
    flex: 1,
    marginTop: 50,
    alignItems: 'center',
  },
});