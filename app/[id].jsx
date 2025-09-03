import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-web";
import { getMovieCreditById, getMovieDetailById } from "../components/api";
import { IconBack } from '../components/icons';

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

    return <>
        <Stack.Screen 
            options={{
                title: data ? data.title : '로딩 중...',
                headerLeft: () => (
                    <TouchableOpacity onPress={()=>router.back()}
                        style={{margineLeft: 15, width: 24, height: 24}}
                    >
                        <IconBack />
                    </TouchableOpacity>
                )
            }}
        />
        {
            loading ? (
                <View style={styles.loaderContainer}>
                    <ActivityIndicator size={large} color="#1E90FF" />
                </View>
            ) : !data || !credit ? (
                <View style={styles.loaderContainer}>
                    <Text>상세 정보를 불러올 수 없습니다.</Text>
                </View>
            ) : (
                <ScrollView style={styles.loaderContainer}>
                    <Image></Image>
                    <View>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.tagline}>{data.tagline}</Text>
                        <Text style={styles.sectionTitle}>장르</Text>
                        <Text style={styles.contentText}>{data.genres.map(g=>g.name).join(", ")}</Text>
                        <Text style={styles.sectionTitle}>개봉일</Text>
                        <Text style={styles.contentText}>{data.release_date}</Text>
                        <Text style={styles.sectionTitle}>상영시간</Text>
                        <Text style={styles.contentText}>{data.runtime}분</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                        <Text style={styles.title}>{data.title}</Text>
                    </View>
                </ScrollView>
            )
        }
    </>
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
  backdropImage: {
    width: '100%',
    height: 250,
  },
  contentContainer: {
    padding: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  tagline: {
    fontSize: 16,
    fontStyle: 'italic',
    color: '#666',
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 15,
    marginBottom: 5,
  },
  contentText: {
    fontSize: 16,
    lineHeight: 24,
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF',
    textDecorationLine: 'underline',
  },
});