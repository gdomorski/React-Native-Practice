var React = require('react-native');
var AppRegistry = React.AppRegistry;
var Text = React.Text;
var View = React.View;
var StyleSheet = React.StyleSheet;
var DayItem = require('./src/day-item');
var DAYS = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

var Weekdays = React.createClass({
  render: function(){
    return <View style={Styles.container}>
      <Text>
        Days of the Week:
      </Text>
      {this.days()}
    </View>
  },
  days: function(){
    return DAYS.map(function(day){
      return <DayItem day={day} />
    });
  }
});

var Styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

AppRegistry.registerComponent('app', function(){
  return Weekdays
});


