import React, {PropTypes, Component} from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import './TodoForm.scss';

export default class TodoForm extends Component {
  static propTypes = {
    addTodo: PropTypes.func.isRequired
  };

  _title;

  onAddTodo = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let title = this._title.value.trim();

    if (!title) return;

    this.props.addTodo({
      title: title,
      description: ''
    });

    this.resetForm();

    this.focusTitleInput();
  };

  resetForm = () => {
    this._title.value = '';
  };

  focusTitleInput = () => {
    this._title.focus();
  };

  setTitleInput = (node) => {
    this._title = node;
  };

  render() {
    return (
      <form className="todo-form"
            onSubmit={this.onAddTodo}>
        <input type="text"
               className="todo-title-field"
               placeholder="Enter todo title here..."
               ref={this.setTitleInput}
        />
        <RaisedButton
          type="submit"
          label="Add"
        />
      </form>
    );
  }
}