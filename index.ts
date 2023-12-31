import { ScrollDexModule } from "./toolbox/Scroll/dex";
import { ScrollBridgeModule } from "./toolbox/Scroll/Bridgescroll";
import { parseFile } from "./helperMod/viemHelper";
import { Modules, Taiko, Scroll, Manta } from "./setting";
import chalk from "chalk";
import { TaikoBridgeModule } from "./toolbox/Taiko/taiko";
import { mintNftTaiko } from "./toolbox/Taiko/nft";
import { TaikoDexModule } from "./toolbox/Taiko/dex";
import { sleep } from "./helperMod/viemHelper";

const wallet = parseFile('./privateKey.txt');

async function run() {
  const enabledModules = [];
  const disabledModules = [];

  if (Modules.scroll) {
    if (Scroll.bridge) {
      enabledModules.push('Scroll Bridge');
    }
    if (Scroll.fabric) {
      enabledModules.push('Scroll Fabric');
    }
  } else {
    disabledModules.push('Scroll');
  }

  if (Modules.taiko) {
    if (Taiko.bridge) {
      enabledModules.push('Taiko Bridge');
    }
    if (Taiko.swap) {
      enabledModules.push('Taiko Swap');
    }
    if (Taiko.fabric) {
      enabledModules.push('Taiko Fabric');
    }
    if (Taiko.mint) {
      enabledModules.push('Taiko Mint');
    }
  } else {
    disabledModules.push('Taiko');
  }

  if (Modules.manta) {
    enabledModules.push('Manta');
  } else {
    disabledModules.push('Manta');
  }

  console.log(chalk.blue('Включенные модули:'));
  console.log(enabledModules);
  console.log(chalk.red('Отключенные модули:'));
  console.log(disabledModules);

  for (let i = 0; i < wallet.length; i++) {
    if (Modules.scroll) {
      if (Scroll.bridge) {
        const scrollBridge = new ScrollBridgeModule(wallet[i]);
        await scrollBridge.bridgeScroll();
        await sleep(60);
      };
      if (Scroll.fabric) {
        const scrollDex = new ScrollDexModule(wallet[i]);
        await scrollDex.scrollFabric(Scroll.numberScrollContracts);
        await sleep(Scroll.sleep);
      };
    };
    if (Modules.taiko) {
      if (Taiko.bridge) {
        const taikoBridge = new TaikoBridgeModule(wallet[i]);
        await taikoBridge.bridgeDepositeL1L2();
        await sleep(Taiko.sleep);
      };
      if (Taiko.swap) {
        const taikoDex = new TaikoDexModule(wallet[i]);
        await taikoDex.taikoSwap(Taiko.toToken);
        await sleep(Taiko.sleep);
      };
      if (Taiko.fabric) {
        const taikoDex = new TaikoDexModule(wallet[i]);
        await taikoDex.taikoFabric(Taiko.numberTaikoContracts);
        await sleep(Taiko.sleep);
      };
      if (Taiko.mint) {
        const taikoMint = new mintNftTaiko(wallet[i]);
        await taikoMint.mintNftHelloTaiko();
        await sleep(Taiko.sleep);
      };
    };
    if (Modules.manta) {
      const mantaBridge = new ScrollBridgeModule(wallet[i]);
      await mantaBridge.bridgeScroll();
      await sleep(Manta.sleep);
    };
  };
};

run();
