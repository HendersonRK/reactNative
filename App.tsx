import { NavigationContainer } from '@react-navigation/native';
import { StackRoutes } from './src/routes/Stack.routes';

export default function App() {
  return (
   <NavigationContainer>
      <StackRoutes/>
   </NavigationContainer>
  );
}
