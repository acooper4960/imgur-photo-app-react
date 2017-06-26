import React, {PropTypes} from 'react';
import {bindActionCreators} from 'redux';
import GalleryHeader from './GalleryHeader';
import * as galleryActions from '../../actions/galleryActions';
import {connect} from 'react-redux';
import guid from 'uuid/v4';
import ImageList from './ImageList';

class GalleryPage extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      images: [],
      page: 0,
      isLoading : true
    };
    this.handleScroll = this.handleScroll.bind(this)
  }

  handleScroll(e,a,c){
    let clientHeight = document.getElementsByTagName('body')[0].clientHeight;
    let scrollyOffset = window.window.pageYOffset;

    if (scrollyOffset/clientHeight > .8 && (this.props.images.length- 60)/600 <= this.state.page && this.state.isLoading === false ){
      let page = this.state.page;
      this.setState({isLoading:true,page:++page})
      this.props.dispatch(galleryActions.searchImgur(undefined,undefined,page));
    }
  }
  componentDidUpdate() {
    if ((this.props.images.length - 60)/600 >= this.state.page && this.state.isLoading === true){
      this.setState({isLoading:false});
    }
  }

  componentDidMount() {
      document.addEventListener('scroll', this.handleScroll);
  }

  render() {
    return (
      <div>
        <GalleryHeader page={this.props.page || 0}/>
        <ImageList images={this.props.images}/>
        </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  //maps the gallery reducer (registered as images) to images array
  //Injects new props to component
  return {
    images: state.images.images
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(galleryActions, dispatch)
  };
}

GalleryPage.propTypes = {
  actions: PropTypes.object,
  images: PropTypes.array
};

export default connect(mapStateToProps)(GalleryPage); //wraps courses page

