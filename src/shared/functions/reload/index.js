export const needsReload = (reload, setReload) => {
    if(reload){
        window.location.reload(true);
        setReload(false);
        window.location.reload(false);
    }
}