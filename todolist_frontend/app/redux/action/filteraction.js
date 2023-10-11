export const searchfilter =  (data)=>{
    return {
        type: 'filters/searchfilterChange',
        payload:data,
    }
}


export const statusfilter =  (data)=>{
    return {
        type: 'filters/statusfilterChange',
        payload:data,
    }
}

export const sortfilter =  (data)=>{
    return {
        type: 'filters/sortChange',
        payload:data,
    }
}