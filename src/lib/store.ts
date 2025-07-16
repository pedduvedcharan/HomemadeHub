import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface CartItem {
  itemId: string;
  vendorId: string;
  name: string;
  price: number;
  quantity: number;
  photoKey?: string;
}

interface CartStore {
  items: CartItem[];
  addItem: (item: Omit<CartItem, 'quantity'>) => void;
  removeItem: (itemId: string) => void;
  updateQuantity: (itemId: string, quantity: number) => void;
  clearCart: () => void;
  getTotal: () => number;
  getItemCount: () => number;
}

export const useCartStore = create<CartStore>()(
  persist(
    (set, get) => ({
      items: [],
      
      addItem: (item) => {
        set((state) => {
          const existingItem = state.items.find(i => i.itemId === item.itemId);
          if (existingItem) {
            return {
              items: state.items.map(i =>
                i.itemId === item.itemId
                  ? { ...i, quantity: i.quantity + 1 }
                  : i
              )
            };
          }
          return {
            items: [...state.items, { ...item, quantity: 1 }]
          };
        });
      },
      
      removeItem: (itemId) => {
        set((state) => ({
          items: state.items.filter(i => i.itemId !== itemId)
        }));
      },
      
      updateQuantity: (itemId, quantity) => {
        set((state) => ({
          items: state.items.map(i =>
            i.itemId === itemId
              ? { ...i, quantity: Math.max(0, quantity) }
              : i
          ).filter(i => i.quantity > 0)
        }));
      },
      
      clearCart: () => {
        set({ items: [] });
      },
      
      getTotal: () => {
        const { items } = get();
        return items.reduce((total, item) => total + (item.price * item.quantity), 0);
      },
      
      getItemCount: () => {
        const { items } = get();
        return items.reduce((count, item) => count + item.quantity, 0);
      },
    }),
    {
      name: 'homemade-hub-cart',
    }
  )
);

// User preferences store
interface UserPreferences {
  location: {
    lat: number;
    lng: number;
    address: string;
  } | null;
  searchRadius: number;
  setLocation: (location: { lat: number; lng: number; address: string }) => void;
  setSearchRadius: (radius: number) => void;
}

export const useUserPreferences = create<UserPreferences>()(
  persist(
    (set) => ({
      location: null,
      searchRadius: 5, // 5km default
      
      setLocation: (location) => set({ location }),
      setSearchRadius: (searchRadius) => set({ searchRadius }),
    }),
    {
      name: 'homemade-hub-preferences',
    }
  )
);
