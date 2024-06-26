import {
  View,
  StyleSheet,
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { Text } from 'react-native-paper';

import ImgLogo from '../../../../assets/backgroundSplash.png';
import { RootStackParamList } from '../../App';
import { Button } from '../../components/Button';

type LoginScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'home'
>;

type Props = {
  navigation: LoginScreenNavigationProp;
};

const Home = ({ navigation }: Props) => {
  const handleNavigate = (route: keyof RootStackParamList) => {
    navigation.navigate(route);
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.container}
    >
      <ImageBackground source={ImgLogo} style={styles.backgroundImage}>
        <View
          style={{
            position: 'absolute',
            backgroundColor: '#f88a71',
            height: '50%',
            width: '100%',
            bottom: 0,
            borderTopEndRadius: 40,
            borderTopStartRadius: 40,
            display: 'flex',
            alignItems: 'flex-start',
            paddingTop: '20%',
            paddingHorizontal: 20,
          }}
        >
          <View style={{ marginVertical: 20, marginHorizontal: 10 }}>
            <Text style={{ fontSize: 35, color: 'white' }}>Hello,</Text>

            <Text
              style={{ fontSize: 35, color: 'white' }}
              variant="headlineMedium"
            >
              Welcome!
            </Text>
          </View>
          <View
            style={{
              display: 'flex',
              justifyContent: 'center',
              gap: 20,
              paddingHorizontal: 10,
              width: '100%',
            }}
          >
            <Button
              label={'Taks'}
              variant="secondary"
              onPress={() => handleNavigate('task')}
            />

            <Button
              label={'List'}
              variant="scarletGlow"
              onPress={() => handleNavigate('list')}
            />
          </View>
        </View>
      </ImageBackground>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    height: '100%',
  },

  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    position: 'relative',
  },
});

export default Home;
