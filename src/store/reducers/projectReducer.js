const initState = {
  projects: [
    {id: '1', title: 'this is a title example', content: 'this is a content example'},
    {id: '2', title: 'this is a title example', content: 'this is a content example'},
    {id: '3', title: 'this is a title example', content: 'this is a content example'},
  ]
}

const projectReducer = (state = initState, action) => {
  switch(action.type) {
    case 'CREATE_PROJECT':
      console.log('created_project', action.project);
      return state;
    case 'CREATE_PROJECT_ERROR':
      console.log('create project error', action.err);
      return state;
    default:
      return state;
  }
}

export default projectReducer;
