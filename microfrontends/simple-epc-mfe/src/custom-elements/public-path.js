const bundleId = '299813b7'; // ent ecr get-bundle-id https://registry.hub.docker.com/cosentinom2/e71-simple-epc-mfe
const bundleCode = 'e71-simple-epc-mfe-' + bundleId;
const widgetCode = 'simple-epc-mfe-' + bundleId;

if (process.env.NODE_ENV === 'production') {
    let publicpath = '/entando-de-app/cmsresources/bundles/' + bundleCode +'/widgets/' + widgetCode + '/'
    // eslint-disable-next-line no-undef
    __webpack_public_path__ = publicpath || './';
}
