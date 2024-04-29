import React from 'react'
import { Text, View } from 'react-native'
import Header from '../../components/Header'
import { useNavigation } from '@react-navigation/native';
import { FAB, Portal } from 'react-native-paper';

export const Task = () => {
  const navigation = useNavigation();

  const [state, setState] = React.useState({ open: false });

  // Función para manejar el cambio de estado del FAB
  const onStateChange = ({ open }) => setState({ open });

  const { open } = state;
  
  return (
   <View style={{ flex: 1, backgroundColor: "#ffead7"}}>
    <Header label={'Tasks'} backgroundColor='#f88a71' handleNavigate={navigation.goBack} />
    <Portal>
        <FAB.Group
          open={open}
          visible
          icon={open ? 'close' : 'plus'}
          actions={[
            { icon: 'plus', onPress: () => console.log('Pressed add') },
            { icon: 'file', label: 'Add task', onPress: () => console.log('Pressed star') }
          ]}
          onStateChange={onStateChange}
          onPress={() => {
            if (open) {
              console.log('Do something if the FAB is open');
            }
          }}
        />
      </Portal>
   </View> 
  )
}
