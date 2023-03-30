const bundleId = '50ef9487';
const bundleCode = 'e71-simple-epc-mfe-' + bundleId;
const widgetCode = 'simple-epc-mfe-' + bundleId;

if (process.env.NODE_ENV === 'production') {
    let publicpath = '/entando-de-app/cmsresources/bundles/' + bundleCode +'/widgets/' + widgetCode + '/'
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = publicpath || './';
}
 
 