import { connect } from 'react-redux';
import MyComponent from './myComponent';

// Map Redux state to component props
// 用来描述UI组件参数与state之间的映射
function mapStateToProps(state) {
  return {
    text: state.text,
    name: state.name
  };
}


// dispatch用来描述UI与action的映射。
// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    onChange: (e) => dispatch({
      type: 'change',
      payload: e.target.value
    })
  }
}



// 容器组件在用户给出配置之后，由Redux生成。
// Connected Component
const App = connect(
  mapStateToProps,
  mapDispatchToProps
)(MyComponent);

export default App;
