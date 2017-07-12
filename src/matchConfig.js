
import TopicList from './containers/TopicList';
import AppContainer from './components/App';

const matchConfig = [
  {
    path: '/',
    component: AppContainer,
    initState: AppContainer.initState,
    exact: false
  },
  {
    path: '/topiclist',
    component: TopicList,
    //initState: TopicList.initState,
    exact: false
  }
];

export default matchConfig;
