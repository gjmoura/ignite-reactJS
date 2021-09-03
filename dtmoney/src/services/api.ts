import axio from 'axios';

export const api = axio.create({
  baseURL: 'http://localhost:3000/api',
})