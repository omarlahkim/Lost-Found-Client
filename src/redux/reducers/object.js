import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import {
  getObjects,
  getObject,
  createObject,
  getObjectsByUser,
} from '../../Helpers/api';

export const fetchObjects = createAsyncThunk(
  'object/fetchObjects',
  async (payload, thunkAPI) => {
    const {location, type} = payload;
    await getObjects(location, type, async (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      global.objectstemp = response.data.data;
    });
    return global.objectstemp;
  },
);

export const fetchObject = createAsyncThunk(
  'object/fetchObject',
  async (id, thunkAPI) => {
    await getObject(id, async (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      global.objecttemp = response.data.data;
    });
    console.log(global.objecttemp);
    return global.objecttemp;
  },
);
export const fetchObjectsByUser = createAsyncThunk(
  'object/fetchObjectsByUser',
  async (userid, thunkAPI) => {
    await getObjectsByUser(userid, async (error, response) => {
      if (error) {
        console.log(error);
        return;
      }
      global.objecttemp = response.data.data;
    });

    return global.objecttemp;
  },
);

export const createObjectRed = createAsyncThunk(
  'object/createObjectRed',
  async (payload, thunkAPI) => {
    const {
      typeChosen,
      locationChosen,
      contextChosen,
      objectPicChosen,
    } = payload;
    await createObject(
      typeChosen,
      locationChosen,
      contextChosen,
      objectPicChosen,
      async (error, response) => {
        if (error) {
          console.log(error);
          return;
        }
        if (!response) {
          return;
        }
        global.objecttemp = response.data;
      },
    );
    console.log(global.objecttemp);
    return global.objecttemp;
  },
);

const objectSlice = createSlice({
  name: 'object',
  initialState: {
    actualobject: {},
    objects: [],
    userobjects: [],
  },
  // reducers actions
  reducers: {},
  extraReducers: {
    [fetchObjects.fulfilled]: (state, action) => {
      state.objects = action.payload;
    },
    [fetchObject.fulfilled]: (state, action) => {
      state.actualobject = action.payload;
    },
    [createObjectRed.fulfilled]: (state, action) => {
      console.log(action.payload);
    },
    [fetchObjectsByUser.fulfilled]: (state, action) => {
      state.userobjects = action.payload;
    },
  },
});

const {actions, reducer} = objectSlice;

export default reducer;
