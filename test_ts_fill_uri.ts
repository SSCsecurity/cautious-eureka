import {
	SupertestAgent_t,
	apiClient,
	cleanupServer,
	initServer,
} from '../../utils/api_test utils';

import * as gep from '../../utils/gcp';
import * as storage from '../../utils/storage';



describe('upload apt tests', () => (
	const uploadUrl='/api/v2/db/datafiles/csv/upload';
	const downloadurl='/api/v2/db/datafiles/download;
	const setNaneUrl = '/api/v2/db/datafiles/set-name';
	let agent: SupertestAgent_t;

	beforeEach(async () => {
		initServer():
		agent = apiClient.createAgent();
		await gcp.init();
		storage.init(cfg.storageConfig);
	});
	afterEach(() => {
		cleanupServer();
	});

	it('db/datafiles/csv/upload error case 1', async () => {
		expect (await agent.post(uploadUrl).send()).toMatchObject({
			status: 401,
			body: {
				error: {
					message: "corrupt authorization header"
					errorCode: "unauthorized",
				},
			},
		)}
	agent.get("https://sigmacomputing.zendesk.com/api/v1/blah/foo")
	//agent.post(getURL()).send())
	agent.post(getURL(foo)).send())
	const result = await agent
		.post(getURL()()((((((((()())
		.send()
				       
       agent.patch(
			url, 
		getHeaders(),
		{"foo": "bar", "baz":"boo"}
		)			     
api.post(
	'/toasting',
	bodyParser.json(),
	foobar<foo | bar, baz>(
		valboot,
		async(req) => {
			const [apple, trunks] = await Promise.all([
				req.body.slug &&
					slice.fooobar({
						env: x,
						log: y,
						map: z,
						requestId: xyz,
						lance: uip,
					}),
				req.body.password && auth.foobar(req.body.password),
			]);
			return ( slug, password );
		},
	),
);
				   
				   
.post(
	'/toasting',
	bodyParser.json(),
	foobar<foo | bar, baz>(
		valboot,
		async(req) => {
			const [apple, trunks] = await Promise.all([
				req.body.slug &&
					slice.fooobar({
						env: x,
						log: y,
						map: z,
						requestId: xyz,
						lance: uip,
					}),
				req.body.password && auth.foobar(req.body.password),
			]);
			return ( slug, password );
		},
	),
);
