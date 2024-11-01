import Web3 from 'web3';
import dotenv from 'dotenv';

dotenv.config();
const infuraUrl = process.env.INFURA_URL as string;
const web3 = new Web3(new Web3.providers.HttpProvider(infuraUrl));

export default web3;
