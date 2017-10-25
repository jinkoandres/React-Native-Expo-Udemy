// 1. Import section - We import React from the node_modules and the components form react-native
import React from 'react';
import { View, Text, TextInput, Button } from 'react-native';

// 2. Create App with render function. (to display on the screen)
class App extends React.Component {
  state = {
    userInput: "",
    todo: ""
  }
  addTodo = () => {
    this.setState({ todo: this.state.userInput })
  }
  render() {
    // Return in argument.. weird
    return (
      <View style={Styles.container}>
        <Text>Hello World, this a great app</Text>
        
          <TextInput style={Styles.input}
            onChangeText={(text) => this.setState({ userInput: text })}
          />
        <Button
          title='Add todo'
          color='green'
          onPress={this.addTodo}
        />
        <Text>{this.state.todo}</Text>
      </View>
    )
  }
}
// 3. Export App class
export default App;


// 4. Create Styles object 
const Styles = {
  container:
  {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 44,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 8
  }
}