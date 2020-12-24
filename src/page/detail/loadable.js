import Loadable from 'react-loadable';
import react from 'react'

function Loading(props){
  return (<div>loading</div>)
}

const LoadableComponent = Loadable({
  loader: () => import('./index'),
  loading:Loading,
});

export default LoadableComponent