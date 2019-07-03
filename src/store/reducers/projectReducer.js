const initState = {
  projects: [
    {id: '1', title: 'this is a title example', content: 'this is a content example'},
    {id: '2', title: 'this is a title example', content: 'this is a content example'},
    {id: '3', title: 'this is a title example', content: 'this is a content example'},
  ]
}

const projectReducer = (state = initState, action) => {
  return state;
}

export default projectReducer;
