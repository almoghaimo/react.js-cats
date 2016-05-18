var React = require('react');

var ListItem = React.createClass({
    getInitialState: function() {
      // initalize state property.
          return {
            disable: false,
            background: {
                       background: '#eee'
                   }
          };
      },
    onClickLike: function() {
        this.setState({background: {background: '#90EE90'}});
        this.setState({disable: true});
    },
    onClickUnLike: function() {
        this.setState({background: {background: '#ff7f7f'}});
        this.setState({disable: true});
    },
    render: function() {
            var liStyle = this.state.background;
            var liStyle = {
                       background: '#ff7f7f'
                   };
             if (this.props.isSelected) {
                    liStyle['background'] = '#eee';
            }
        return (
          <div style={this.state.background}>
          <div className="row panel-body">
            <img src={this.props.url} height="200" width="200"> </img>
            </div>
              <div className="row panel-body">
          <button className="btn btn-primary" onClick={this.onClickLike} disabled= {this.state.disable}>Like </button>
          <button className="btn btn-warning" onClick={this.onClickUnLike} disabled= {this.state.disable} type="button">Unlike </button>
          </div>
          </div>
        );
    }
});

module.exports = ListItem;
