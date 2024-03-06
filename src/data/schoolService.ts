import axios from 'axios';

interface ISchool {
    id: string,
    name: string,
    city: string,
    type: string,
    image: string,
    neighborhood: string,
    phoneNumber: string,
    adress: string,
    about: string,
    schoolFeedback: any,
    educationType: any,
}

const baseURL = 'http://localhost:3005';


export function addSchool(data: ISchool) {
  const response = axios.post(`${baseURL}/school`, data);
  return response;
}

export function getSchoolsData() {
  const response = axios.get(`${baseURL}/school`);
  return response;
}

export function getSchoolById(id: any) {
  const response = axios.get(`${baseURL}/school/${id}`);
  return response;
}
