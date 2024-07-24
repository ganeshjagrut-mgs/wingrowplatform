import {
    INIT_STALL,
    FETCH_STALL_LIST,
    FETCH_STALL_RECORD,
    CREATE_STALL_RECORD,
    DELETE_STALL,
    UPDATE_STALL_RECORD,
  } from "../../../constant/actionTypes/stall";
  import { stallService } from "../../../services";
  
  export const initStall = () => ({
    type: INIT_STALL,
  });
  
  export const fetchStallListStart = (payload) => ({
    type: FETCH_STALL_LIST.START,
    payload,
  });
  
  export const fetchStallListSuccess = (stalls) => ({
    type: FETCH_STALL_LIST.SUCCESS,
    payload: stalls,
  });
  
  export const fetchStallListError = (error) => ({
    type: FETCH_STALL_LIST.ERROR,
    payload: { error },
  });
  
  export const fetchStallList = (payload) => {
    console.log(payload);
    return (dispatch) => {
      dispatch(fetchStallListStart(payload));
      stallService.fetchStallList(payload).then((stallData) => {
        if (!stallData.isError) {
          dispatch(fetchStallListSuccess(stallData));
        } else {
          dispatch(fetchStallListError(stallData));
        }
      });
    };
  };
  
  export const fetchStallRecordStart = () => ({
    type: FETCH_STALL_RECORD.START,
  });
  
  export const fetchStallRecordSuccess = (stall) => ({
    type: FETCH_STALL_RECORD.SUCCESS,
    payload: stall,
  });
  
  export const fetchStallRecordError = (error) => ({
    type: FETCH_STALL_RECORD.ERROR,
    payload: { error },
  });
  
  export const fetchStallRecord = (payload) => {
    return (dispatch) => {
      dispatch(fetchStallRecordStart(payload));
      stallService.fetchStallRecord(payload).then((stallData) => {
        if (!stallData.isError) {
          dispatch(fetchStallRecordSuccess(stallData));
        } else {
          dispatch(fetchStallRecordError(stallData));
        }
      });
    };
  };
  
  export const createStallRecordStart = () => ({
    type: CREATE_STALL_RECORD.START,
  });
  
  export const createStallRecordSuccess = (newStall) => ({
    type: CREATE_STALL_RECORD.SUCCESS,
    payload: newStall,
  });
  
  export const createStallRecordError = (error) => ({
    type: CREATE_STALL_RECORD.ERROR,
    payload: { error },
  });
  
  export const createStallRecord = (payload) => {
    return (dispatch) => {
      dispatch(createStallRecordStart(payload));
      stallService.createStallRecord(payload).then((stallData) => {
        if (!stallData.isError) {
          dispatch(createStallRecordSuccess(stallData));
        } else {
          dispatch(createStallRecordError(stallData));
        }
      });
    };
  };
  
  export const updateStallRecordStart = (payload,id) => ({
    type: UPDATE_STALL_RECORD.START,
    payload,id
  });
  
  export const updateStallRecordSuccess = (newStall) => ({
    type: UPDATE_STALL_RECORD.SUCCESS,
    payload: newStall,
  });
  
  export const updateStallRecordError = (error) => ({
    type: UPDATE_STALL_RECORD.ERROR,
    payload: { error },
  });
  
  export const updateStallRecord = (payload,id) => {
    return (dispatch) => {
      dispatch(updateStallRecordStart(payload,id));
      stallService.updateStallRecord(payload,id).then((stallData) => {
        if (!stallData.isError) {
          dispatch(updateStallRecordSuccess(stallData));
        } else {
          dispatch(updateStallRecordError(stallData));
        }
      });
    };
  };
  
  export const deleteStallStart = () => ({
    type: DELETE_STALL.START,
  });
  
  export const deleteStallSuccess = (stallId) => ({
    type: DELETE_STALL.SUCCESS,
    payload: { stallId },
  });
  
  export const deleteStallError = (error) => ({
    type: DELETE_STALL.ERROR,
    payload: { error },
  });
  
  export const deleteStall = (stallId) => {
    return (dispatch) => {
      dispatch(deleteStallStart());
      stallService.deleteStall(stallId).then((stallData) => {
        if (!stallData.isError) {
          dispatch(deleteStallSuccess(stallData));
        } else {
          dispatch(deleteStallError(stallData));
        }
      });
    };
  };
  