import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from "expo-router/drawer"

export default function DrawerLayout(){
    return <GestureHandlerRootView>
        <Drawer>
        </Drawer>
    </GestureHandlerRootView>
}