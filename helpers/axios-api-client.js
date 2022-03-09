import { axiosClient } from './axios-instance';

export async function getSliders() {
  const { data } = await axiosClient.get('sliders');
  return data;
}
export async function getProductsId(id) {
  const { data } = await axiosClient.get(`products/${id}`);
  return data;
}
