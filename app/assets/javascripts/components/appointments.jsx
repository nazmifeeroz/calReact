class Appointments extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'jack',
    }
    this.changeName = this.changeName.bind(this);
  }

  changeName(e) {
    this.setState({
      name: e.target.value
    })
  }

  render(){
    return(
      <div>
      <form>
        <input 
        onChange={this.changeName}
        placeholder={this.state.name}
        autofocus
        />
      </form>
        <p>Hey {this.state.name}</p>
      </div>
    )
  }
}