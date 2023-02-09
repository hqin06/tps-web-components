import { IApi } from 'umi';

export default (api: IApi) => {
	// 设置logo
	api.addHTMLLinks(() => [{ rel: 'icon', type: "image/png", href: "./images/favicon.ico" }]);
	// 加载全局设置
	api.addHTMLScripts(() => [`./options.js`]);
	// api.modifyHTML(($) => {
	// 	return $;
	// });
	// api.addHTMLMetas(() => [{ name: 'foo', content: 'bar' }]);
	// api.addHTMLLinks(() => [{ rel: 'foo', content: 'bar' }]);
	api.addHTMLStyles(() => [`body { height: 100%; }`]);
	api.addHTMLStyles(() => [`* { padding: 0px; }`]);
	// api.addHTMLHeadScripts(() => [`console.log('hello world from head')`]);
	// api.addHTMLScripts(() => [`console.log('hello world')`]);
	// api.addEntryCodeAhead(() => [`console.log('entry code ahead')`]);
	// api.addEntryCode(() => [`console.log('entry code')`]);
};
