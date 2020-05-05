import apiSetup from './setup';
import {ServerResponse} from './types';

export interface IShopItem {
  description: string;
  image: string;
  name: string;
  value: string;
}

export type ShopResponse = ServerResponse<{
  totalCount: number;
  items: Array<{
    shop: IShopItem;
  }>;
}>;

export const getShops = async (
  headers: Record<any, any>,
  totalCount: number = 0
): Promise<ShopResponse | null> => {
  const response = await apiSetup().get(`/shops?pages=${totalCount}`, {
    headers,
  });
  return response?.data as ShopResponse;
};
