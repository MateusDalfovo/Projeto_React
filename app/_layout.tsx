import { Drawer } from "expo-router/drawer";

export default function AppLayout() {
  return (
    <Drawer>
      <Drawer.Screen
        name="index" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Index",
          title: "Index",
        }}
      />
      <Drawer.Screen
        name="home" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Home",
          title: "Home",
        }}
      />

      <Drawer.Screen
        name="cadastro" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela B",
          title: "Resumo",
          drawerItemStyle: {height: 0}
        }}
      />

<Drawer.Screen
        name="sobre" // This is the name of the page and must match the url from root
        options={{
          drawerLabel: "Tela A",
          title: "Resumo",
          drawerItemStyle: {height: 0}
        }}
      />
    </Drawer>
  );
}