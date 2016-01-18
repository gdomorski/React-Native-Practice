var React = require('react-native');
var Text = React.Text;
var StyleSheet = React.StyleSheet;

var DayItem = React.createClass({
	render: function() {
		return <Text style={styles.day}>
			{this.props.day}
		</Text>
	}
});

var styles = StyleSheet.create({
	day: {
		fontSize: 18,
		color: '#0000FF',
	}
});

module.exports = DayItem