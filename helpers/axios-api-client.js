import { axiosClient } from './axios-instance';

export async function getSliders() {
  const { data } = await axiosClient.get('sliders');
  return data;
}
export async function getProduct(id) {
  const { data } = await axiosClient.get(`products/${id}`);
  return data;
}
export async function getCategories() {
  const { data } = await axiosClient.get(`categories`);
  return data;
}

export async function getCategory(id) {
  const { data } = await axiosClient.get(`categories/${id}`);
  return data;
}

export async function getFavorites() {
  const { data } = await axiosClient.get(`favorites`);
  return data;
}

export async function addToFavorite() {
  const { data } = await axiosClient.post(`favorites`);
  return data;
}
