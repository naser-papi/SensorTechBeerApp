export const NormalizeUrl = (urlInfo) => {
    if (urlInfo.params != null && urlInfo.url.indexOf("{") > -1) {
        const arr = Object.keys(urlInfo.params);
        let result = urlInfo.url;
        arr.map(key => {
            result = result.replace(`{${key}}`, urlInfo.params[key])
        });
        return `${window.defaults.SERVER_URL}/${result}`;
    } else {
        return `${window.defaults.SERVER_URL}/${urlInfo.url}`;
    }
}
export const NormalizeStatus = (status) => {

}