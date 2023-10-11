
const initState =  {
    searchtext:'', 
    status:'All',
    sortby:'Added date'
}


const filterReducer = (state = initState, action) => {
   
    switch (action.type) {
      case 'filters/searchfilterChange':
        return {
          ...state,
          searchtext:action.payload
        }

      case 'filters/statusfilterChange':
          return {
            ...state,
            status:action.payload
          } 
          
      case 'filters/sortChange':
        return {
            ...state,
            sortby:action.payload
        }  
      default:
        return state;
    }
};
  
  export default filterReducer;