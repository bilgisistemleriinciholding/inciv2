
import pageSettingsService from "./services/pageSettingService.js";


export default async (req, res, next) => {
  // detect urls you'd like to redirect
  // call res.redirect(CODE, NEWURL)
  let redirects = await pageSettingsService.getRedirects();

  let _match = undefined;
  if (redirects && redirects.length > 0) {
    _match = redirects.filter(function (_data) {
      return _data.oldUrl == req.url;
    });
  }

  if (_match && _match.length > 0) {
    res.writeHead(301, { Location: _match[0].newUrl });
    res.end();
  } else {
    next();
  }
}

