import 'styles/globals.css';
import { httpBatchLink } from '@trpc/client';
import { Toaster } from "../components/ui/toaster"
import { PetraWallet } from 'petra-plugin-wallet-adapter';
import { AptosWalletAdapterProvider } from '@aptos-labs/wallet-adapter-react';

import { Network } from 'aptos';

export let DEVMODE = false;
let lensCfg: Partial<LensConfig> = {
  environment: production,
  debug: DEVMODE,
};

const aptosWallets = [new PetraWallet()];


function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter() as { locale: Locale };
  const url = `${getBaseUrl()}/api/trpc`;

  return (
        <AptosWalletAdapterProvider
          plugins={aptosWallets}
          autoConnect={true}
          dappConfig={{ network: Network.TESTNET }}
        >
              <Component {...pageProps} />
        </AptosWalletAdapterProvider>
    </>
  );
}

