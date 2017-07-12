
import TopicList from './containers/TopicList';
import topicListContainer from './components/App';

console.log(topicListContainer)

const matchConfig = [
  {
    path: '/',
    component: topicListContainer,
    initState: topicListContainer.initState,
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
