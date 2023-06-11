import axios from 'axios';
import Urls from '../constant/GlobalUrl';
import {StatusCode} from './StatusCode';
import AsyncStorage from '@react-native-async-storage/async-storage';

/**
 * Function that makes a POST API request using Axios without the authorization token
 * @param {String} endPoint Endpoint of the url to be requested
 * @param {FormData} formdata Formdata to be sent in the body of the request
 * @param {String} type Content type to be sent in the header
 * @return {JSON}   Response JSON returned from the API
 */
export async function postRequestWithoutToken(endPoint, requestBody) {
  try {
    console.log('base url', Urls.baseUrl + endPoint);
    return axios
      .post(Urls.baseUrl + endPoint, requestBody)
      .then(response => {
        const responseJson = response.data;
        console.log('login log', responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log(error);
        return error.response.data.message;
      });
  } catch (e) {
    console.log('Error in network request' + e);
  }
}

export async function getRequestWithoutToken(endPoint, requestBody) {
  try {
    return axios
      .get(Urls.baseUrl + endPoint, requestBody)
      .then(response => {
        const responseJson = response.data;
        console.log(responseJson);
        return responseJson;
      })
      .catch(error => {
        console.log(error);
        return error.response.data.message;
      });
  } catch (e) {
    console.log('Error in network request' + e);
  }
}

/**
 * Function that makes a get API request using Axios
 * @param    {String} endPoint    Endpoint of the url to be requested
 * @return   {JSON}   Response JSON returned from the API
 */
export async function getApi(endPoint, data) {
  try {
    const token = await AsyncStorage.getItem('@UserToken');
    // const userId = await AsyncStorage.getItem('@UserId');
    console.log('ApiRequest.getApi before', token);
    const BearerToken = `Bearer ${token}`;
    console.log('ApiRequest.getApi after', BearerToken);
    if (token !== null) {
      return axios
        .get(Urls.baseUrl + endPoint + data, {
          headers: {Authorization: BearerToken},
        })
        .then(response => {
          const responseJson = response.data;
          return responseJson;
        })
        .catch(async error => {
          return error.response.data.message;
        });
    }
  } catch (e) {
    console.log('Error in network request' + e);
  }
}

/**
 * Function that makes a post API request using Axios
 * @param    {String} endPoint    Endpoint of the url to be requested
 * @return   {JSON}   Response JSON returned from the API
 */
export async function postApi(endPoint, requestBody) {
  try {
    const token = await AsyncStorage.getItem('@UserToken');
    const BearerToken = `Bearer ${token}`;
    console.log(BearerToken);
    if (token !== null) {
      return axios
        .post(Urls.baseUrl + endPoint, requestBody, {
          headers: {Authorization: BearerToken},
        })
        .then(response => {
          console.log('response post api', response);
          const responseJson = response.data;
          return responseJson;
        })
        .catch(async error => {
          return error.response.data.message;
        });
    }
  } catch (e) {
    console.log('Error in network request' + e);
  }
}
