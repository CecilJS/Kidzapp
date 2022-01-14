import { createContext, PropsWithChildren, useContext, useState } from "react";
import { Basket } from "../models/basket";

interface StoreContextValue {
basket: Basket | null;
setBasket: (basket: Basket) => void;
removeItem: (productId: number, quantity: number) => void;

}

export const StoreContext = createContext<StoreContextValue | undefined>(undefined);// We have instaniated the context with undefined

export function useStoreContext() {
  const context = useContext(StoreContext);
  // We are checking if the context is undefined. This is to cater for occassions where we are in the top level component
  if (context === undefined) {
    throw new Error(
      "useStoreContext must be used within a StoreProvider"
    );
  }
  return context;
}


export function StoreProvider({children}: PropsWithChildren<any>) {
  const [basket, setBasket] = useState<Basket | null>(null);
  
  function removeItem(productId: number, quantity: number) {
    if(!basket) return;
    const items = [...basket.items];
    const itemIndex = items.findIndex(i => i.productId === productId);
    // Find the item in the basket and remove it
    if(itemIndex >= 0) {
        items[itemIndex].quantity -= quantity;
        if(items[itemIndex].quantity === 0) items.splice(itemIndex, 1);
            
            setBasket(prevState => {
                return {...prevState!, items}
                
                })
        }
    }
  

  return (
    <StoreContext.Provider value={{basket, setBasket, removeItem}}>
        {children}
    </StoreContext.Provider>
  );

}

/*
Our context is expecting the values with the types defined in the StoreContextValue interface. 
-- Look at the StoreContextValue interface on line 4

Our context was created with the createContext function.
-- Look at the createContext function on line 11

We then created our own react hook to access the context.
It is important to note that we are using the useStoreContext hook.

We pass our context as a parameter to the useStoreContext hook.
This exposes the state in our context to our component.

It also exposes the functions we defined in the storeProvider to our component.

*/