const getStoredWishList = () => {
    const getStored = localStorage.getItem('wish-list');
    if (getStored) {
        const getStr = JSON.parse(getStored);
        return getStr;
    }
    else {
        return [];
    }
}

const AddToStoredWishList = (id) => {
    const storedList = getStoredWishList();
    if (storedList.includes(id)) {
        console.log(id, 'already exists');

    }
    else {
        storedList.push(id);
        const stringifyStored = JSON.stringify(storedList);
        localStorage.setItem('wish-list', stringifyStored);
    }
}
export { AddToStoredWishList }