import { useRouter } from "expo-router";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useUserStore } from "../../components/store";

export default function MyPageScreen() {
    const { user, isLoggedIn, logout } = useUserStore();
    const router = useRouter();

    return (
        <View style={styles.container}>
            {
                isLoggedIn ? (
                    <View style={styles.content}>
                        <Text style={styles.welcomeText}>환영합니다!</Text>
                        <Text style={styles.emailText}>{user.email}</Text>
                        <TouchableOpacity style={styles.button} onPress={logout}>
                            <Text style={styles.buttonText}>로그아웃</Text>
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.content}>
                        <Text style={styles.infoText}>로그인이 필요합니다.</Text>
                        <TouchableOpacity style={styles.button} onPress={()=>router.push('/login')}>
                            <Text style={styles.buttonText}>로그인 페이지로 이동</Text>
                        </TouchableOpacity>
                    </View>
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  emailText: {
    fontSize: 18,
    marginVertical: 20,
    color: '#333',
  },
  infoText: {
    fontSize: 18,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#1E90FF',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 25,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});