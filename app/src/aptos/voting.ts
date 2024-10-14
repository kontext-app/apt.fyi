import { Aptos, AptosConfig, Network } from '@aptos-labs/ts-sdk';
import { InputTransactionData } from '@aptos-labs/wallet-adapter-react';
import { ScoringConfig } from '../../../feeder-nest/src/types';

const VOTING_CONTRACT_ADDRESS =
  process.env.NEXT_PUBLIC_APTOS_VOTING_CONTRACT_ADDRESS;
console.log({ VOTING_CONTRACT_ADDRESS });
export async function proposeOnAptos(
  signAndSubmitTransaction: (transaction: InputTransactionData) => Promise<any>,
  community: string,
  twitterUsername: string,
) {
  const config = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(config);

  const transaction: InputTransactionData = {
    data: {
      function: `${VOTING_CONTRACT_ADDRESS}::voting::create_proposal`,
      functionArguments: [VOTING_CONTRACT_ADDRESS, community, twitterUsername],
    },
  };
  try {
    // sign and submit transaction to chain
    const response = await signAndSubmitTransaction(transaction);
    // wait for transaction
    await aptos.waitForTransaction({ transactionHash: response.hash });
  } catch (error: any) {
    console.log(error);
  }
}

export async function voteForProposalOnAptos(
  signAndSubmitTransaction: (transaction: InputTransactionData) => Promise<any>,
  proposalId: string,
) {
  const config = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(config);

  const transaction: InputTransactionData = {
    data: {
      function: `${VOTING_CONTRACT_ADDRESS}::voting::vote`,
      functionArguments: [VOTING_CONTRACT_ADDRESS, proposalId],
    },
  };
  try {
    // sign and submit transaction to chain
    const response = await signAndSubmitTransaction(transaction);
    // wait for transaction
    await aptos.waitForTransaction({ transactionHash: response.hash });
  } catch (error: any) {
    console.log(error);
  }
}

export async function proposeWeightsOnAptos(
  signAndSubmitTransaction: (transaction: InputTransactionData) => Promise<any>,
  scoringConfig: ScoringConfig,
) {
  console.log(process.env);
  const config = new AptosConfig({ network: Network.TESTNET });
  const aptos = new Aptos(config);

  const transaction: InputTransactionData = {
    data: {
      function: `${VOTING_CONTRACT_ADDRESS}::voting::propose_algorithm_weights`,
      functionArguments: [
        VOTING_CONTRACT_ADDRESS,
        scoringConfig.weights.followersWeight,
        scoringConfig.weights.commentWeight,
        scoringConfig.weights.quoteWeight,
        scoringConfig.weights.retweetWeight,
      ],
    },
  };
  try {
    // sign and submit transaction to chain
    const response = await signAndSubmitTransaction(transaction);
    // wait for transaction
    await aptos.waitForTransaction({ transactionHash: response.hash });
  } catch (error: any) {
    console.log(error);
  }
}

// async function useSignAndSubmitAptosTransaction(
//   fn: {
//     address: string;
//     module: string;
//     functionName: string;
//   },
//   args: string[]
//   // signAndSubmitTransaction: (transaction: InputTransactionData) => Promise<any>,
//   // proposalId: string,
// ) {
//   const { signAndSubmitTransaction } = useWallet();

//   const config = new AptosConfig({ network: Network.TESTNET });
//   const aptos = new Aptos(config);
//   const moduleAddress =
//     '0x74f1379a308314a70aa1e7f5684f5e86f4d4e05e325e1fe8fb5628736820d759';
//   const transaction: InputTransactionData = {
//     data: {
//       function: `${fn.address}::${fn.module}::${fn.functionName}`,
//       functionArguments: args,
//     },
//   };
//   try {
//     // sign and submit transaction to chain
//     const response = await signAndSubmitTransaction(transaction);
//     // wait for transaction
//     const res = await aptos.waitForTransaction({ transactionHash: response.hash });
//     res.
//   } catch (error: any) {
//     console.log(error);
//   }
//   return
// }
