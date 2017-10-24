// 1. Import section - We import React from the node_modules and the components form react-native
import React from 'react';
import {View, Text} from 'react-native';

// 2. Create App with render function. (to display on the screen)
class App extends React.Component {
  render() {
    // Return in argument.. weird
    return (
      <View style={Styles.container}>
      <Text style={Styles.textStyle}>Hello World</Text>
      </View>
    )
  }
}
// 3. Export App class
export default App;


// 4. Create Styles object 
const Styles =  {
  container:
  {
    flex:1, 
    alignItems: 'center', 
    justifyContent:'center'
  },
  textStyle: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent:'center',
    borderWidth: 2,
    borderColor : 'green'
  }
}