import toast from "react-hot-toast";

const getGadgetList = () => {
    const storeGadgetList = localStorage.getItem('gadget-list');
    if(storeGadgetList){
        const gadgetList = JSON.parse(storeGadgetList);
        return gadgetList;
    }
    else{
        return [];
    }
}

const addGadgetToCart = (card) => {
    const addGadgets = getGadgetList();
        addGadgets.push(card)
        const storedListGadget = JSON.stringify(addGadgets);
        localStorage.setItem('gadget-list',storedListGadget); 
        toast.success('Successfully Added In Cart');
}




const removeCartGadget = (id) => {
    const cartsRemove = getGadgetList();
    const remainCart = cartsRemove.filter(removeItem => removeItem.product_id != id);
    const storedRemoveGadget = JSON.stringify(remainCart);
    localStorage.setItem('gadget-list',storedRemoveGadget); 
    toast.success('Successfully removed form Cart');
}


const clearCartGadgets = () => {
    localStorage.removeItem('gadget-list');
    localStorage.removeItem('favorite-list');
    toast.success('All items successfully removed from Cart');
}



const getGadgetFavoriteList = () => {
    const storeFavoriteList = localStorage.getItem('favorite-list');
    if(storeFavoriteList){
        const FavoriteList = JSON.parse(storeFavoriteList);
        return FavoriteList;
    }
    else{
        return [];
    }
}

const addGadgetToFavorite = (favorite) => {
    const addFavorites = getGadgetFavoriteList();
        const isExist = addFavorites.find(item => item.product_id == favorite.product_id);
        if(isExist) return   toast.error(' This Item in Favorite is already exist')
  
        addFavorites.push(favorite)
        const storedListFavorites = JSON.stringify(addFavorites);
        localStorage.setItem('favorite-list',storedListFavorites);
        toast.success('Successfully Added In Favorite');     
}


const removeFavoriteGadget = (id) => {
    const favoritesRemove = getGadgetFavoriteList();
    const remainFavorite = favoritesRemove.filter(removeFavoriteItem => removeFavoriteItem.product_id != id);
    const storedRemoveFavorite = JSON.stringify(remainFavorite);
    localStorage.setItem('favorite-list',storedRemoveFavorite); 
    toast.success('Successfully removed form favorite');
}




 
export {addGadgetToCart,getGadgetList,removeCartGadget,getGadgetFavoriteList,addGadgetToFavorite,clearCartGadgets,removeFavoriteGadget}