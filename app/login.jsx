import { useRouter } from "expo-router";
import { useState } from "react";
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";
import { IconEmail, IconPassword } from "../components/icons";
import { useUserStore } from "../components/store";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useUserStore();
    const router = useRouter();

    function handleSubmit() {
        if (email && password) {
            login(email);
            router.back();
        } else {
            alert("이메일과 패스워드를 입력해주세요.");
        }
    }

    return <>
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.container}
    >
        <View style={styles.box}>
            <Text style={styles.title}>LOGIN</Text>
            <View style={styles.inputBox}>
                <IconEmail />
                <TextInput 
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Username@gmail.com"
                    keyboardType="email-address"
                    autoCapitalize="none"
                />
            </View>
            <View style={styles.inputBox}>
                <IconPassword />
                <TextInput 
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    placeholder="Password"
                    secureTextEntry={true}
                />
            </View>
            <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>로그인</Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
    </>
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'hsl(218deg 50% 91%)',
  },
  box: {
    width: '85%',
    backgroundColor: 'hsl(213deg 85% 97%)',
    padding: 25,
    borderRadius: 30,
    alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  inputBox: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 20,
    paddingHorizontal: 15,
    paddingVertical: 10,
    width: '100%',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    fontSize: 16,
  },
  button: {
    width: '100%',
    backgroundColor: 'hsl(233deg 36% 38%)',
    padding: 15,
    borderRadius: 30,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});