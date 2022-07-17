import logo from './logo.svg';
import './App.css';
import TreeView from './utils/TreeView';
import Navigation from './menu/navigation';

function App() {
  const item = { name:"root",items:[{ name:"item0",items:[], hasChildren:0}],hasChildren:1};
  item.items.push({ name:"item1",items:[],hasChildren:1});
  item.items.push({ name:"item2",items:[],hasChildren:1});
  item.items.push({ name:"item3",items:[],hasChildren:0});
  item.items[2].items.push({ name:"item4",items:[],hasChildren:0});
  item.items[2].items.push({ name:"item5",items:[],hasChildren:0});
  item.items[1].items.push({ name:"item6",items:[],hasChildren:0});
  item.items[1].items.push({ name:"item7",items:[],hasChildren:0});
  return (
    
  <h1>Home</h1>
    
    // <TreeView list={item}></TreeView>
    
  );
}

export default App;
