import {
  View,
  StatusBar,
  Platform,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import React from "react";
import { useTheme, Text } from "react-native-paper";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/Reducers/user";
import Loader from "../../components/Loader";

const Profile = ({ navigation }) => {
  const { user, loading } = useSelector((state) => state.user);
  console.log(user);
  const theme = useTheme();
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logout());
    navigation.reset({
      index: 0,
      routes: [
        {
          name: "login",
        },
      ],
    });
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: theme?.colors.surface,
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <SafeAreaView>
        <View style={styles.container}>
          <View
            style={{
              alignItems: "center",
              flexDirection: "column",
              marginBottom: 20,
            }}
          >
            <Image
              source={{ uri: user?.photoURL }}
              style={{
                height: 80,
                width: 80,
                borderRadius: 40,
                marginBottom: 10,
              }}
            />
            <Text style={styles.profileName}>{user?.displayName}</Text>
            <Text style={styles.profileName}>{user?.email}</Text>
          </View>

          <View
            style={{
              backgroundColor: theme.colors.cardToggle,
              padding: 40,
              borderRadius: 20,
              position: "relative",
            }}
          >
            <View
              style={{
                position: "absolute",
                backgroundColor: theme.colors.surfaceToggle,
                left: "50%",
                marginLeft: 24,
                width: 32,
                height: 32,
                top: -16,
                borderRadius: 100,
              }}
            >
              <Text style={{ display: "none" }}>dsfg</Text>
            </View>
            <View
              style={{
                alignItems: "center",
                flexDirection: "column",
                justifyContent: "center",
                marginBottom: 20,
              }}
            >
              <Text style={{ fontWeight: "bold" }}>
                Date:{" "}
                {new Date().toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </Text>
            </View>

            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <FontAwesome5
                  size={15}
                  color={theme.colors.White}
                  name="user"
                />
              </View>
              <TouchableOpacity style={{ marginLeft: 10 }}>
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  Personal Data
                </Text>
              </TouchableOpacity>
            </View>

            <View
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <MaterialIcons
                  size={15}
                  color={theme.colors.White}
                  name="location-history"
                />
              </View>
              <TouchableOpacity
                style={{ marginLeft: 10 }}
                onPress={() => navigation.navigate("TripHistory")}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                  }}
                >
                  My Trip
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                justifyContent: "flex-start",
                flexDirection: "row",
                alignItems: "center",
              }}
              onPress={handleLogout}
            >
              <View
                style={{
                  backgroundColor: theme.colors.accent,
                  borderRadius: 100,
                  padding: 10,
                }}
              >
                <FontAwesome
                  size={15}
                  color={theme.colors.White}
                  name="sign-out"
                />
              </View>
              <View style={{ marginLeft: 10 }}>
                <Text style={{ fontSize: 20, fontWeight: "bold" }}>Logout</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  profileName: {
    marginTop: 15,
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Profile;
