import { useRouter } from "expo-router";
import { useState } from "react";
import { useUserStore } from "../components/store";

export default function LoginScreen() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login } = useUserStore();
    const router = useRouter();

    function handleSubmint() {}

    return <>
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