import React from 'react';
import {
  Provider
} from 'react-redux';

import PropTypes from 'prop-types';
// import Loading from '../components/loading';
import logo from '../assets/google-pixel@3x.png';
import App from '../components/App';

class Application extends React.Component {
  constructor(props) {
    super(props);

    // const { store } = props;
    console.log('constructor', props);
  }


  render() {
    console.log('constructor after', this.props);

    return (
      <Provider {...this.props}>
        <div>
          hello world!

          <App />
        </div>
      </Provider>
    );
  }
}

// console.log(...props);

// const Application = ({ ...store }) => (
//
//
//   <Provider store={
//     store
//   }
//   >
//     <div >
//       <img
//         src={
//     logo
//   }
//         alt="testing images"
//         style={
//     {
//       width: '60%'
//     }
//   }
//       />
//     </div>
//   </Provider>
// );

// Application.propTypes = {
//   store: PropTypes.any
// };

Application.defaultProps = {
  store: PropTypes.oneOfType([
    PropTypes.func.isRequired,
    PropTypes.object.isRequired
  ]).isRequired
};

export default Application;
