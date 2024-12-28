import { id, JsonRpcProvider } from "ethers";


const provider = new JsonRpcProvider("https://eth-mainnet.g.alchemy.com/v2/Tf44rSGwRPjROnMtiOn22L7-t8QGqCZm");


async function pollback(blocknumber: number) {

    const data = await provider.getLogs({
        address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
        fromBlock:blocknumber,
        toBlock:blocknumber,
        topics:[id("Transfer(address,address,uint256)")]
    });
    console.log(data);
}

pollback(21502458);

