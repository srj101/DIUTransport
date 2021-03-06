import { View, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as WebBrowser from "expo-web-browser";
import { ResponseType } from "expo-auth-session";
import * as Google from "expo-auth-session/providers/google";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import { auth } from "../../Configs/firebase";
import { Text } from "react-native-paper";
import { useDispatch } from "react-redux";
import { googleLogin } from "../../redux/Reducers/user";

WebBrowser.maybeCompleteAuthSession();

const Student = ({ navigation }) => {
  const dispatch = useDispatch();
  const [request, response, promptAsync] = Google.useIdTokenAuthRequest({
    clientId:
      "856741678354-lf9gun9ska1vrd9i006gana26rbnq25e.apps.googleusercontent.com",
    scopes: ["openid", "https://www.googleapis.com/auth/userinfo.profile"],
  });

  React.useEffect(() => {
    WebBrowser.warmUpAsync();
    if (response?.type === "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential)
        .then((result) => {
          const credential = GoogleAuthProvider.credentialFromResult(result);

          const user = result.user;
          dispatch(
            googleLogin({
              user: user.providerData[0],
              token: user.stsTokenManager.accessToken,
            })
          );
          navigation.replace("StudentStack");
        })
        .catch((error) => {
          dispatch(
            googleLogin({
              error: error,
            })
          );
          console.log(error);
        });
    }
    return () => {
      WebBrowser.coolDownAsync();
    };
  }, [response]);

  return (
    <View
      style={{
        justifyContent: "center",
        flex: 1,
        alignItems: "center",
      }}
    >
      <Text>Only University Email is allowed</Text>
      <TouchableOpacity
        onPress={() => {
          promptAsync({
            useProxy: true,
          });
        }}
      >
        <Image
          source={{
            uri: "https://onymos.com/wp-content/uploads/2020/10/google-signin-button.png",
            width: 273,
            height: 70,
            resizeMode: "center",
          }}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Student;
