import { init } from '../serverless.js';

export const handler = init({
	appDir: "_app",
	assets: new Set(["favicon.png","robots.txt"]),
	mimeTypes: {".png":"image/png",".txt":"text/plain"},
	_: {
		entry: {"file":"_app/immutable/start-a28d7868.js","imports":["_app/immutable/start-a28d7868.js","_app/immutable/chunks/index-653823e5.js","_app/immutable/chunks/index-6825fac3.js"],"stylesheets":[]},
		nodes: [
			() => import('../server/nodes/0.js'),
			() => import('../server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
});
