import { ADD_TASK } from './actions';
import { get } from 'axios';
//const initialState = (async()=>{
//    const json = 'https://kodaktor.ru/j/db.json';
//    (await fetch(json).then(x=>x.json()));
// })();

//const initialState = function(){fetch('https://kodaktor.ru/j/db.json')
//.then(initialState => initialState.json())
//.catch(err => { console.log('fuck u') });}

//fetch('http://localhost:3000/todo')
//  .then(x => x.json())
//  .then(x => console.log(x[0].title)); //выловить асинхронной функцией
//  .then((resp) => {  } );
//console.log(y[0].id);

fetch('http://localhost:3000/todo', {
      headers: { 'Content-Type': 'application/json' }})
      .then(data => data.json())
      .then(async res => {
        const Arrayer = await res;
        //console.log(initialState);
        return Arrayer;
        //console.log(initialState[0].title);
        });


const initialState = { list: ['Eins', 'Zwei'] };
export default function taskReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TASK: {
      const list = [...state.list, action.payload];
      //fs.writeFile('log.json', JSON.stringify(action.payload) );
      return { ...state, list };
      // return Object.assign({}, state, { list });
    }
    default:
      return state;
  }
}
