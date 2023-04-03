import AsyncStorage from '@react-native-async-storage/async-storage';
import Api from './Api';



const Login = async (jwt: string) => {
  try {
    await AsyncStorage.setItem("@token", jwt);
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}

const HandelNewUser = async (jwt: string) => {
  try {
    await Login(jwt)
    const res = await checkAuth()
    if (res.msg == "OK") {

      return res.user
    } else {
      return Error
    }
  } catch (e) {
    console.log(e)
  }
}

const LogOut = async () => {
  try {
    await AsyncStorage.removeItem("@token");
  } catch (error) {
    console.log('AsyncStorage error: ' + error.message);
  }
}


const checkAuth = async () => {
  try {
    const value = await AsyncStorage.getItem('@token')

    if (value != null) {
      const user = await Api.get('/user', {
        headers: { Authorization: value }
      })
      // console.log(user.data)
      return user.data

    } else {
      return null
    }
  } catch (e) {
    // error reading value
    console.log(e)
  }
}


export {
  Login,
  checkAuth,
  LogOut,
  HandelNewUser
}