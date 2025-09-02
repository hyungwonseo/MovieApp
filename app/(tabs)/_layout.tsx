import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen name="index" 
        options={{title: '영화목록',
          tabBarIcon: ({color})=><FontAwesome size={28} name="home" color={color} />,
        }} />
      <Tabs.Screen name="search" 
        options={{title: '검색',
          tabBarIcon: ({color})=><FontAwesome size={28} name="search" color={color} />,
        }}/>
      <Tabs.Screen name="mypage" 
        options={{title: '마이페이지',
          tabBarIcon: ({color})=><FontAwesome size={28} name="user" color={color} />,
        }}/>
    </Tabs>
  )
}