import web3 from "./web3";
import CampaignFactory from "./build/CampaignFactory.json";

const instance = new web3.eth.Contract(
	JSON.parse(CampaignFactory.interface),
	"0x2c95873d1Fc2d7Fb09D9BbD9A82978046428CBea"
);

export default instance;
