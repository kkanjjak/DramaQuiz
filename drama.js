const TorrentSearchApi = require("torrent-search-api");
const torrents = TorrentSearchApi.search("금사월", "Drama", 20);
console.log(torrents);
