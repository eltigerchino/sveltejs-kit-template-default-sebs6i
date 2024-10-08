// since there's no dynamic data here, we can prerender
// it so that it gets served as a static asset in production
export const load = async ({ url, depends }) => {
	const filter = url.searchParams.get('filter') ?? '';
	console.log(filter);

	depends('app:blogs');

	return {
		anything: ''
	};
};
