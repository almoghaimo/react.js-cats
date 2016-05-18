var React = require('react');
var ListItem = require('./ListItem.jsx');
var HTTP = require('../services/httpservice');

var List = React.createClass({
   //Called once in the Component life cycle - an initializer
  getInitialState: function(){
    return {urlCats: []};
  },
  componentWillMount: function(){
    HTTP.get('/cats')
    .then(function(data){
      console.log(data);
      var data = data.urlCats;
      this.setState({urlCats: data}); ////Update the state property
    }.bind(this));
  },
    render: function() {
      //Goes through each item in the items dataset and creates a ListItem component
       //for each item
        var listItems = this.state.urlCats.map(function(item) {
            return(
              <div className="col-sm-3">
              <div className="panel panel-primary">
                  <div className="panel-body">
              <ListItem key={item.id} url={item.url}/>
              </div>
                </div>
                  </div>
            );
        });

        return (<ul>{listItems}</ul>);
    }
});

module.exports = List;
