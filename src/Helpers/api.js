import axios from '../configuration/api';
import qs from 'querystring';
import AsyncStorage from '@react-native-async-storage/async-storage';

axiosConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
};

const BASE_URL = 'http://192.168.1.6:3001';
//USER
//POST
export function signUp(done) {
  const url = BASE_URL + '/user/signup';
  const reqData = {};

  axios
    .post(url, qs.stringify(reqData), axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
export function signIn(username, password, done) {
  const url = BASE_URL + '/user/signin';
  const reqData = {username, password};
  axios
    .post(url, qs.stringify(reqData), axiosConfig)
    .then((response) => {
      done(false, response.data);
    })
    .catch((error) => done(error));
}
//USER
//GET
export function getUser(userid, done) {
  const url = BASE_URL + '/user/user';
  const reqData = {params: {userid}};
  axios
    .get(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
export function getUsers(done) {
  const url = BASE_URL + '/user/';
  const reqData = {};

  axios
    .get(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
//USER
//PUT
export function updateUser(done) {
  const url = BASE_URL + '/user/update';
  const reqData = {};

  axios
    .put(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
//OBJECT
//GET
export async function getObjects(location, type, done) {
  const url = BASE_URL + '/object/';
  var reqData = {params: {}};
  if (location) {
    var reqData = {params: {...reqData.params, location}};
  }
  if (type) {
    var reqData = {params: {...reqData.params, type}};
  }
  await axios
    .get(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => {
      console.log('error');
      done(error);
    });
}
export function getObject(objectid, done) {
  const url = BASE_URL + '/object/object';
  const reqData = {params: {objectid}};

  axios
    .get(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
export function getObjectsResolved(done) {
  const url = '/object/resolved';
  const reqData = {};

  axios
    .get(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
export function getObjectsByUser(userid, done) {
  const url = BASE_URL + '/object/publishedbysuser';
  const reqData = {params: {userid}};
  axios
    .get(url, reqData, axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
//OBJECT
//POST
export function createObject(type, location, context, picture, done) {
  const url = BASE_URL + '/object/';
  const reqData = {type, location, context, picture};
  console.log('Here: ' + JSON.stringify(reqData));
  axios
    .post(url, qs.stringify(reqData), axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
export function addDescription(done) {
  const url = '/object/describe';
  const reqData = {};

  axios
    .post(url, qs.stringify(reqData), axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}
export function resolveObject(done) {
  const url = '/object/resolveobject';
  const reqData = {};

  axios
    .post(url, qs.stringify(reqData), axiosConfig)
    .then((response) => {
      done(false, response);
    })
    .catch((error) => done(error));
}

//module.exports = {signIn,signUp,};
