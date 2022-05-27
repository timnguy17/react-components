//class
class GroceryListItem extends React.Component { //"React.Component" gives access to state
  constructor(props) {
    super(props);

    //create state to hold values
    this.state = {
      done: false,
      hover: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemHover () {
    this.setState ({
      hover: !this.state.hover
    });
  }

  render() {
    //making the style conditional on our 'state' ;ets us update it based on user interaction
    var style = {
      textDecoration: this.state.hover ? 'line-through' : 'none',
      'font-weight': this.state.hover ? 'bold' : 'normal'
    };

    return (
      <li style = {style} onMouseLeave = {this.onListItemHover.bind(this)}  onMouseEnter = {this.onListItemHover.bind(this)} onClick ={this.onListItemClick.bind(this)}>{this.props.items}</li>
    );
  }
}

//app
var App = () => (
  <div>
    <h1>GroceryList</h1>
        <GroceryList items = {['Apples', 'Soda', 'Milk']} />
  </div>

);


var GroceryList = (props) => (
    <ul>
    {props.items.map(items =>
      <GroceryListItem items = {items} />
      )}
  </ul>
);


ReactDOM.render( <App />, document.getElementById('app'))


// var App = () => (
//   <div>Some cliche salutation</div>
// );


